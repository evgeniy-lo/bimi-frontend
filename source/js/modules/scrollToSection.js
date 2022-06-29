export const scrollToSection = () => {
  const links = document.querySelectorAll("a[data-scroll]");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const element = document.querySelector(href);
   
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}
