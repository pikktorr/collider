const projects = [
  {
    title: "Smart-Brain",
    tool: "React.js, PostgreSQL",
    about:
      "This application detects faces on pasted images and counts how many times you used it with the registered profile.",
    link: ""
  },
  {
    title: "RoboFriends",
    tool: "React.js",
    about: "Type in names to get an instant search result.",
    link: ""
  },
  {
    title: "Carousel",
    tool: "Vanilla JavaScript",
    about:
      "A vanilla javascript carousel with my favourite music albums. Alt-J, Beck, John Coffey, Portugal the Man, Radiohead, Red Hot Chili Peppers, Slipknot, Tool",
    link: ""
  },
  {
    title: "The Shopping List",
    tool: "JavaScript",
    about:
      "A simple, mandatory shopping list with random colored item backgrounds. Everything we need!",
    link: ""
  },
  {
    title: "UX/UI Design",
    tool: "Adobe XD",
    about:
      "A mobile portfolio design from hand drawn sketches to wireframes to prototype preview.",
    link:
      "https://xd.adobe.com/view/f7600bf5-e88a-4c24-4472-e9ecc2d04c0c-8151/?fullscreen"
  },
  {
    title: "Outdoor stage in Szeged",
    tool: "ArchiCAD, Photoshop, InDesign, Illustrator",
    about:
      "This work was my Master Architecture Degree project. An outdoor stage in Liget park in Szeged... ",
    link:
      "https://xd.adobe.com/view/f7600bf5-e88a-4c24-4472-e9ecc2d04c0c-8151/?fullscreen"
  }
];

const skills = [
  {
    image: "archifitty",
    name: "ArchiCAD",
    url: "https://www.graphisoft.hu/archicad/"
  },
  {
    image: "vsfitty",
    name: "VS Code"
  },
  {
    image: "ps",
    name: "Photoshop"
  }
];

// NAVIGATION - SCROLL

const scrollPage = targetId => {
  const target = document.querySelector(targetId);
  const targetLeftPosition = target.getBoundingClientRect().left;
  const targetTopPosition = target.getBoundingClientRect().top;
  window.scrollTo(targetLeftPosition, targetTopPosition);
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

// const skillsButton = document.querySelector("#nav-skills");
// skillsButton.addEventListener("click", () => {
//   scrollPage("#skills-section");
// });

// PROJECTS

// SKILLS
const skillsBadges = document.querySelector(".skills-badges");

skills.map((skill, index) => {
  const badge = document.createElement("article");
  badge.className = `badge skill${index}`;
  badge.innerHTML = `
  <div class="badge-img">
    <img src=${skill.image} alt=${skill.name.replace(/\s/g, "")} />
  </div>
  <h4 class="badge-name">${skill.name}</h4>
  `;

  badge.addEventListener("click", () => window.open(skill.url));
  skill.url ? badge.setAttribute("style", "cursor:pointer") : badge;

  return skillsBadges.appendChild(badge);
});
