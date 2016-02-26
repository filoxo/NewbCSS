/**
 * Created by cfiloteo on 11/17/15.
 */
var gulp 	= require('gulp'),
	rename	= require('gulp-rename'),
	jade	= require('gulp-jade'),
	babel	= require("gulp-babel"),
	sass 	= require('gulp-sass');;

gulp
	.task('sass', function() {
		gulp.src('src/scss/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('dist/css/'))
	})
	.task('default',function() {
	    gulp.watch('src/scss/*.scss',['sass']);
	    gulp.watch('views/index.jade', ['make-index']);
	})
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
		gulp.src('./views/index.jade')
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('./'))
	});