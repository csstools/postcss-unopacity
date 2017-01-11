# UnOpacity [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[UnOpacity] lets you use the `opacity` property in older Internet Explorer.

```css
/* before */

.figure {
    opacity: .5;
}

/* after */

.figure {
    filter: alpha(opacity=50);
}
```

## Usage

Add [UnOpacity] to your build tool:

```bash
npm install postcss-unopacity --save-dev
```

#### Node

Use [UnOpacity] to process your CSS:

```js
require('postcss-unopacity').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [UnOpacity] as a plugin:

```js
postcss([
	require('postcss-unopacity')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [UnOpacity] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-unopacity')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [UnOpacity] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-unopacity')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

## Options

#### `browsers`

Type: `String` | `Array`  
Default: `null`

A list of browsers you want to target in your project. If no older Internet Explorer browsers are specified, this plugin will not make any changes to your CSS.

```js
require('postcss-unopacity')({
  browsers: ["> 1%", "last 2 versions", "Firefox ESR"]
})
```

This may also be defined in `package.json`.

```json
{
  "browserslist": ["> 1%", "last 2 versions", "Firefox ESR"]
}
```

#### `method`

Type: `String`  
Default: `'replace'`

##### `replace`

Replace any `opacity` property with a fallback.

```css
/* before */

.figure {
    opacity: .5;
}

/* after */

.figure {
    filter: alpha(opacity=50);
}
```

##### `copy`

Copy any `opacity` property with a fallback.

```css
/* before */

.figure {
    opacity: .5;
}

/* after */

.figure {
    filter: alpha(opacity=50);
    opacity: .5;
}
```

##### `warn`

Warn when an `opacity` property is used.

#### `prefixed`

Type: `Boolean`  
Default: `false`

##### `true`

Use an `-ms-filter` property as a fallback.

```css
/* before */

.figure {
    opacity: .5;
}

/* after */

.figure {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
}
```

##### `false`

Use a `filter` property as a fallback.

```css
/* before */

.figure {
    opacity: .5;
}

/* after */

.figure {
    filter: alpha(opacity=50);
}
```

[npm-url]: https://www.npmjs.com/package/postcss-unopacity
[npm-img]: https://img.shields.io/npm/v/postcss-unopacity.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-unopacity
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-unopacity.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/postcss-unopacity.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[UnOpacity]: https://github.com/jonathantneal/postcss-unopacity
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
