const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.classList.toggle("active");
});
