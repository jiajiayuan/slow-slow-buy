/**
 * Created by Ô¬¼Ñ¼Ñ on 2017/7/28.
 */
;(function(){
  var productid= $.getUrlParam('productid');
  //console.log(productid);
  Route.getmoneyctrlproduct({productid:productid},function(data){
    console.log(data);
    $('.title').html(data.result[0].productName);
    $('.j_from').html(data.result[0].productFrom);
    $('.j_time').html(data.result[0].productTime);
    $('.j_tips').html(data.result[0].productTips);
    $('.img').html(data.result[0].productImg2);
    $('.describe').html(data.result[0].productInfo);
    $('.desc1').html(data.result[0].productInfo1);
    $('.img1').html(data.result[0].productImg2);
    $('.address').html(data.result[0].productCity);
    $('.tell1').html(data.result[0].productComment);
  })
})()