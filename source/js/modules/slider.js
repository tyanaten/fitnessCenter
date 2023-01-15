const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSection = document.querySelector('.trainers__wrapper');
const swiperButtons = document.querySelectorAll('.trainers__slider-button');
const slides = document.querySelectorAll('.trainers__list-item');

swiperButtons.forEach((button) => {
  button.classList.add('trainers__slider-button--with-js');
});
swiperWrapper.classList.add('trainers__list--with-js');
swiperSection.classList.add('trainers__wrapper--with-js');



const breakpointMobile = window.matchMedia('(max-width: 767px)');
const breakpointTablet = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199px)');
const breakpointDesktop = window.matchMedia('screen and (min-width: 1200px)');

const breakpointMobileChecker = () => {
  if (breakpointMobile.matches) {
    console.log('mobile');
  }
};

const breakpointTabletChecker = () => {
  if (breakpointTablet.matches) {
    console.log('tablet');
  }
};

const breakpointDesktopChecker = () => {
  if (breakpointDesktop.matches) {
    console.log('desktop');
  }
};

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  speed: 1,
  spaceBetween: 40,
  allowTouchMove: true,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});


breakpointMobile.addListener(breakpointMobileChecker);
breakpointMobileChecker();

breakpointTablet.addListener(breakpointTabletChecker);
breakpointTabletChecker();

breakpointDesktop.addListener(breakpointDesktopChecker);
breakpointDesktopChecker();


let slidesAll = document.querySelectorAll('.swiper-slide');

let currentIndex = swiper.activeIndex;

removeFocusSlides();
console.log(slides);

for (let i = 1; i <= currentIndex; i++) {
  slidesAll[i - 1].setAttribute('tabindex', 0);
}

let t = document.querySelector('.swiper-slide-active');
t.setAttribute('tabindex', 0);

let tt = document.querySelector('.swiper-slide-next');
tt.setAttribute('tabindex', 0);

console.log(slidesAll);
