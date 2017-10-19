var gulp = require('gulp'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify');

// compile es6
gulp.task('babel', function() {
  gulp.src('index.js')
        .pipe(babel({
          presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  gulp.watch('index.js', ['babel']);
});
