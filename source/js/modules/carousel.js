const swiperSection = document.querySelector('.review__wrapper');
const swiperWrapper = document.querySelector('.reviews-list');
const swiperButtons = document.querySelectorAll('.review__carousel-button');

swiperSection.classList.add('review__wrapper--with-js');
swiperWrapper.classList.add('reviews-list--with-js');
swiperButtons.forEach((button) => {
  button.classList.add('review__carousel-button--with-js');
});

const swiper = new Swiper('.carousel', {
  slidesPerView: 1,
  speed: 1,
  spaceBetween: 10,
  allowTouchMove: true,
  freeMode: true,
  autoHeight: true,

  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
});
