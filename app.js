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

// NAVIGATION - SMOOTH SCROLL
const smoothScroll = (target, duration) => {
  target = document.querySelector(target);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = currentTime => {
    startTime ? (startTime = currentTime) : startTime;
    const timeElapsed = currentTime - startTime;
    console.log("start time:", startTime);
    console.log("current time:", currentTime);
    console.log("elapsed:", timeElapsed);
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const skillSection = document.querySelector("#nav-skills");
console.log(skillSection);
skillSection.addEventListener("click", () => {
  smoothScroll("#skills-section", 1000);
});

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
