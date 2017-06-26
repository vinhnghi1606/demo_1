var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var useref = require('gulp-useref');

gulp.task('test', function(){
	console.log('ghsrdg');
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		},
	})
});

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

// gulp.task('useref', function(){
// 	return gulp.src('*.html')
// 	.pipe(useref())
// 	.pipe(gulp.dest('./'))
// });

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});