/**
 * Created by Ô¬¼Ñ¼Ñ on 2017/7/28.
 */
;(function(){
  var productid= $.getUrlParam('productid');
  Route.getdiscountproduct({productid:productid},function(data){
    console.log(data);
    $('.title').html(data.result[0].productName)
    $('.price').html(data.result[0].productPrice)
    $('.from').html(data.result[0].productFrom)
    $('.time').html(data.result[0].productTime)
    $('.person').html(data.result[0].productTips)
    $('.description').html(data.result[0].productInfo)
    $('.img').html(data.result[0].productImg)
    $('.tell1').html(data.result[0].productComment);
  })
})()