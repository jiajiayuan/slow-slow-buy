/**
 * Created by Ԭ�Ѽ� on 2017/7/27.
 */
;(function(){

  var productid= $.getUrlParam('productid');
  var categoryid= $.getUrlParam('categoryid');
  var productCom= $.getUrlParam('productCom');
  var productPrice= $.getUrlParam('productPrice');
  console.log(productPrice);

  var str='';
  $('.pingjia').html(productCom);
  $('.price').html(productPrice);
  Route.getcategorybyid({categoryid:categoryid},function(data){
    var secList=data.result[0].category;
    str='<a href="index.html"> 首页</a> > '+'<a href="category.html">  '+secList+'  </a> >';
  })
  var obj={
    productid:productid,
  }
  Route.getproduct(obj,function(data){
    //console.log(data);
    var proName=data.result[0].productName;
    var img=data.result[0].productImg;
    var thredList=proName.slice(0,10);
    str+=thredList
    $('.threeBar span').html(str);
    $('.body h2').html(proName);
    $('.img').html(img)

  })
  Route.getproductcom(obj,function(data){
    console.log(data);
    //console.log($('.neirong'));
    var condent=data.result[0].comContent;
    //console.log(condent);
    $(".neirong").html(template('neirong',data))
    console.log($('#Neirong'))

  })
  $('.pjList').on('click','li',function(){
    $(this).addClass('active').siblings().removeClass('active');
    var index=$(this).index();
    $('.pingjia div').eq(index).show().siblings().hide();
  })

})()