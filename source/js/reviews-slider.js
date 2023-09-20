const initReviewsSlider = (sliderElement) => {
  new Swiper(sliderElement, { // eslint-disable-line
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.slider-navigation__button--prev',
      nextEl: '.slider-navigation__button--next',
    },
  });
};

export { initReviewsSlider };
