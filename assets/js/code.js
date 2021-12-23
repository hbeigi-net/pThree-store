$(document).ready(function () {
    new WOW().init();

$(".owl-carousel").owlCarousel(
    {
        rtl:true,
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{ items:1},
            576:{ items:2},
            992:{items:3},
            1200:{items:4}
        }


    }
)
});