$(document).ready(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $('.menu_bg').addClass('fixed');
        } else {
            $('.menu_bg').removeClass('fixed');
        }
        if (scrolling > 200) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }
    });
    // menu fixed ends

    jQuery('#demo1').skdslider({
        slideSelector: '.slide',
        delay: 5000,
        animationSpeed: 2000,
        showNextPrev: true,
        showPlayButton: true,
        autoSlide: true,
        animationType: 'fading'
    });
    // slider script ends 

    $('.back_to_top').click(function () {
        var body = $('html, body');
        body.animate({
            scrollTop: 0,
        }, 1000);
    });
    // back_to_top

    // (waypoints.js) start
    var s = $('.full_wrapper');
    var nav = $('.menu_bg .menu_wrap .menu ul li a');
    s.waypoint({
        handler: function (direction) {
            var active = $(this);
            if (direction == 'up')
                active = active.prev();
            var active_link = $('ul li a[href="#' + active.attr('id') + '"]');

            nav.removeClass('active');
            active_link.addClass('active');
        },
        offset: '35%'
    });
    // (waypoints.js) ends

    $('.menu_bg .menu_wrap .menu ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    // SMOTH SCROLLING END

    // all stellar.js start

    $(window).stellar();

    // all stellar.js ends

    // gallary filter and venobox start

    var mixer = mixitup('.gallery_filter');

    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#ffc155',
        arrowsColor: '#ffc155',
        framewidth: '900px',
    });

    // gallary filter and venobox ends

    //counter start

    $('.counter').counterUp({
        delay: 40,
        time: 2500
    });

    //counter ends

    // slick start

    $('.testi_wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    });

    // slick ends
});
