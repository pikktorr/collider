import { projects } from "./lists";
import { gallery } from "./lists";
import { skills } from "./lists";

//NAVIGATION - BACK TO TOP

const topButton = document.querySelector(".back-to-top");
const scrollFunction = () => {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (topButton.style.visibility = "visible")
    : (topButton.style.visibility = "hidden");
};
window.onscroll = () => scrollFunction();

topButton.onclick = () => window.scrollTo(0, 0);

// NAVIGATION - SCROLL
const scrollPage = targetId => {
  const target = document.querySelector(targetId);
  const targetLeftPosition = target.getBoundingClientRect().left;
  const targetTopPosition = target.getBoundingClientRect().top;
  window.scrollTo(targetLeftPosition, targetTopPosition);
  console.log(targetTopPosition);
  // without options, it works with Edge and Safari
};

const navToSections = [
  { nav: "#nav-home", section: "#home-section" },
  { nav: "#nav-about", section: "#about-section" },
  { nav: "#nav-projects", section: "#projects-section" },
  { nav: "#nav-slide", section: "#slide-section" },
  { nav: "#nav-skills", section: "#skills-section" },
  { nav: "#nav-contact", section: "#contact-section" }
];

navToSections.map(element => {
  const navButton = document.querySelector(element.nav);
  navButton.addEventListener("click", () => {
    scrollPage(element.section);
  });
});

// PROJECTS
const projectList = document.querySelector(".projectList");
projects.map((project, index) => {
  const oneProject = document.createElement("article");
  oneProject.className = "project-container";
  oneProject.innerHTML = `
    <div class="project-image">
                <img src=${project.image}  alt=${project.title.replace(
    /\s/g,
    ""
  )} />
              </div>
              <div class="project-text">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-tool">(${project.tool})</p>
                <br />
                <p>${project.about}</p>
              </div>
  `;
  oneProject.addEventListener("click", () => window.open(project.link));
  return projectList.appendChild(oneProject);
});

// AUTOMATIC SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-container>img");
const dots = document.querySelectorAll(".dot");

const showSlides = () => {
  slides.forEach(slide => {
    slide.style.opacity = "0";
  });

  slideIndex >= slides.length ? (slideIndex = 0) : slideIndex;
  slides[slideIndex].style.opacity = "1";

  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");

  slideIndex++;
  setTimeout(showSlides, 4000);
};
showSlides();

//GALLERY
const slide = document.querySelector(".slide-container");
const galleryContainer = document.querySelector(".gallery-content");
const modal = document.querySelector(".modal-container");
const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");
let galleryIndex = 1;

slide.addEventListener("click", () => modal.style.display = "block");

const images = gallery.map((img, index) => {
  const image = document.createElement("div");
  image.className = "gallery-image";
  image.innerHTML = `
    <img src=${img.image}>
    <div class="img-index">${index + 1}/${gallery.length}</div>
    <div class="img-title">${img.title}</div>
  `;
  image.style.display = "none";
  return galleryContainer.appendChild(image);
});

// SKILLS
const skillsBadges = document.querySelector(".skills-badges");

skills.map((skill, index) => {
  const badge = document.createElement("article");
  badge.className = `badge skill${index}`;
  badge.innerHTML = `
  <div class="badge-img" title=${skill.name.replace(/\s/g, "")}>
    <img src=${skill.image}  alt=${skill.name.replace(/\s/g, "")} /></div>
  `;
  return skillsBadges.appendChild(badge);
});
