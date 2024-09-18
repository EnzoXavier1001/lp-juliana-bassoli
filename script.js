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

    function animateCounter($element, target, duration) {
      let current = 0;
      let increment = target / (duration / 50);
      const plus = $element.find('.plus');
  
      // Inicia o símbolo "+" como invisível
      plus.hide();
  
      const interval = setInterval(function() {
          current += increment;
          if (current >= target) {
              current = target;
              plus.show(); // Mostra o símbolo "+" ao alcançar o alvo
              clearInterval(interval);
          }
          $element.contents().filter(function() {
              return this.nodeType === 3; // apenas nós de texto
          }).first().replaceWith(Math.floor(current)); // Atualiza apenas o número
      }, 50);
  }
  
  function startCounters() {
      $('.counter').each(function() {
          const target = parseInt($(this).data('target'));
          animateCounter($(this), target, 2000);
      });
  }
  
  function isInView(element) {
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      const elementOffsetTop = $(element).offset().top;
  
      return elementOffsetTop < (scrollTop + windowHeight) && (elementOffsetTop + $(element).outerHeight()) > scrollTop;
  }
  
  let countersStarted = false;
  
  $(window).on('scroll', function() {
      if (isInView('.section') && !countersStarted) {
          countersStarted = true;
          startCounters();
      }
  });
  
})