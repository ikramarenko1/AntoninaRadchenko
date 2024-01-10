const mobileHeaderHeight = window.innerWidth / 5;
const mobileHeader = document.querySelector(".mobile-header");
const logoLetters = mobileHeader.children[0];
const logoName = mobileHeader.children[1];
const burger = mobileHeader.children[2];
const mobileMenu = document.querySelector(".mobile-menu");

const hero = document.querySelector(".hero");
const about = document.querySelector(".about");
const education = document.querySelector(".education");
const requests = document.querySelector(".requests");
const methods = document.querySelector(".methods");
const service = document.querySelector(".service");
const contacts = document.querySelector(".contacts");
window.addEventListener("scroll", changeHeader);
function changeHeader() {
  if (window.innerWidth < 768) {
    if (about.getBoundingClientRect().top < mobileHeaderHeight) {
      mobileHeader.classList.add("visible");
    } else {
      mobileHeader.classList.remove("visible");
    }
    if (
      (requests.getBoundingClientRect().top + mobileHeaderHeight < mobileHeaderHeight &&
        methods.getBoundingClientRect().top + mobileHeaderHeight > mobileHeaderHeight) ||
      contacts.getBoundingClientRect().top + mobileHeaderHeight < mobileHeaderHeight
    ) {
      logoLetters.src = "./img/logo-letters-white.svg";
      logoName.src = "./img/logo-name-white.svg";
      burger.src = "./img/icons/burger-white.svg";
      mobileHeader.classList.add("white");
    } else {
      logoLetters.src = "./img/logo-letters.svg";
      logoName.src = "./img/logo-name.svg";
      burger.src = "./img/icons/burger.svg";
      mobileHeader.classList.remove("white");
    }
  }
}
if (burger) {
  burger.addEventListener("click", showMenu);
}
function showMenu() {
  document.body.classList.add("lock");
  mobileMenu.classList.add("visible");
}
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", hideMenu);
});
function hideMenu(e) {
  if (e.target.getAttribute("href")[0] === "#") {
    e.preventDefault();
    const section = document.querySelector(`.${e.target.getAttribute("href").slice(1)}`);
    if (window.innerWidth < 768) {
      window.scrollBy(0, 1 + section.getBoundingClientRect().top - mobileHeaderHeight);
    } else {
      window.scrollBy(0, 1 + section.getBoundingClientRect().top);
    }
  }

  document.body.classList.remove("lock");
  mobileMenu.classList.remove("visible");
}
