/**
 * Created by Ԭ�Ѽ� on 2017/7/26.
 */
;(function () {
  var $title = $('.title');
  var number =0;
  var pageNum = 0;
  var $page = $('#page');

  //var obj = null;
  var num = 0;


  Route.getcategorytitle(function (data) {
    $title.html(template("first-title", data))
    for (var i = 0; i < data.result.length; i++) {
      //console.log($title.children()[i]);

      $title.children()[i].setAttribute('data-id', data.result[i].titleId);
    }

  })
  function getproductlist(data) {
    //console.log(data);
    var pageNumber=[];
    $('.product').html(template('product', data));
    var totalCount = data.totalCount;//总条数
    var pagesize = data.pagesize;  //每页条数
    pageNum = Math.ceil(totalCount / pagesize);//总页数
    for (var i = 0; i < pageNum; i++) {
      num++;
      if(num>pageNum){
        num=1
      }

      var pageObj={
        num:num,
        pageNum:num+' / '+pageNum};
      pageNumber.push(pageObj);


    }
    var result = {
      pageNum: pageNumber
    }
    console.log(result);
    $('#page').html(template('pageOption', result));
    $('option:nth-child(' + (number+1) + ')', $page).attr('selected', true).siblings().removeAttr('selected');
  }


  $title.on('click', 'li div', function () {
    var $this = $(this);

    var thisId = $(this).parent().data('id');  //每个耳机目录的data-id
    console.log(thisId);
    var $that = $(this).siblings('.second-title');

    Route.getcategory({titleid: thisId}, function (data) {
      console.log(data);
      $that.html(template('second-title', data));
      $that.toggle().parent().siblings().children('.second-title').hide();
      if ($that) {
        $this.children('span.fr').css('left', '75/40rem');
      } else {
        $this.children('span.fr').css('left', '-100/40rem');
      }

    })

  })


  //点击二级目录li,跳转到商品详情页面,先获取二级目录里面的内容,拼接三级目录,让three那个盒子显示出来,显示出来之后,请求商品数据,根据
  $title.on('click', '.second-title .sec-title', function () {
    //var $fistName=$(this).parent().siblings('div').children('span.fl').html();
    var $that = $(this);
    console.log($that);
    $(this).data('getproductlist');
    var str = '<a href="index.html">首页</a> > <span class="classify">全部分类</span> > ' + '<span class="classList">'+$(this).html()+'</span>';  //拼接三级目录
    var $title = $('.title');
    var $threeBar = $('.threeBar');
    var data=null;
    function obj(number){
     var obj2= {
        categoryid: $that.data('categoryid'),
        pageid: number
      }
      return   obj2;
    }
    $title.css('display', 'none');//让上一页页面隐藏
    $threeBar.children('span').html(str);
    $threeBar.parent().css('display', 'block');
     //obj();

    Route.getproductlist(obj(), function getproductlist(data) {
      console.log(data);
      var pageNumber=[];
      $('.product').html(template('product', data));
      //console.log();
      var totalCount = data.totalCount;//总条数
      var pagesize = data.pagesize;  //每页条数
      pageNum = Math.ceil(totalCount / pagesize);//总页数
      for (var i = 0; i < pageNum; i++) {
        num++;
        if(num>pageNum){
          num=0
        }

        var pageObj={
          num:num,
          pageNum:num+' / '+pageNum};
        pageNumber.push(pageObj);


      }
      var result = {
        pageNum: pageNumber
      }
      console.log(result);
      $('#page').html(template('pageOption', result));

      $('option:nth-child(' + (number) + ')', $page).attr('selected', true).siblings().removeAttr('selected');
    });

    //})

    $('.page').on('click', 'button', function () {
      var $this = $(this);
      if ($this.attr('class').indexOf('prev') != -1) {
        number--;
        if (number <= 0) {
          number = pageNum;
        }
      } else if ($(this).attr('class').indexOf('next') != -1) {
        number++;
        if (number > pageNum) {
          number =1;
        }
      }

      $('option:nth-child(' +( number) + ')', $page).attr('selected', true).siblings().removeAttr('selected');
      console.log(number);
      //obj = {
      //  categoryid: $that.data('categoryid'),
      //  pageid: number
      //}
      data=obj(number);
      Route.getproductlist(data, getproductlist);

    });
    $('#page').change(function(){
      console.log();
      number=$(this).children(':selected').attr('name')+1;
      $(this).children(':selected').attr('selected',true).siblings().removeAttr('selected');
      //obj = {
      //  categoryid: $that.data('categoryid'),
      //  pageid: number
      //}

      data=obj(number);
      Route.getproductlist(data, getproductlist);
    })
    //全部分类的切换
    $('.classify').on('click',function(){
      //alert(111);
      $('.title').css('display','block').siblings('.threetitle').css('display','none');
    })

    //点击电视，初始化电视列表
    $('.classList').on('click',function(){
      number=1;
      data=obj(number);
      Route.getproductlist(data, getproductlist);
    })
    console.log($('.product').children());
  })

})()