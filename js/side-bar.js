$('.screen-side-con li>a').hover(function(){
    $(this).addClass('current');
    $(this).find('.cart_num').addClass('color_change');
    $(this).find('.mp_tooltip').css({
        'visibility':'visible'
    }).stop().animate({
        left : -92
        },300);
},function(){
    $(this).removeClass('current');
    $(this).find('.cart_num').removeClass('color_change');
    $(this).find('.mp_tooltip').css({
        'visibility':'hidden'
    }).stop().animate({
        left : -121
        },100)
    })
$('.cart_list').click(function(){
    $('.screen-side-lay').toggleClass('show');
    if(!$(this).find('.cart_num').attr('style')){
        $(this).find('.cart_num').css({
            'background': '#fff',
            'color': '#f42424'
        }) 
    }else{
        $(this).find('.cart_num').attr('style','');
    }
    if($(this).attr('style')){
        $(this).attr('style','');
    }else{
        $(this).css('background','#f42424');
    }
})
$('.setting_hover').hover(function(){
    $('.setting-con').css('display','block');
},function(){
    $('.setting-con').css('display','none');
})
$('.setting-con').hover(function(){
    $(this).css('display','block');
},function(){
    $(this).css('display','none');
})
$('.login_btnbox').find('a').hover(function(){
    $(this).css('border','1px solid #f00'); 
},function(){
    $(this).css('border','1px solid transparent'); 
})
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.return_top_hover').css('display','block');
          } else {
            $('.return_top_hover').css('display','none');
          }    
        })
    $(".return_top_sport").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        $('.return_top_hover').css('display','none');
        return false;
      });
    if(Number($('.cart_list').find('.cart_num').text())!=0){
        $('.ecs-tbar-tipbox2').css('display','none');
    }else{
        $('.ecs-tbar-tipbox2').css('display','block');
    } 
})
$('.side-car-title').find('.close').click(function(){
    $('.screen-side-lay').toggleClass('show');
    if(!$('.cart_list').find('.cart_num').attr('style')){
        $('.cart_list').find('.cart_num').css({
            'background': '#fff',
            'color': '#f42424'
        }) 
    }else{
        $('.cart_list').find('.cart_num').attr('style','');
    }
    if($('.cart_list').attr('style')){
        $('.cart_list').attr('style','');
    }else{
        $('.cart_list').css('background','#f42424');
    }
})
$('.email_hover').click(function(){
    $('.email_box').toggleClass('email_box_show');
})

$(document).on("mousewheel DOMMouseScroll", function (e) {
    // jq 获取dom 事件对象要通过originalEvent 
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
    if (delta > 0) {
        // 向上滚
        $('.email_box').removeClass('email_box_show');
    }
});
