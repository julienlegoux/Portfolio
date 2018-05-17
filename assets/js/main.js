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

    $('#competences').appear();
    /* $("body").on("appear", "#competences", function() {
        $('.chart').easyPieChart({
            barColor: '#dc3545',
            trackColor: '#E8E8E8E8',
            scaleColor: false,
            lineWidth: 5,
            animate: 3000,
            onStep: function (from, to, percent) {
                $('.chart'.el).find('span').text(Math.round(percent))}
        });
    }); */
    var charData = $(".chart").data('easy-pie-chart');
    console.log (charData )    
    $("body").on("appear", "#competences", function () {
        if ($(".chart").data('easy-pie-chart') == null) {
            $('.chart').easyPieChart({
                barColor: '#dc3545',
                trackColor: '#E8E8E8E8',
                scaleColor: false,
                lineWidth: 5,
                animate: 3000,
                onStep: function (from, to, percent) {
                    $('.chart'.el).find('span').text(Math.round(percent))                    
                }                
            });
        } /* else {
            $(".chart").data('easy-pie-chart', null)
            $('.chart').easyPieChart({
                barColor: '#dc3545',
                trackColor: '#E8E8E8E8',
                scaleColor: false,
                lineWidth: 5,
                animate: 3000,
                onStep: function (from, to, percent) {
                    $('.chart'.el).find('span').text(Math.round(percent))
                }
            });
        } */
    });
    $('body').on('disappear', '#competences', function () {
        $(".chart").data('easy-pie-chart').update(0);
        $(".chart").data('easy-pie-chart', null);
        $('.chart').easyPieChart({
            barColor: '#fff',
            trackColor: '#fff',
            scaleColor: false,
            lineWidth: 5,
            animate: 3000,
            onStep: function (from, to, percent) {
                $('.chart'.el).find('span').text(Math.round(percent))
            }
        });
        $(".chart").data('easy-pie-chart', null);
    });
    var $container = $('.isotope');
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

});