import { MOBILE_WIDTH_MEDIA_QUERY, TABLET_WIDTH_MEDIA_QUERY } from './const.js';

const setSliderMode = (slider, params) => {
  slider.itself.classList.add(slider.modeClass, 'swiper');
  slider.list.classList.add('swiper-wrapper');
  slider.slides.forEach((row) => row.classList.add('swiper-slide'));

  slider.swiper = new Swiper(slider.itself, params); // eslint-disable-line
};

const setSliderSimpleMode = (slider) => {
  setSliderMode(slider, {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    navigation: {
      prevEl: slider.prevButton,
      nextEl: slider.nextButton,
    },
  });
};

const setSliderCoverflowMode = (slider) => {
  setSliderMode(slider, {
    effect: 'coverflow', // (1)
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 1400,
      slideShadows: false,
    },
    navigation: {
      prevEl: slider.prevButton,
      nextEl: slider.nextButton,
    },
  });
};

const resetSliderMode = (slider) => {
  slider?.swiper?.destroy(true, true);
  slider.itself.classList.remove(slider.modeClass, 'swiper');
  slider.list.classList.remove('swiper-wrapper');
  slider.slides.forEach((row) => {
    row.removeAttribute('aria-label');
    row.removeAttribute('role');
    row.classList.remove('swiper-slide');
  });

  slider.list.removeAttribute('aria-live');

  slider.swiper = null;
};

const initShowGallery = (sliderElement) => {
  const slider = {
    itself: sliderElement.querySelector('.show-gallery__inner'),
    list: sliderElement.querySelector('.show-gallery__list'),
    slides: sliderElement.querySelectorAll('.show-gallery__item'),
    prevButton: sliderElement.querySelector('.slider-navigation__button--prev'),
    nextButton: sliderElement.querySelector('.slider-navigation__button--next'),
  };

  const mobileWidthMediaQueryList = window.matchMedia(MOBILE_WIDTH_MEDIA_QUERY);
  const tabletWidthMediaQueryList = window.matchMedia(TABLET_WIDTH_MEDIA_QUERY);

  const toggleSliderMode = () => {
    if (tabletWidthMediaQueryList.matches) {
      resetSliderMode(slider);
      setSliderCoverflowMode(slider);
    } else if (mobileWidthMediaQueryList.matches) {
      resetSliderMode(slider);
      setSliderSimpleMode(slider);
    } else {
      resetSliderMode(slider);
    }
  };

  tabletWidthMediaQueryList.addEventListener('change', () => {
    toggleSliderMode();
  });

  toggleSliderMode();
};

export { initShowGallery };

/*
 * Эффект coverflow невозможно переключать с помощью swiper-breakpoints.
 * Остаётся только реинициализировать swiper с новыми параметрами.
 */
