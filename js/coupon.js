/**
 * Created by Ô¬¼Ñ¼Ñ on 2017/7/28.
 */
;(function(){
  Route.getcoupon(function(data){
    console.log(data);
    $('.cou').html(template('cou',data))
  })
})()