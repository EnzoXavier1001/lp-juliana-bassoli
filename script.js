$(document).ready(function() {
    const owl = $('.owl-expertise')
    
    owl.owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 4
            },
            1440: {
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