$(function(){
    var lastScrollTop = 0;
    $(document).on('scroll', function() {
    if($(this).scrollTop()>lastScrollTop){
        if($(this).scrollTop()>=($('.js-section-features').position().top - 50)){
            $('nav').addClass('sticky');
        }
        if($(this).scrollTop()>=($('.js-section-features').position().top - 100)) {
             $('.js-wp-1').addClass('animated fadeInUp');
        }
        if($(this).scrollTop()>=($('.js-scroll-to-steps').position().top - 200)) {
             $('.js-wp-2').addClass('animated fadeInUpBig');
        }
    }else {
        if($(this).scrollTop()<($('.js-section-features').position().top)){
            $('nav').removeClass('sticky');
        }
    }
    lastScrollTop = $(this).scrollTop();
})

    $('.js-scroll-to-plans').click(function(){
        $('html, body').animate({
            scrollTop: $('.js-section-plans').offset().top
        },1000);
    })

    $('.js-scroll-to-features').click(function(){
        $('html, body').animate({
            scrollTop: $('.js-section-features').offset().top
        },1000);
    })

    $('.mobile-menu-icon').click(function() {
        var nav = $('.js-nav');
        nav.slideToggle(200);
    })
   
});