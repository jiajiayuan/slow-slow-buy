/**
 * Created by Ԭ�Ѽ� on 2017/7/28.
 */
;(function(){
  Route.getcoupon(function(data){
    console.log(data);
    $('.cou').html(template('cou',data))
  })
})()