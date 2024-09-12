$(document).ready(function() {

    $('.owl-testimonials').owlCarousel({
        loop:true,
        dots: true,
        items: 1
    })
    const owl = $('.owl-expertise')
    
    owl.owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
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
})