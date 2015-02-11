var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// Компилируем SCSS
gulp.task('sass', function() {
	return gulp.src(['app/style.scss'])
		.pipe(sass())
		.on('error', function(err){ console.log(err.message); })
		.pipe(gulp.dest('public/css'));
});

// Компилируем JADE
gulp.task('jade', function() {
	gulp.src('app/[^_]*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./public/'))
});

// Наблюдаем за изменениями файлов
gulp.task('watch', function() {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.jade', ['jade']);
});

// Задача по-умолчанию
gulp.task('default', ['jade', 'sass', 'watch']);