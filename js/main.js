$(function () {
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










































})