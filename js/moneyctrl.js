/**
 * Created by 袁佳佳 on 2017/7/27.
 */
;(function(){
  var num=0;
  var number=0;
  var pageNum = 0;
  var $page = $('#page');
  function obj(number){
    var obj2= {
      pageid: number
    }
    return   obj2;
  }
  function getmoneyctrl(data) {
    console.log(data);
    var pageNumber=[];
    $('.pro-sales').html(template('sales', data));
    var totalCount = data.totalCount;//总条数
    var pagesize = data.pagesize;  //每页条数
    pageNum = Math.ceil(totalCount / pagesize);//总页数
    //console.log(pageNum )
    for (var i = 1; i <= pageNum; i++) {
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

  Route.getmoneyctrl(getmoneyctrl)
  $('.page').on('click', 'button', function () {
    var $this = $(this);
    if ($this.attr('class').indexOf('prev') != -1) {
      number--;
      if (number <0) {
        number = pageNum-1;
      }
    } else if ($(this).attr('class').indexOf('next') != -1) {
      number++;
      if (number >= pageNum) {
        number =0;
      }
    }

    $('option:nth-child(' + (number+1)+ ')', $page).attr('selected', true).siblings().removeAttr('selected');
    //console.log(number);
    //obj = {
    //  categoryid: $that.data('categoryid'),
    //  pageid: number
    //}
    data=obj(number);
    Route.getmoneyctrl(data, getmoneyctrl);

  });
  $('#page').change(function(){

    number=$(this).children(':selected').attr('name')-1;
    $(this).children(':selected').attr('selected',true).siblings().removeAttr('selected');
    //obj = {
    //  categoryid: $that.data('categoryid'),
    //  pageid: number
    //}
    data=obj(number);
    Route.getmoneyctrl(data, getmoneyctrl);
  })
})()