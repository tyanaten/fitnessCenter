const swiperWrapper = document.querySelector('.trainers__list');
const swiperSection = document.querySelector('.trainers__wrapper');
const swiperButtons = document.querySelectorAll('.trainers__slider-button');

const breakpointMobile = window.matchMedia('(max-width: 767px)');
const breakpointTablet = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199px)');
const breakpointDesktop = window.matchMedia('screen and (min-width: 1200px)');

const unfocusSlides = () => {
  let slidesAll = swiperSection.querySelectorAll('.swiper-slide');

  slidesAll.forEach((slide) => {
    slide.removeAttribute('tabindex');
  });
};

const focusMobileSlides = () => {
  unfocusSlides();
  let activeSlide = swiperSection.querySelector('.swiper-slide-active');
  activeSlide.setAttribute('tabindex', 0);
};

const focusTabletSlides = () => {
  unfocusSlides();
  let activeSlide = swiperSection.querySelector('.swiper-slide-active');
  let nextSlide = swiperSection.querySelector('.swiper-slide-next');
  activeSlide.setAttribute('tabindex', 0);
  nextSlide.setAttribute('tabindex', 0);
};

const focusDesktopSlides = () => {
  unfocusSlides();
  let activeIndex;
  let slidesAll = swiperSection.querySelectorAll('.swiper-slide');

  slidesAll.forEach((slide, i) => {
    if (slide.classList.contains('swiper-slide-active')) {
      activeIndex = i;
    }
  });

  for (let i = 0; i < 4; i++) {
    slidesAll[activeIndex + i].setAttribute('tabindex', 0);
  }
};

const breakpointMobileChecker = () => {
  if (breakpointMobile.matches) {
    swiperButtons.forEach((button) => {
      button.removeEventListener('click', focusTabletSlides);
      button.removeEventListener('click', focusDesktopSlides);
      button.addEventListener('click', focusMobileSlides);
    });
    focusMobileSlides();
  }
};

const breakpointTabletChecker = () => {
  if (breakpointTablet.matches) {
    swiperButtons.forEach((button) => {
      button.removeEventListener('click', focusMobileSlides);
      button.removeEventListener('click', focusDesktopSlides);
      button.addEventListener('click', focusTabletSlides);
    });
    focusTabletSlides();
  }
};

const breakpointDesktopChecker = () => {
  if (breakpointDesktop.matches) {
    swiperButtons.forEach((button) => {
      button.removeEventListener('click', focusMobileSlides);
      button.removeEventListener('click', focusTabletSlides);
      button.addEventListener('click', focusDesktopSlides);
    });
    focusDesktopSlides();
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
      initialSlide: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
});

swiperButtons.forEach((button) => {
  button.classList.add('trainers__slider-button--with-js');
});

swiperWrapper.classList.add('trainers__list--with-js');
swiperSection.classList.add('trainers__wrapper--with-js');

unfocusSlides();

breakpointMobile.addListener(breakpointMobileChecker);
breakpointTablet.addListener(breakpointTabletChecker);
breakpointDesktop.addListener(breakpointDesktopChecker);

breakpointMobileChecker();
breakpointTabletChecker();
breakpointDesktopChecker();
