/**
 * Created by Ԭ�Ѽ� on 2017/7/28.
 */
;(function(){
  Route.getinlanddiscount(function(data){
    console.log(data);
    $('.j_product').html(template('product',data))
  })
})()