$(function () {
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.menu_btn_bars').show();
            $('.menu_btn_close').hide();
        }
        if ($(window).width() > 992) {
            $('.menu_btn_bars').hide();
            $('.menu_btn_close').hide();
        }
    })
    $('.menu_btn_bars').click(function () {
        $('.menu_btn_bars').hide();
        $('.menu_btn_bars').css('transform', 'rotate(180deg)');
        $('.menu_btn_close').show();
        $('.menu_ul').show(300);
        $('.menu_ul').css('transform', 'translateX(0%)');
    })
    $('.menu_btn_close').click(function () {
        $('.menu_btn_close').hide();
        $('.menu_btn_bars').show();
        $('.menu_ul').fadeOut();
        $('.menu_ul').css('transform', 'translateX(100%)');
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
    $('.top_btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
})