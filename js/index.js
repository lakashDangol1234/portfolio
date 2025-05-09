// review swiper
var swiper = new Swiper(".swiper-review", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
      delay: 3500,
      disableOnInteraction: false
  },
  slidesPerView: 3,
  loop: true,
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
  },
  pagination: {
      el: ".swiper-pagination",
  },
  breakpoints: {
      320: { // Mobile devies 320px
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }


  }
});