'use strict';

const gulp = require('gulp'),
      jade = require('gulp-jade'),
      notify = require("gulp-notify"),
      plumber = require('gulp-plumber'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create();

gulp.task('jade', function(){
	gulp.src('./templates/pages/*.jade')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(jade({pretty: '\t'}))
		.pipe(gulp.dest('./')) // Выводим сгенерированные HTML-файлы в корневую папку
		.pipe(notify('Jade is compile!'));
});

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 3 versions', '> 2%'],
			cascade: false
		}))
		// .pipe(cssmin())
		.pipe(gulp.dest('./css'))
		.pipe(notify('Sass is compile!'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('./templates/**/*.jade', ['jade']);
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('tempcss', function() {
  return gulp.src('./temp/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions', "> 2%"],
      cascade: false
    }))
    .pipe(gulp.dest('./temp'))
});

gulp.task('browse', function() {
	browserSync.init({
    server: {
        baseDir: './'
    },
    host: 'localhost',
    port: 9000,
    injectChanges: true,
    logPrefix: 'App Front-End'
  });

	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browse', 'jade', 'sass', 'watch']);
