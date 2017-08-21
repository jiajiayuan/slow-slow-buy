/**
 * Created by Ԭ�Ѽ� on 2017/7/29.
 */
;(function(){
  var flag1=true;
  var flag2=true;
  var flag3=true;
  var areaid=0;
  var shopid=0;
  var obj=null;
  Route.getgsshop(function(data){
    //console.log(data);
    $('.store').html(template('store',data))
    $('.storeName').html($('.shname').eq(0).html());
    $('.store').hide();
    shopid =$('.shname').eq(0).data('shopid');
    console.log(shopid);
    $('.storeName').on('click',function(){
      $('.store').toggle();

      //.siblings().children().hide()
    })
    $('.store').on('click','li',function(){
      $('.storeName').html($(this).html());
      $(this).parent().hide();
      shopid =$(this).data('shopid');
    })

  })
  Route.getgsshoparea(function(data){
    console.log(data);
    $('.area').html(template('area',data));
    var inner=$('.arName').eq(0).html().slice(0,2);
    areaid=$('.arName').eq(0).data('areaid');
    console.log(areaid);
    $('.areaFrom').html(inner);
    $('.area').hide();
    $('.areaFrom').on('click',function(){
      $('.area').toggle();
      //.siblings().children().hide()
    })

    $('.area').on('click','li',function(){
      inner=$(this).eq(0).html().slice(0,2);
      $('.areaFrom').html(inner);
      $(this).parent().hide();
      areaid=$(this).data('areaid');

    })
    obj={
      shopid:shopid,
      areaid:areaid
    }
    product(obj);
  })
  $('.price').hide();
  $('.allPrice').on('click',function(){
    $('.price').toggle();
    //.siblings().children().hide()
  })
  $('.price').on('click','li',function(){

    $('.allPrice').html($(this).html());
    $(this).parent().hide();
  })

  $('.search').on('click',function(){
    obj={
      shopid:shopid,
      areaid:areaid
    }
    product(obj);

  })
  function product(obj){
    Route.getgsproduct(obj,function(data){
      console.log(data);

      $('.product').html(template('product',data));
    })
  }

})()