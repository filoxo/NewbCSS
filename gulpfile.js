/**
 * Created by cfiloteo on 11/17/15.
 */
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	jade   = require('gulp-jade'),
	babel  = require("gulp-babel");

gulp
	.task('normalize', function() {
	return gulp.src(['node_modules/normalize.css/normalize.css'])
		.pipe(rename('_normalize.scss'))
		.pipe(gulp.dest('src/scss/'))
	})
	.task('transform', function () {
		return gulp.src('src/js/*.js')
			.pipe(babel())
			.pipe(gulp.dest('dist/js/'));
	})
	.task('make-index', function() {
		return gulp.src('./views/index.jade')
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('./'))
	});