var postcss = require('postcss');

module.exports = postcss.plugin('postcss-unopacity', function (opts) {
	var method = opts && /^(copy|warn)$/.test(opts.method) ? opts.method : 'replace';
	var prefixed = opts && 'prefixed' in opts ? opts.prefixed : false;

	return function (css, result) {
		css.walkDecls('opacity', function (decl) {
			var value = Math.floor(decl.value * 100);
			var clone = prefixed ? decl.clone({ prop: '-ms-filter', value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + value + ')"' }) : decl.clone({ prop: 'filter', value: 'alpha(opacity=' + value + ')' });

			if (method === 'replace') decl.replaceWith(clone);
			else if (method === 'copy') decl.parent.insertBefore(decl, clone);
			else if (method === 'warn') result.warn('opacity detected', { node: decl });
		});
	};
});
