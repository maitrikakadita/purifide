$(document).ready(function () {
     $('.mob-div-ul-text').hide()
     $('.mob-sub-menu').hide()
     // $('.mob-meta-menu').hide()

     $('.toggle').click(function () {
        $('.mob-div-ul-text').slideToggle()
        $(this).find('i').toggleClass('fa-bars fa-xmark')
        $(this).find('a').toggleClass('+ -')
     })

     $('.mob-div-ul-text li a').click(function () {
        $(this).next('.mob-sub-menu').slideToggle()
     })
     $('.mob-sub-menu li a').click(function () {
        // $(this).next('.mob-sub-menu').slideToggle()
        $(this).next('.mob-sub-menu').slideToggle()
     })
  })

     $(document).ready(function () {
        $("#slide").owlCarousel({
           items: 1,
           loop: true,
           center: true,
           margin: 0,
           // nav: true,
           stagePadding: 0,
           dotsEach: true,
           // animateIn: 'animate__zoomIn',
           // animateOut: 'animate__zoomOutDown',
           // autoplay: true,
           // autoplayTimeout: 2000,
           // autoplayHoverPause: true,
        });
        new WOW().init();
        var owl = $('#slide');
        owl.owlCarousel();
        // Listen to owl events:
        owl.on('changed.owl.carousel', function (event) {
           new WOW().init();
        })
     });

     $(document).ready(function () {
        $("#slide1").owlCarousel({
           items: 3,
           loop: true,
           // center: true,
           margin: 15,
           // nav: true,
           stagePadding: 0,
           dotsEach: true,
           // animateIn: 'animate__zoomIn',
           // animateOut: 'animate__zoomOutDown',
           // autoplay: true,
           // autoplayTimeout: 2000,
           // autoplayHoverPause: true,
           responsive: {
              0: {
                 items: 1
              },
              600: {
                 items: 2
              },
              1000: {
                 items: 3
              }
           }

        });
        new (WOW).init();
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Listen to owl events:
        owl.on('changed.owl.carousel', function (event) {
           new WOW().init();
        })
     });
 


// <!-- -counter -->

  $(".count").each(function () {
 $(this)
   .prop("Counter", 0)
   .animate(
     {
       Counter: $(this).text(),
     },
     {
       duration: 4000,
       easing: "swing",
       step: function (now) {
         now = Number(Math.ceil(now)).toLocaleString('en');
                               $(this).text(now);
       },
     }
   );
});
