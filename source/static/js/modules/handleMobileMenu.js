export const handleMobileMenu = () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll(".nav__list-link");
  const mobileMenuButton = document.querySelector(".header__links .button");

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      burger.classList.remove("active");
      nav.classList.remove("active");
    })
  })

  mobileMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.remove("active");
    nav.classList.remove("active");
  })
}