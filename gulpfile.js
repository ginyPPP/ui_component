/**
 * Created by Administrator on 2017-07-03.
 */


    // ���� ���� = require ('����̸�);
var gulp  = require ('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

/*
gulp.task( task �̸�,  �Լ�/�͸��Լ�);
*/

gulp.task('hello',function(){
  return console.log('Hello World!');
});

gulp.task('hello1',function(){
  return console.log('Hello World!');
});

gulp.task('hello2',function(){
  return console.log('Hello World!');
});

//default �� ����Ͽ� ���� ���� ������ �����ϴ� ����� ���
//gulp�� �����ϸ� default �� hello task ����
//gulp.task('default', ['hello','hello1','hello2']);


//
//���� ��ħ----f5 Ű�� ������ �ʰ� �۾��Ϸ��� �� ��---2���� ���
// 1��°
//gulp.task('livereload', function(){
//    gulp.src('less/*.less')
//        .pipe(include())
//        .pipe(gulp.dest('css'))
//        .pipe(livereload());
//
//});

//2��° ���� ��ħ ���
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*','*'])
      .pipe( livereload());   // pipe() �Լ��� ����� ����� ������ �ִ� �Լ��̴�.
});



// header, footer ���� ���� �и��ϴ� ���
//include �� html ���� ���̴� ���
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));   // �������� ������ html �� ����.
});

//sass  ����
gulp.task('sass', function(){
  return gulp.src('css_src/*.scss')//src---����
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));  // dest �� ������  =>css���� �Ʒ��� ����

});

gulp.task('watch',function(){
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('html_src/**', ['include', 'livereload']);
  gulp.watch('css_src/**', ['sass', 'livereload']);
  gulp.watch('js_src/**', ['tabmenu', 'livereload']);

});





//concat ���� - ���� ���� ������ �ϳ��� ���Ϸ� ��ġ�� ���

gulp.task('tabmenu', function() {
  return gulp.src('js_src/tab_menu/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('tab_menu.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js/'));
});

gulp.task('default', ['livereload','include','sass', 'tabmenu','watch']);






















