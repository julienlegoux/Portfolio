$(function () {
    $('body').scrollspy({
        target: '#page-nav-wrapper',
        offset: 100
    });
    $('.scrollto').on('click', function (e) {
        var target = this.hash;
        e.preventDefault();
        $('body').scrollTo(target, 800, {
            offset: -90,
            'axis': 'y'
        });
    });
    $(window).on('scroll resize load', function () {
        $('#page-nav-wrapper').removeClass('fixed');
        var scrollTop = $(this).scrollTop();
        var topDistance = $('#page-nav-wrapper').offset().top;
        if ((topDistance) > scrollTop) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
        } else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
        }
    });
    $('.chartComp1').appear();
    $("body").on("appear", ".chartComp1", function () {
        if ($(".chartComp1").data('easy-pie-chart') == null) {
            $('.chartComp1').easyPieChart({
                barColor: 'rgba(172, 137, 90, 0.9)',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                rotate: 180,
                animate: 2500,
                onStep: function (from, to, percent) {
                    $('.chartComp1'.el).find('span').text(Math.round(percent))
                }
            });
        }
    });
    $('body').on('disappear', '.chartComp1', function () {
        $(".chartComp1").data('easy-pie-chart').update(null);
        $(".chartComp1").data('easy-pie-chart', null);
    });
    $('.chartComp2').appear();
    $("body").on("appear", ".chartComp2", function () {
        if ($(".chartComp2").data('easy-pie-chart') == null) {
            $('.chartComp2').easyPieChart({
                barColor: 'rgba(172, 137, 90, 0.9)',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                rotate: 180,
                animate: 2500,
                onStep: function (from, to, percent) {
                    $('.chartComp2'.el).find('span').text(Math.round(percent))
                }
            });
        }
    });
    $('body').on('disappear', '.chartComp2', function () {
        $(".chartComp2").data('easy-pie-chart').update(null);
        $(".chartComp2").data('easy-pie-chart', null);
    });
    $('.chartComp3').appear();
    $("body").on("appear", ".chartComp3", function () {
        if ($(".chartComp3").data('easy-pie-chart') == null) {
            $('.chartComp3').easyPieChart({
                barColor: 'rgba(172, 137, 90, 0.9)',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                rotate: 180,
                animate: 2000,
                onStep: function (from, to, percent) {
                    $('.chartComp3'.el).find('span').text(Math.round(percent))
                }
            });
        }
    });
    $('body').on('disappear', '.chartComp3', function () {
        $(".chartComp3").data('easy-pie-chart').update(null);
        $(".chartComp3").data('easy-pie-chart', null);
    });
    // Ajouter Quand Portfolio Actif
    /* var $container = $('.isotope');
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    }); */
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
});