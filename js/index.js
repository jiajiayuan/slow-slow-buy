/**
 * Created by 袁佳佳 on 2017/7/26.
 */
;(function(){
  var $menu = $('.menu');
  var $proSales=$('.pro-sales');
  //menu.Route
  Route.getindexmenu(function (res) {
    //操作返回的菜单数据
    console.log(res);
    $menu.html(template('t-price', res));

    var $more=$menu.children();
    var $morePrice=$menu.children('.price:nth-last-child(-n+4)');
    //console.log($menu);
    //console.log($more);
    //console.log($morePrice);
    $morePrice.hide();
    $more.on('click',function(){
      $morePrice.toggle();
    })
  });
  Route.getmoneyctrl(function(option){
    console.log(option);
    $proSales.html(template('sales',option));
  })

})()