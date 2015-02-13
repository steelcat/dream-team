var del = require('del');
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// Удаляем папку bower_components
gulp.task('clean:bower', function (cb) {
	del([
		'bower_components'
	], cb);
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
gulp.task('js', ['bower:copy-js'], function() {
	return gulp.src(['app/js/**/*'])
		.pipe(gulp.dest('public/js'));
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

// Копируем директорию PHP-скриптов
gulp.task('php', function () {
	return gulp.src('app/php/**/*')
		.pipe(gulp.dest('public/php'));
});

// Наблюдаем за изменениями файлов
gulp.task('watch', function() {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.jade', ['jade']);
});

// Задача по-умолчанию
gulp.task('default', ['jade', 'sass', 'js', 'fonts', 'img', 'php', 'watch']);