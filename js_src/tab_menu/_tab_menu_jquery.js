/**
 * Tab Menu Jquery
 */


//jquery 진입점은 여러번 쓸 수 있다.
$(function(){

  $('.tab-heading').on('click',function(e){
    e.preventDefault();
    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(100);
    $('.tab-content').eq(tabIndex).fadeIn(300);
  });

});