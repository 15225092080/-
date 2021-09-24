$(function() {
    //新品热销推荐tab切换
    $('.list li').click(function() {
        // console.log(this);
        var num = $('.list li').get().indexOf($(this)[0]);
        console.log(num);
        $(this).addClass('curr').siblings().removeClass('curr');
        $('.mc-main').eq(num).fadeIn(200).siblings().fadeOut(200);
    });
    //最近浏览清空按钮
    $('.fr.fs12').click(function(e) {
        // e.stopPropagation();
        $(this).parent().next().children('li').remove();
        console.log($(this).parent().next().children().remove());
        $('<div class="history_tishi">"您已清空最近浏览过的商品" <br> <a href="index.html">去购物</a></div>').appendTo($(this).parent().next());
    });

    //手机购买事件
    $('.tit').hover(function() {
        $('.tit-s').addClass('on');
        $('.tit-s').hover(function() {
            $(this).addClass('on');
        }, function() {
            $(this).removeClass('on');
        })
    }, function() {
        $('.tit-s').removeClass('on');
    });

    //右页面tab切换
    // 右页面板块
    $('.gm-tab li').click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        var num = $('.gm-tab li').get().indexOf($(this)[0]);
        // console.log(num);
        if (num == 0) {
            $('.gm-f-item').eq(0).show();
        } else if (num == 1) {
            $('.gm-f-item').eq(0).hide();
            $('.gm-f-item').eq(1).show();

        } else {
            $('.gm-f-item').eq(0).hide();
            $('.gm-f-item').eq(1).hide();
        }
    });
    // 第二板块a标签点击事件
    $('ul.gm-f-tab a').click(function() {
        $('ul.gm-f-tab a').removeClass('curr');
        $(this).addClass('curr');
    });
    //第三板块a标签点击事件
    $('div.gm-f-tab a').click(function() {
        $('div.gm-f-tab a').removeClass('curr');
        $(this).addClass('curr');
    });
})