var del = require('del');
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

// Удаляем папку bower_components
gulp.task('clean:bower', function (cb) {
	del([
		'bower_components'
	], cb);
});

// Общая задача копирования библиотек
gulp.task('bower:copy', ['bower:copy-js'], function() {

});

// Копируем JavaScript библиотеки
gulp.task('bower:copy-js', ['bower:copy-jquery-ui'], function() {
	var jsFilter = gulpFilter('**/*.js');
	return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
		.pipe(jsFilter)
		.pipe(gulp.dest('app/js/vendor'))
});

// Копируем библиотеку JQueryUI
gulp.task('bower:copy-jquery-ui', function() {
	var jsFilter = gulpFilter('**/*.js');
	return gulp.src(['bower_components/jquery.ui/ui/**/*'])
		.pipe(jsFilter)
		.pipe(gulp.dest('app/js/vendor/jquery.ui'));
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

// Копируем JS
gulp.task('js', ['blocks-js'], function() {
	return gulp.src(['app/js/**/*'])
		.pipe(gulp.dest('public/js'));
});

// Собираем JS из блоков
gulp.task('blocks-js', function() {
    return gulp.src('app/blocks/**/*.js')
        .pipe(concat('blocks.js'))
        .pipe(gulp.dest('public/js/'));
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

// Копируем папку files
gulp.task('files', function () {
	return gulp.src('app/files/*')
		.pipe(gulp.dest('public/files'));
});

// Копируем директорию PHP-скриптов
gulp.task('php', function () {
	return gulp.src('app/php/**/*')
		.pipe(gulp.dest('public/php'));
});

// Наблюдаем за изменениями файлов
gulp.task('watch', function() {
	gulp.watch('app/**/*.jade', ['jade']);
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/**/*.php', ['php']);
});

// Задача по-умолчанию
gulp.task('default', ['bower:copy', 'jade', 'sass', 'js', 'fonts', 'img', 'files', 'php', 'watch']);