/**
 * Created by Ԭ�Ѽ� on 2017/7/29.
 */
;(function(){
  Route.getbrandtitle(function(data){
    console.log(data);
    $('.proList').html(template('proList',data));
  })
})()