/**
 * Created by cfiloteo on 11/17/15.
 */
var gulp = require('gulp'),
	rename = require('gulp-rename');

gulp.task('normalize', function() {
	return gulp.src(['node_modules/normalize.css/normalize.css'])
		.pipe(rename('_normalize.scss'))
		.pipe(gulp.dest('src/'));
});