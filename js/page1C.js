$(function() {
    //头部搜索
    var searchCon = document.querySelector('.search-con');
    searchCon.onfocus = function() {
        searchCon.value = '';
    }
    searchCon.onblur = function() {
            if (searchCon.value == '') {
                searchCon.value = 'Five Plus';
            }
        }
        // 地图
    var arr = [0, 75, 175, 250, 325, 350, 400, 475, 550, 625, 700, 775, 850, 925, 1000, 1075, 1150, 1225, 1300, 1375, 1450, 1525, 1600, 1675, 1750];
    var searchCon = document.querySelector('.search-con');
    searchCon.onfocus = function() {
        searchCon.value = '';
    }
    searchCon.onblur = function() {
        if (searchCon.value == '') {
            searchCon.value = 'Five Plus';
        }
    }
    $('.ding-letter a').mouseenter(function() {
            $('.ding-con-list ul').animate({
                scrollTop: $(arr).eq($(this).index())[0]
            }, 50);
        })
        // 预售种类二级导航
    $('.item-content').hover(function() {
        var num = ($('.item-content').get()).indexOf($(this)[0]);
        $('.categorys-items-layer').eq(num).toggleClass('active').siblings().removeClass('active');
        $('.categorys-items-layer').eq(num).hover(function() {
            $(this).toggleClass('active');
        }, function() {
            $(this).removeClass('active');
        })
    }, function() {
        $('.categorys-items-layer').removeClass('active');
    });
    //主要分类二级导航
    $('.hd li').hover(function() {
        var num = ($('.hd li').get()).indexOf($(this)[0]);
        $(this).addClass('on').siblings().removeClass('on');
        //淡入淡出动画
        $('.bd ul').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    //品牌旗舰版心移动
    var flag = 0;
    //前进按钮
    $('.prev').click(function() {
        if (flag == 0) {
            $('.bs-bd ul').animate({
                left: -1110,
            }, 500, function() { flag = 1; });
        } else if (flag == 1) {
            $('.bs-bd ul').animate({
                left: 0,
            }, 500, function() { flag = 0; });
        }
    });
    //后退按钮
    $('.next').click(function() {
        if (flag == 0) {
            $('.bs-bd ul').animate({
                left: -1110,
            }, 500, function() { flag = 1; });
        } else if (flag == 1) {
            $('.bs-bd ul').animate({
                left: 0,
            }, 500, function() { flag = 0; });
        }
    });
    //左侧边栏
    //排行榜
    var firstFloor = $(".toprank").offset().top - 120;
    //今日推荐
    var secondFloor = $(".recToday").offset().top - 120;
    //新品到货
    var thirdFloor = $(".newPic").offset().top - 120;
    //浏览记录
    var fourthFloor = $(".browsing").offset().top - 180;
    var topArr = [firstFloor, secondFloor, thirdFloor, fourthFloor];
    // console.log($(".toprank").outerHeight());
    // console.log(firstFloor);
    // console.log(secondFloor);
    // console.log(thirdFloor);
    // console.log(fourthFloor);
    //判断如果滚动的高度大于1楼的高度 li列表显示;如果滚动高度小于1楼高度,li列表隐藏
    $(window).scroll(function() {
        if ($(window).scrollTop() >= topArr[0] && $(window).scrollTop() < topArr[1]) {
            $(".left-side").removeClass('left-hide');
            $('.list-item').eq(0).addClass('item-current').siblings().removeClass('item-current');
        } else if ($(window).scrollTop() >= topArr[1] && $(window).scrollTop() < topArr[2]) {
            $('.list-item').eq(1).addClass('item-current').siblings().removeClass('item-current');
        } else if ($(window).scrollTop() >= topArr[2] && $(window).scrollTop() < topArr[3]) {
            $('.list-item').eq(2).addClass('item-current').siblings().removeClass('item-current');
        } else if ($(window).scrollTop() >= topArr[3]) {
            $('.list-item').eq(3).addClass('item-current').siblings().removeClass('item-current');
        } else {
            $(".left-side").addClass('left-hide');
        }
    });

    //跳楼效果点击事件
    $('.list-item').click(function() {
        var num = ($('.list-item').get()).indexOf($(this)[0]);

        if (num == 4) {
            $('body,html').stop().animate({ scrollTop: 0 }, 400);
        } else {
            $('body,html').stop().animate({ scrollTop: topArr[num] }, 400);
        }
    });
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
    $('.quick_links li a:gt(0)').hover(function() {
            $(this).next().css('visibility', 'visible')
            $(this).next().css('left', '-92px')
        },
        function() {
            $(this).next().css('visibility', 'hidden')
        });
    $('.mp_tooltip').hover(function() {
        $(this).next().css('visibility', 'visible')
    }, function() {
        $(this).next().css('visibility', 'hidden')
    });
    //客服中心
    $('#IM').hover(function() {
            $(this).next().css('visibility', 'visible')
            $(this).next().css('left', '-92px')
        },
        function() {
            $(this).next().css('visibility', 'hidden')
        });
    $('.mp_tooltip:last').hover(function() {
        $(this).next().css('visibility', 'visible')
    }, function() {
        $(this).next().css('visibility', 'hidden')
    });
    //弹出购物车
    $('.cart_list').click(function() {
        $('.quick_links_wrap ').toggleClass('width');
    });
    //关闭购物车
    $('.ibar_closebtn').click(function() {
        $('.quick_links_wrap ').removeClass('width');
    });
    //回到顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.return_top').fadeIn();
        } else {
            $('.return_top').fadeOut();
        }
    });
    //缓慢回到顶部
    $('.return_top').click(function() {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });
})