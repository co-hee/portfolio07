$(function () {




    //     $('.header .gnb li').removeClass('on');
    //     if (0 < y < 982) {
    //         $('.header .gnb li:nth-child(1)').addClass('on').siblings().removeClass('on');

    //     } else {
    //         $('.header .gnb li:nth-child(1)').removeClass('on');
    //     }

    //     if (982 < y < 2309) {
    //         $('.header .gnb li:nth-child(2)').addClass('on').siblings().removeClass('on');

    //     } else {
    //         $('.header .gnb li:nth-child(2)').removeClass('on');
    //     }

    //     if (2309 < y < 4200) {
    //         $('.header .gnb li:nth-child(3)').addClass('on').siblings().removeClass('on');

    //     } else {
    //         $('.header .gnb li:nth-child(3)').removeClass('on');
    //     }

    //     if (4200 < y < 6962) {
    //         $('.header .gnb li:nth-child(4)').addClass('on').siblings().removeClass('on');

    //     } else {
    //         $('.header .gnb li:nth-child(4)').removeClass('on');
    //     }
    // });

    $(window).on('scroll', function () {

        var sct = $(window).scrollTop();


        var sct = $(this).scrollTop();
        if (0 < sct) {
            $('.header').addClass('on');

        } else {
            $('.header').removeClass('on');
        };

        $('.mark').each(function (idx, itm) {
            if (sct > $(this).offset().top - 200) {
                $(this).addClass('on').siblings().removeClass('on');
                $('.header .gnb li').eq(idx).addClass('on').siblings().removeClass('on');
            }
        })

    })


    // $('.sec').on('scroll', function () {
    //     console.log($(this))
    // })





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

    $('.gallery .slide_inner .slide').slick({
        arrows: false,
        fade: true,
    });




    $('.gallery .arrows i:nth-child(1)').on('click', function () {
        $('.gallery .slide_inner .slide').slick('slickPrev')
    });
    $('.gallery .arrows i:nth-child(2)').on('click', function () {
        $('.gallery .slide_inner .slide').slick('slickNext')
    })



    $('.FAQ .q li').on('click', function () {
        $('.FAQ .q li p').removeClass('on');
        $(this).find('p').addClass('on');
    });



    $('.gnb li a').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top })
    })






































})