import { projects } from "./lists";
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
  { nav: "#nav-gallery", section: "#gallery-section" },
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
console.log(projectList);
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

//GALLERY

const sectionTransition = () => {
  const gallerySection = document.querySelector("#gallery-section");
  const galleryTop = gallerySection.getBoundingClientRect().top;
  console.log(gallerySection.getBoundingClientRect().top);
  if (
    galleryTop < window.innerHeight / 1.5 &&
    galleryTop > -(window.innerHeight / 1.5)
  ) {
    gallerySection.classList.add("background");
  } else {
    gallerySection.classList.remove("background");
  }
};

window.addEventListener("scroll", sectionTransition);

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
