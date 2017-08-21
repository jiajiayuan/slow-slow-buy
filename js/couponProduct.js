/**
 * Created by Ԭ�Ѽ� on 2017/7/28.
 */
;(function(){
  var couponid= $.getUrlParam('couponid');
  var coupontitle= $.getUrlParam('coupontitle');
  $('.savemoney').html(coupontitle+'优惠券');
  //console.log(couponid);
  //console.log(coupontitle);
  var arrImg=[];
  var index=0;
  var thisinner=null;
  Route.getcouponproduct({couponid:couponid},function(data){
    console.log(data);
    var $product=$('.product');


    var dataid=data.result;
    $('.product').html(template('product',data));
    var $lis=$product.children();
    for(var i=0;i<dataid.length;i++){
      arrImg.push(dataid[i].couponProductImg);
    }
    $($product).on('click','li',function(){
      var inner=$(this).children('.img').children('.pro-img').html();

      $('.modal .img .image').html(inner);
      thisinner=inner;
      $('.modal').css('z-index',9999);

      $('.modal .img').on('click','div',function(){
        var $this=$(this)
       if($this.attr('class').indexOf('left')!=-1){
           thisinner= $('.modal .img .image').html();

          for(var i=0;i<arrImg.length;i++){
            if(thisinner==arrImg[i]){
              index=i;
            }
          }
          index--;
          if(index<0){
            index=arrImg.length-1;
          }
          $('.modal .img .image').html(arrImg[index]);
         thisinner= $('.modal .img .image').html();

       }else if($this.attr('class').indexOf('right')!=-1){
           thisinner= $('.modal .img .image').html();
          //console.log(thisinner);
          for(var i=0;i<arrImg.length;i++){
            if(thisinner==arrImg[i]){
              index=i;
            }
          }
          index++;
          if(index>arrImg.length-1){
            index=0;
          }
          $('.modal .img .image').html(arrImg[index]);
         thisinner= $('.modal .img .image').html();

         console.log(thisinner);
       }else if($this.attr('class').indexOf('image')!=-1){
          //console.log($lis);
         //console.log(thisinner);
         for(var i=0;i<$lis.length;i++){
           //var tml=
           //console.log(tml);
           if($lis.eq(i).children('.img').children('.pro-img').html().indexOf(thisinner)!=-1){
              var Top=$lis.get(i).offsetTop;
              console.log(Top);
            }
          }
         $('body').animate({
           scrollTop: Top
         }, 1000);
          $('.modal').css('z-index',-10);

        }

      })

    })





  })
})()