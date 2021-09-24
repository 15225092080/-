// 轮播
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// 二级菜单
$('.nav-one li').mouseenter(function() {
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $(".nav-two").eq(idx).addClass("selected").siblings().removeClass("selected");
    $('.nav-two').mouseenter(function() {
        $(".nav-two").eq(idx).addClass("selected");
    })
    $('.nav-two').mouseleave(function() {
        $(".nav-two").eq(idx).removeClass("selected");
    })
})
$('.nav-one li').mouseleave(function() {
    $(this).removeClass("active");
    $(".nav-two").eq($(this).index()).removeClass("selected");
})

//热门推荐
$(".hot-title li").hover(function() {
    $(this).addClass("on").siblings().removeClass("on");
    var idx = $(this).index();

    $(".bd ul").eq(idx).addClass("clearfix").siblings().removeClass("clearfix");
});
// 厨房电器
$("#main3 .extra li").mouseenter(function() {
    $(this).addClass("in").siblings().removeClass("in");
    var idx = $(this).index();
    console.log(idx);
    $("#main3 .cf-con-r ul").eq(idx).addClass("bl").siblings().removeClass("bl");
});
// 大家电
$("#main4 .extra li").mouseenter(function() {
    $(this).addClass("in").siblings().removeClass("in");
    var idx = $(this).index();
    console.log(idx);
    $("#main4 .cf-con-r ul").eq(idx).addClass("bl").siblings().removeClass("bl");
});
// 个护健康
$("#main5 .extra li").mouseenter(function() {
    $(this).addClass("in").siblings().removeClass("in");
    var idx = $(this).index();
    console.log(idx);
    $("#main5 .cf-con-r ul").eq(idx).addClass("bl").siblings().removeClass("bl");
});
// 五金家装
$("#main6 .extra li").mouseenter(function() {
    $(this).addClass("in").siblings().removeClass("in");
    var idx = $(this).index();
    console.log(idx);
    $("#main6 .cf-con-r ul").eq(idx).addClass("bl").siblings().removeClass("bl");
});
// 生活电器
$("#main7 .extra li").mouseenter(function() {
    $(this).addClass("in").siblings().removeClass("in");
    var idx = $(this).index();
    console.log(idx);
    $("#main7 .cf-con-r ul").eq(idx).addClass("bl").siblings().removeClass("bl");
});
//  跳楼效果
var main1offset = $('#main1').offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() >= main1offset) {
        $('aside').fadeIn();
    } else {
        $('aside').fadeOut();
    };
});
$('.floor').each(function(index, value) {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= value.offsetTop) {
            $('.item').eq(index).addClass('floor-active').siblings().removeClass('floor-active');
        }
    });
});
$('.back-top').click(function() {
    $('html').stop().animate({
        scrollTop: 0
    }, 3000);
});
$(".item").click(function() {
    $("html").animate({
        scrollTop: $(".floor").eq($(this).index()).offset().top
    });
})