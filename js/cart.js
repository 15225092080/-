//购物车部分
$('.quick_links_panel a:first').hover(function() {
            $('.ibar_login_box').show();
        },
        function() {
            $('.ibar_login_box').hide();
        })
    //用户名
$('.ibar_login_box').hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    })
    //我的订单,优惠券，我的资产，我的足迹，我的收藏，邮箱订阅
$('.quick_links li a:gt(2)').hover(function() {
        $(this).next().css('visibility', 'visible')
        $(this).next().css('left', '-92px')
    },
    function() {
        $(this).next().css('visibility', 'hidden')
    })
$('.mp_tooltip').hover(function() {
        $(this).next().css('visibility', 'visible')
    }, function() {
        $(this).next().css('visibility', 'hidden')
    })
    //客服中心
$('#IM').hover(function() {
        $(this).next().css('visibility', 'visible')
        $(this).next().css('left', '-92px')
    },
    function() {
        $(this).next().css('visibility', 'hidden')
    })
$('.mp_tooltip:last').hover(function() {
        $(this).next().css('visibility', 'visible')
    }, function() {
        $(this).next().css('visibility', 'hidden')
    })
    //弹出购物车
$('.cart_list').click(function() {
        $('.quick_links_wrap ').toggleClass('width');
    })
    //关闭购物车
$('.ibar_closebtn').click(function() {
        $('.quick_links_wrap ').removeClass('width');
    })
    //回到顶部
$(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.return_top').fadeIn();
        } else {
            $('.return_top').fadeOut();
        }
    })
    //缓慢回到顶部
$('.return_top').click(function() {
    $('html').animate({
        scrollTop: 0
    }, 1000)
})