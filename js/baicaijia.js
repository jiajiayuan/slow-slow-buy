/**
 * Created by Ԭ�Ѽ� on 2017/7/28.
 */
;
(function () {
  Route.getbaicaijiatitle(function (data) {
    console.log(data);
    $('.title').html(template('title', data));
    $('.menuList').html(template('menuList', data));

    //console.log($('.menuList'));
    $('.menu:nth-child(2)').addClass('select')
    var lists = $('.list');
    lists.eq(1).show().siblings().hide();
    Route.getbaicaijiaproduct({titleid: 1}, function (res) {
      console.log(res);
      for (var i = 0; i < lists.length; i++) {
        //console.log(lists[i]);
        if (lists.eq(i).data('titleid') == 1) {
          lists.eq(i).html(template('listCon', res))
        }
      }
      for (var i = 0; i < res.result.length; i++) {
        var str = res.result[i].productHref;
        str = str.slice(str.indexOf('href') + 6, str.indexOf('target="_blank') - 2);
        //console.log(str);

        $('.abutton').eq(i).children('a').attr('href', str)
        $('.a.product').eq(i).attr('href', str);

      }

    })

    $('.title').children().one('click', function () {
      var $that = $(this);
      var titleid = $that.data('titleid');
      var index = $that.index();
      Route.getbaicaijiaproduct({titleid: titleid}, function (res) {
        console.log(res);
        //console.log(res.result[0].productHref);
        for (var i = 0; i < lists.length; i++) {
          if (lists.eq(i).data('titleid') == titleid) {
            lists.eq(i).html(template('listCon', res))
          }
        }
        for (var j = 0; j < data.result.length; j++) {
          //$('.list').eq(j)
          for (var i = 0; i < res.result.length; i++) {
            var str = res.result[i].productHref;
            str = str.slice(str.indexOf('href') + 6, str.indexOf('target="_blank') - 2);
            console.log(str);

            $('.abutton',$('.list').eq(j)).eq(i).children('a').attr('href', str)
            $('.a.product',$('.list').eq(j)).eq(i).attr('href', str);

          }
        }
      })
    })
    $('.title').on('click', 'li', function () {
      var $that = $(this);

      $that.addClass('select').siblings().removeClass('select');

      for (var i = 0; i < lists.length; i++) {
        if (lists.eq(i).data('titleid') == $that.data('titleid')) {
          lists.eq(i).show().siblings().hide();
        }
      }

    })
  })


})()