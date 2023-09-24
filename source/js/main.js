import { initMembersSlider } from './members-slider.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initFolds } from './folds.js';

document.querySelectorAll('.members-slider').forEach(initMembersSlider);
document.querySelectorAll('.reviews-slider').forEach(initReviewsSlider);
document.querySelectorAll('.folds').forEach(initFolds);
