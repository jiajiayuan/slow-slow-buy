/**
 * Created by Ô¬¼Ñ¼Ñ on 2017/7/26.
 */
;(function(){
  var top=$('footer ul li:nth-child(3)')

  top.on('click',function() {
    //var scrollTop = $(window).scrollTop();
    $('body').animate({
      scrollTop: '0'
    }, 1000);
  })

  $('.backTop').on('click',function(){
    $('body').animate({
      scrollTop: 0
    }, 1000);
  })
})()