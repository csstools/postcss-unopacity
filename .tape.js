module.exports = {
	'postcss-unopacity': {
		'basic': {
			message: 'supports basic usage'
		},
		'basic:copy': {
			message: 'supports { method: "copy" } usage',
			options: {
				method: 'copy'
			}
		},
		'basic:warn': {
			message: 'supports { method: "warn" } usage',
			options: {
				method: 'warn'
			},
			warning: 1
		},
		'basic:prefixed': {
			message: 'supports { method: "prefixed" } usage',
			options: {
				prefixed: true
			}
		},
		'basic:last-2-versions': {
			message: 'supports { browsers: "last 2 versions" } usage',
			options: {
				browsers: "last 2 versions"
			}
		}
	}
};

