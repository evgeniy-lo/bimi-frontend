import { initLazyLoad } from "./modules/lazyLoad.js";
import { checkWebpSupports } from "./modules/checkWebpSupports.js";
import { scrollToSection } from "./modules/scrollToSection.js";
import { initModal, initModalPopup } from "./modules/initModal.js";
import { handleFormSubmit } from "./modules/handleFormSubmit.js";
import { handleMobileMenu } from  "./modules/handleMobileMenu.js";
import { handleFixedMobileMenu } from "./modules/handleFixedMobileMenu.js";
import { initLoadMoreReviews } from "./modules/initLoadMoreReviews.js";
import { initSlider } from "./modules/initSlider.js"

document.addEventListener("DOMContentLoaded", () => {
  initLazyLoad();
  checkWebpSupports();
  scrollToSection();
  initModal();
  initModalPopup();
  handleFormSubmit();
  handleMobileMenu();
  handleFixedMobileMenu();
  initLoadMoreReviews();
  initSlider();
});