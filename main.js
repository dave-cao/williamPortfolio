//nav bar animation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links_container");
const aboutMeLink = document.querySelector(".aboutMeLink");
const myProjectsLink = document.querySelector(".myProjectsLink");
const contactMeLink = document.querySelector(".contactMeLink");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navBar.classList.toggle("under");
});

//enlarge all photos when clicked
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    images[i].classList.toggle("enlarge");
  });
}
