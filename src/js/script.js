class Project {
  constructor(title, body, techUsed, githubName, githubLink) {
    this.title = title;
    this.body = body;
    this.tech = techUsed;
    this.githubName = githubName;
    this.githubLink = githubLink;
  }
}

function createProjectEntry(projectEntry) {
  const projectContainer = document.createElement("div");
  const title = document.createElement("h3");
  const body = document.createElement("p");
  const tech = document.createElement("div");
  const link = document.createElement("div");

  projectContainer.classList.add("project-entries__project");

  let hammer = '<i class="fas fa-hammer"></i> '
  let linkAnchor = `<i class="fab fa-github"></i> <a href="${projectEntry.githubLink}">${projectEntry.githubName}</a>`;

  title.textContent = projectEntry.title;
  body.insertAdjacentHTML('afterbegin', projectEntry.body);
  tech.textContent = projectEntry.tech;
  tech.insertAdjacentHTML('afterbegin', hammer);
  link.insertAdjacentHTML('afterbegin', linkAnchor);

  projectContainer.appendChild(title);
  projectContainer.appendChild(body);
  projectContainer.appendChild(tech);
  projectContainer.appendChild(link);

  projectsContainer.appendChild(projectContainer);
}

const projects = [
                  new Project(
                    "Website - uwu",
                    "⚡ Designed with the best principles in mind, this website got created to show the world a new kind of pleasure",
                    "HTML/CSS",
                    "justtobbi/uwu",
                    "https://justtobbi.github.io/uwu"
                  )
                  
];

const projectsContainer = document.querySelector(".project-entries");

for (let i = 0; i < projects.length; i++) {
  createProjectEntry(projects[i]);
}
