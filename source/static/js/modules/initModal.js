import MicroModal from "micromodal";
import { getScrollBarWidth } from "./getScrollBarWidth.js"

const body = document.querySelector(".body");
const header = document.querySelector(".header");
const triggerButtons = document.querySelectorAll("a[data-modal-trigger]");

triggerButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  })
})

export const initModal = () => {
  MicroModal.init({
    openTrigger: "data-modal-trigger",
    awaitCloseAnimation: true,
    disableScroll: true,
    disableFocus: true,
    onShow: modal => {
      body.classList.add("scroll-lock");
      body.style.paddingRight = getScrollBarWidth() + "px";
      header.style.paddingRight = getScrollBarWidth() + "px";
    },
    onClose: modal => {
      sessionStorage.setItem("modalState", "close");
      setTimeout(() => {
        body.classList.remove("scroll-lock");
        body.style.paddingRight = "0";
        header.style.paddingRight = "0";
      }, 250)
    }
  });
}

export const initModalPopup = () => {
  const modalClose = document.querySelectorAll("[data-micromodal-close]")
  let modalState = sessionStorage.getItem("modalState");

  if (modalState === "close") return;

  sessionStorage.setItem("modalState", "open");

  window.setTimeout(() => {
    MicroModal.show("modal")
  }, 30000);

  modalClose.forEach(item => {
    item.addEventListener("click", () => {
      sessionStorage.setItem("modalState", "close");
    })
  });
};
