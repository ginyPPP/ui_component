/**
 * Tab Menu Css
 */



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGFiX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGFiIE1lbnUgQ3NzXHJcbiAqL1xyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUYWIgTWVudSBKcXVlcnlcclxuICovXHJcblxyXG5cclxuLy9qcXVlcnkg7KeE7J6F7KCQ7J2AIOyXrOufrOuyiCDsk7gg7IiYIOyeiOuLpC5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcudGFiLWhlYWRpbmcnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHRhYkluZGV4ID0gJCh0aGlzKS5pbmRleCgnLnRhYi1oZWFkaW5nJyk7XHJcblxyXG4gICAgJCgnLnRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy50YWItaGVhZGluZycpLmVxKHRhYkluZGV4KS5jaGlsZHJlbignYScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICQoJy50YWItY29udGVudCcpLmZhZGVPdXQoMTAwKTtcclxuICAgICQoJy50YWItY29udGVudCcpLmVxKHRhYkluZGV4KS5mYWRlSW4oMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
