var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// Компилируем JADE
gulp.task('jade', function() {
	gulp.src('app/[^_]*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./public/'))
});

// Компилируем SCSS
gulp.task('sass', function() {
	return gulp.src(['app/style.scss'])
		.pipe(sass())
		.on('error', function(err){ console.log(err.message); })
		.pipe(gulp.dest('public/css'));
});

// Копируем изображения
gulp.task('img', function () {
	return gulp.src('app/img/*')
		.pipe(gulp.dest('public/img'));
});

// Наблюдаем за изменениями файлов
gulp.task('watch', function() {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.jade', ['jade']);
});

// Задача по-умолчанию
gulp.task('default', ['jade', 'sass', 'img', 'watch']);