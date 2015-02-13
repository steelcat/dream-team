var del = require('del');
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// Удаляем папку bower_components
gulp.task('clean:bower', function (cb) {
	del([
		'bower_components'
	], cb);
});

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
	return gulp.src(['app/scss/style.scss'])
		.pipe(sass())
		.on('error', function(err){ console.log(err.message); })
		.pipe(gulp.dest('public/css'));
});

// Копируем шрифты
gulp.task('fonts', function () {
	return gulp.src('app/fonts/*')
		.pipe(gulp.dest('public/fonts'));
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

// Копируем PHP для jQuery-File-Upload
gulp.task('php-file-upload', function () {
	return gulp.src('app/php/file-upload/*')
		.pipe(gulp.dest('public/uploaded-images'));
});

// Задача по-умолчанию
gulp.task('default', ['jade', 'sass', 'fonts', 'img', 'watch', 'php-file-upload']);