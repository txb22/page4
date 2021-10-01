
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, autoplay: {
        delay: 3000,
    }, breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            freeMode: true,
        },
        575: {
            slidesPerView: 1.75,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
    },
})
    ;
$(".mySwiper").hover(function () {
    (this).swiper.autoplay.stop();
    console.log('stop')
}, function () {
    (this).swiper.autoplay.start();
});