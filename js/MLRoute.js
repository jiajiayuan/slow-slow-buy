/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {

    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : 'http://127.0.0.1:9090',




               /* ------ 首页 api 数据请求 ------ */

        // 获取首页上面的菜单栏数据
      getindexmenu:five_getindexmenu,
        //首页的折扣列表中的数据api
      getmoneyctrl: five_getmoneyctrl,

                 /* ------ 比价搜索页面 api 数据请求 ------ */

      //分类标题api
       getcategorytitle:five_getcategorytitle,
      //分类列表api
      getcategory:five_getcategory,


                  /* ------ 商品列表功能界面 api 数据请求 ------ */

      //2.4、商品列表api
       //2.4.1、根据分类id获取分类名称api
      getcategorybyid:five_getcategorybyid,
      getproductlist:five_getproductlist,

      /* ------ 商品详情功能界面 api 数据请求 ------ */

      getproduct:five_getproduct,
      getproductcom:five_getproductcom,

      /* ------ 三、省钱控页面 api 数据请求 ------ */
      ge:five_getmoneyctrl,

      /* ------ 国内折扣商品详情页功能界面 api 数据请求 ------ */

      getmoneyctrlproduct:five_getmoneyctrlproduct,

      /*四、国内折扣页面*/
      getinlanddiscount:five_getinlanddiscount,
      getdiscountproduct:five_getdiscountproduct,
      /*五、白菜价页面*/
      getbaicaijiatitle:five_getbaicaijiatitle,
      getbaicaijiaproduct:five_getbaicaijiaproduct,

      /*海淘折扣页面页面（同省钱控页面）*/
      //和前面的重复了

      /*七、优惠券页面*/

      getcoupon:five_getcoupon,
      getcouponproduct:five_getcouponproduct,

      /*八、凑单品页面页面*/
      getgsshop:five_getgsshop,
      getgsshoparea:five_getgsshoparea,
      getgsproduct:five_getgsproduct,

      /*商城导航页面*/
      getsitenav:five_getsitenav,

      /*十、品牌大全页面*/
      getbrandtitle:five_getbrandtitle,
      getbrand:five_getbrand,

      getbrandproductlist:five_getbrandproductlist,

      getproductcom:five_getproductcom

      //销量排行商品的评论api和之前的重复了









      }









  function five_getindexmenu(callback) {
    var url = Route.baseUrl + '/api/getindexmenu';
    $.get( url, function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getbrand(data,callback) {
    var url = Route.baseUrl + '/api/getbrand';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getbrandproductlist(data,callback) {
    var url = Route.baseUrl + '/api/getbrandproductlist';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getsitenav(data,callback) {
    var url = Route.baseUrl + '/api/getsitenav';
    $.get( url,data, function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getbrandtitle(callback) {
    var url = Route.baseUrl + '/api/getbrandtitle';
    $.get( url, function( res ) {
      callback && callback( res );
    }, 'json');
  }

   function five_getmoneyctrl(data,callback) {
    var url = Route.baseUrl + '/api/getmoneyctrl';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
   }

   function five_getcategorytitle(data,callback) {
    var url = Route.baseUrl + '/api/getcategorytitle';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }

   function five_getcategory(data,callback) {
    var url = Route.baseUrl + '/api/getcategory';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }

  function five_getcategorybyid(data,callback) {
    var url = Route.baseUrl + '/api/getcategorybyid';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getproductlist(data,callback) {
    var url = Route.baseUrl + '/api/getproductlist';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getproduct(data,callback) {
    var url = Route.baseUrl + '/api/getproduct';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getproductcom(data,callback) {
    var url = Route.baseUrl + '/api/getproductcom';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getmoneyctrlproduct(data,callback) {
    var url = Route.baseUrl + '/api/getmoneyctrlproduct';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getinlanddiscount(data,callback) {
    var url = Route.baseUrl + '/api/getinlanddiscount';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getmoneyctrl(data,callback) {
    var url = Route.baseUrl + '/api/getmoneyctrl';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getdiscountproduct(data,callback) {
    var url = Route.baseUrl + '/api/getdiscountproduct';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getbaicaijiatitle(data,callback) {
    var url = Route.baseUrl + '/api/getbaicaijiatitle';
    $.get( url, data||{},function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getbaicaijiaproduct(data,callback) {
    var url = Route.baseUrl + '/api/getbaicaijiaproduct';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getcoupon(data,callback) {
    var url = Route.baseUrl + '/api/getcoupon';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getcouponproduct(data,callback) {
    var url = Route.baseUrl + '/api/getcouponproduct';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getgsshop(data,callback) {
    var url = Route.baseUrl + '/api/getgsshop';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getgsshoparea(data,callback) {
    var url = Route.baseUrl + '/api/getgsshoparea';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
  function five_getgsproduct(data,callback) {
    var url = Route.baseUrl + '/api/getgsproduct';
    $.get( url, data,function( res ) {
      callback && callback( res );
    }, 'json');
  }
















    window.Route = Route; /* 向外暴露 Route */

})(window);