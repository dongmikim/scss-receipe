const { src, dest } = require('gulp');

const sass = require('gulp-sass');

const paths = {
  css: {
    src: './src/scss/*.scss',
    dest: './dist/css'
  }
}

const options = {
  scss: {
    outputStyle: 'expanded',
    sourceComments: false
  }
}

function styles() {
  return src(paths.css.src, { sourcemaps: true })
    .pipe(sass(options.scss).on('error', sass.logError))
    .pipe(dest(paths.css.dest, { sourcemaps: true }))
}

exports.style = styles;