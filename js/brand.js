/**
 * Created by Ԭ�Ѽ� on 2017/7/29.
 */
;(function(){
  var listTitle= $.getUrlParam('brandTitle');
  var brandtitleid= $.getUrlParam('brandtitleid');
  //console.log(listTitle);
  //console.log(listTitle.indexOf("十大品牌"));
  var title=listTitle.slice(0,listTitle.indexOf('十大品牌'))
  $('.listTitle').html(title);
  $('.whichList').html(title);
  Route.getbrand({brandtitleid:brandtitleid},function(data){
    console.log(data);
    $('.proList').html(template('proList',data));

    $('.boxList').each(function(index,ele){
      $(this).html(index+1);
      if(index==0){
        $(this).css({
          background:'#f10e0e',
          border:'#f70101'
        })
      }else if(index==1){
        $(this).css({
          background:'#ff9214',
          border:'#e07403'
        })
      }else if(index==2){
        $(this).css({
          background:'#88de51',
          border:'#42a404'
        })
      }
    })

  })
  Route.getbrandproductlist({brandtitleid:brandtitleid},function(data){
    console.log(data);
    $('.listPro').html(template('listPro',data));
    //data.result[0].productId;
    getlie(0);
    var sTop=$('.title.which')[2].offsetTop;
    console.log(sTop);
    function getlie(x){
      Route.getproductcom({productid:data.result[x].productId},function(da){
        console.log(da);
        $('.productcom').html(template('productcom',da));
        $('.img').html(data.result[x].productImg);
        $('.prTitle').html(data.result[x].productName);
      })
    }
    $('.proList').children().one('click',function(){
      getlie($(this).index())
    })
    $('.proList').on('click','li',function(){
      $('body').animate({
        scrollTop: sTop
      }, 1000);
    })
    $('.prList').one('click',function(){
      getlie($(this).index())
    })
    $('.listPro').on('click','li',function(){
      $('body').animate({
        scrollTop: sTop
      }, 1000);
    })

  })
})()