const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navItem = document.querySelectorAll(".nav-item");

const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");
const nav4 = document.querySelector("#nav4");
const nav5 = document.querySelector("#nav5");

const dropCont = document.querySelectorAll(".dropdown-content");

const dropCont0 = document.querySelector("#dropdown-cont-0");
const dropCont1 = document.querySelector("#dropdown-cont-1");
const dropCont2 = document.querySelector("#dropdown-cont-2");
const dropCont3 = document.querySelector("#dropdown-cont-3");
const dropCont4 = document.querySelector("#dropdown-cont-4");


window.addEventListener("click", event => {
  for (let dd of dropCont) dd.classList.toggle("active", false);

  if (event.target.matches(".nav-link")) {
    event.target.nextElementSibling.classList.toggle("active");
  }
});





