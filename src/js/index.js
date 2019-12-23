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
  slides.forEach((slide, index) => {
    slide.classList.add("hidden-img");
  });
  slideIndex >= slides.length ? (slideIndex = 0) : slideIndex;
  slides.forEach(img => img.classList.remove("active-img"));
  slides[slideIndex].classList.replace("hidden-img", "active-img");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");

  slideIndex++;
  console.log(slideIndex);
  setTimeout(showSlides, 4000);
};
showSlides();

slides.forEach((slide, index) =>
  slide.addEventListener("click", () => {
    showModal();
    showImage(index);
  })
);

//GALLERY
const galleryContainer = document.querySelector(".gallery-content");
const modal = document.querySelector(".modal-container");
const closeButton = document.querySelector(".close-button");
const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");
let galleryIndex = 1;

const images = gallery.map((img, index) => {
  const image = document.createElement("div");
  image.className = "gallery-image active-img";
  image.innerHTML = `
  <img src=${img.image}>
  <div class="img-index">${index + 1}/${gallery.length}</div>
  <div class="img-title">${img.title}</div>
  `;
  return image;
  // image.classList.add("hidden-img");
  // return galleryContainer.appendChild(image);
});
// const images = gallery.map((img, index) => {
//   const image = document.createElement("div");
//   image.className = "gallery-image";
//   image.innerHTML = `
//   <img src=${img.image}>
//   <div class="img-index">${index + 1}/${gallery.length}</div>
//   <div class="img-title">${img.title}</div>
//   `;
//   image.classList.add("hidden-img");
//   return galleryContainer.appendChild(image);
// });

const showModal = () => (modal.style.display = "block");
const closeModal = () => {
  modal.style.display = "none";
  images.map(img => img.remove());
};

closeButton.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.which === 27) closeModal();
});

const showImage = index => {
  console.log(images[index]);
  galleryContainer.appendChild(images[index]);
};

// const showImage = index => {
//   images[index].classList.replace("hidden-img", "active-img");
// };

const currentImage = n => {
  showImage((galleryIndex = n));
};

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
