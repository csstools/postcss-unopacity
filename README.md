# UnOpacity [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[UnOpacity] replaces the `opacity` property with a `filter` property. This can be useful for outputting CSS for older browsers like Internet Explorer 8.

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

```js
require('postcss-unopacity')({ /* options */ }).process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [UnOpacity] as a PostCSS plugin:

```js
postcss([
    require('postcss-unopacity')({ /* options */ })
]);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [UnOpacity] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./css/src/*.css').pipe(
        postcss([
            require('postcss-unopacity')({ /* options */ })
        ])
    ).pipe(
        gulp.dest('./css')
    );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [UnOpacity] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-unopacity')({ /* options */ })
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

### Options

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

[ci]: https://travis-ci.org/jonathantneal/postcss-unopacity
[ci-img]: https://travis-ci.org/jonathantneal/postcss-unopacity.svg
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[UnOpacity]: https://github.com/jonathantneal/postcss-unopacity
