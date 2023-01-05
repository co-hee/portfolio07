$(function () {

    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (0 < y < 982) {
            $('.header').addClass('on');

        } else {
            $('.header').removeClass('on');
        }


        if (0 < y < 982) {
            $('.header .gnb li:nth-child(1)').addClass('on').siblings().removeClass('on');

        } else {
            $('.header .gnb li:nth-child(1)').removeClass('on');
        }

        if (982 < y < 2309) {
            $('.header .gnb li:nth-child(2)').addClass('on').siblings().removeClass('on');

        } else {
            $('.header .gnb li:nth-child(2)').removeClass('on');
        }

        if (2309 < y < 4200) {
            $('.header .gnb li:nth-child(3)').addClass('on').siblings().removeClass('on');

        } else {
            $('.header .gnb li:nth-child(3)').removeClass('on');
        }

        if (4200 < y < 6962) {
            $('.header .gnb li:nth-child(4)').addClass('on').siblings().removeClass('on');

        } else {
            $('.header .gnb li:nth-child(4)').removeClass('on');
        }
    });

    $('.gallery .slide_inner .slide').slick({
        arrows: false,
        fade: true,
    });


    var barwidth = $('.bar').width();
    console.log(barwidth);


    $('.gallery .slide_inner .slide').on('init afterChange', function (e, s, c) {
        console.log(s)
        var bw = barwidth / s.slideCount;
        $('.gallery .bar span').css({ width: bw });
        $('.gallery .bar span').css({ width: bw * (c + 1) });

        $('.gallery .num span').text(c ? (c + 1) : 1)
        $('.gallery .num strong').text(s.slideCount)
    })

    $('.gallery .arrows i:nth-child(1)').on('click', function () {
        $('.gallery .slide_inner .slide').slick('slickPrev')
    });
    $('.gallery .arrows i:nth-child(2)').on('click', function () {
        $('.gallery .slide_inner .slide').slick('slickNext')
    })



    $('.FAQ .q li').on('click', function () {
        $('.FAQ .q li p').removeClass('on');
        $('.FAQ .q li p').addClass('on');
    })






































})