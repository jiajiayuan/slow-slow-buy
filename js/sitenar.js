/**
 * Created by Ô¬¼Ñ¼Ñ on 2017/7/29.
 */
;(function(){
  Route.getsitenav(function(data){
    console.log(data);
    $('.message').html(template('message',data));
  })
})()