import Swiper, { Autoplay, A11y, Lazy, Keyboard, Pagination } from 'swiper';

export const initSlider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Autoplay, A11y, Lazy, Keyboard, Pagination],
    speed: 800,
    loop:  true,
    loopedSlides: 6,
    spaceBetween: 15,
    slidesPerView: "auto",
    grabCursor: true,
    keyboard: true,
    a11y: true,
    lazy: {
      enabled: true,
      checkInView: true,
      loadPrevNext: true,
      loadOnTransitionStart: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1280: {
        centeredSlides: true
      }
    }
  });
}