/**
 * Created by Administrator on 2017-07-03.
 */


    // 변수 선언 = require ('모듈이름);
var gulp  = require ('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

/*
gulp.task( task 이름,  함수/익명함수);
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

//default 를 사용하여 같은 것을 여러번 실행하는 경우의 방법
//gulp를 실행하면 default 로 hello task 실행
//gulp.task('default', ['hello','hello1','hello2']);



//새로 고침----f5 키를 누르지 않고 작업하려고 할 때---2가지 방법
// 1번째
//gulp.task('livereload', function(){
//    gulp.src('less/*.less')
//        .pipe(include())
//        .pipe(gulp.dest('css'))
//        .pipe(livereload());
//
//});

//2번째 방법
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*','*'])
      .pipe( livereload());   // pipe() 함수는 모듈의 기능을 실행해 주는 함수이다.
});

gulp.task('watch',function(){
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('html_src/**', ['include', 'livereload']);
  gulp.watch('css_src/**', ['sass', 'livereload']);

});

// header, footer 공통 영역 분리하는 방법
//include 는 html 에서 쓰이는 언어
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));   // 목적지는 폴더라서 html 만 쓴다.
});

//sass  실행
gulp.task('sass', function(){
  return gulp.src('css_src/*.scss')//src---원본
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));  // dest 는 보여지는 곳

});


gulp.task('default', ['livereload','include','sass','watch']);






















