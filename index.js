// tooling
const browserslist = require('browserslist');
const postcss      = require('postcss');

// plugin
module.exports = postcss.plugin(
	'postcss-unopacity',
	({
		browsers = null,
		method = 'replace',
		prefixed = false
	} = {}) => {
		const methodSanitized = (/^(copy|replace|warn)$/).test(method) ? method : 'replace';

		return (root, result) => {
			const {
				browserslistOpts = {
					from: process.cwd()
				}
			} = result;

			const supportedBrowsers = browserslist(browsers, browserslistOpts);
			const concernedBrowsers = browserslist('ie 6-8');

			const withoutSupport = concernedBrowsers.some(
				(browser) => supportedBrowsers.indexOf(browser) >= 0
			);

			if (withoutSupport) {
				root.walkDecls(
					'opacity',
					(decl) => {
						const value = Math.floor(decl.value * 100);

						const clone = prefixed
						? decl.clone({
							prop: '-ms-filter',
							value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + value + ')"' })
						: decl.clone({
							prop: 'filter',
							value: 'alpha(opacity=' + value + ')'
						});

						if (methodSanitized === 'replace') {
							decl.replaceWith(clone);
						} else if (methodSanitized === 'copy') {
							decl.parent.insertBefore(decl, clone);
						} else if (methodSanitized === 'warn') {
							result.warn(
								'opacity detected',
								{
									node: decl
								}
							);
						}
					}
				);
			}
		};
	}
);
