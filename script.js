$(document).ready(function() {

    $('.owl-testimonials').owlCarousel({
        loop:true,
        dots: true,
        items: 1,
        autoplay: true
    })
    $('.owl-team').owlCarousel({
        loop:true,
        dots: true,
        items: 3
    })
    const owl = $('.owl-expertise')
    
    owl.owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            1024: {
                items: 3,
                stagePadding: 0
            },
            1440: {
                items: 4
            },
            1900: {
                items: 5
            }
        }
    })

    $('.arrow-right').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.arrow-left').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();
        const header = $('.header')
    
        if (scrollTop > 600) {
          header.fadeIn();
        } else {
          header.fadeOut();
        }
    });
})