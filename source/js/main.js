import { initMembersSlider } from './members-slider.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initShowGallery } from './show-gallery.js';
import { initFolds } from './folds.js';
import { initTaber } from './taber.js';

document.querySelectorAll('.members-slider').forEach(initMembersSlider);
document.querySelectorAll('.reviews-slider').forEach(initReviewsSlider);
document.querySelectorAll('.show-gallery').forEach(initShowGallery);
document.querySelectorAll('.folds').forEach(initFolds);

document.querySelectorAll('.taber').forEach((taber, index) => {
  initTaber(taber, `taber-${index + 1}`);
});
