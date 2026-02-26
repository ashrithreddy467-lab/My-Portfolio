const projectFiles = [
    { name: "Portfolio Home", path: "index.html", tag: "HTML", category: "HTML" },
    { name: "Testing Page", path: "../testing.html", tag: "HTML", category: "HTML" },
    { name: "Temperature Converter", path: "../Tempconverters.html", tag: "HTML", category: "HTML" },
    { name: "Profile Page", path: "../Profilepage-1.html", tag: "HTML", category: "HTML" },
    { name: "My First Project", path: "../My first project.html", tag: "HTML", category: "HTML" },
    { name: "Main Index", path: "../index.html", tag: "HTML", category: "HTML" },
    { name: "Animation Page", path: "../animation.html", tag: "HTML", category: "HTML" },
    { name: "KLH Page", path: "../KLH.html", tag: "HTML", category: "HTML" },
    { name: "College Timetable", path: "../college timetable.html", tag: "HTML", category: "HTML" },
    { name: "Tourist Helper", path: "../touristhelper.html", tag: "HTML", category: "HTML" },
    { name: "Bootstrap Project", path: "../Bootstrap/index.html", tag: "CSS", category: "CSS" },
    { name: "Fwd Project", path: "../Fwdproject/index.html", tag: "CSS", category: "CSS" },
    { name: "Menu Card", path: "../MENUCARD/index.html", tag: "CSS", category: "CSS" },
    { name: "CSS Main Project", path: "../CSS/index.html", tag: "CSS", category: "CSS" },
    { name: "Media Query Page", path: "../CSS/Media tags/media query.html", tag: "CSS", category: "CSS" },
    { name: "Application Form", path: "../CSS/project-(application form)/application form.html", tag: "CSS", category: "CSS" },
    { name: "Chatbox Project", path: "../CSS/project-(chatbox)/chatbox.html", tag: "CSS", category: "CSS" },
    { name: "Exercise 1", path: "../CSS/project-1/exercise-1.html", tag: "CSS", category: "CSS" },
    { name: "Exercise 2", path: "../CSS/project-2/exercise-2.html", tag: "CSS", category: "CSS" },
    { name: "Menu Project 1", path: "../CSS/project-3(menu)/menu-1.html", tag: "CSS", category: "CSS" },
    { name: "Menu Project 2", path: "../CSS/project-4(menu-2)/menu-2.html", tag: "CSS", category: "CSS" },
    { name: "Project 5 KLH", path: "../CSS/project-5.html/klh.html", tag: "CSS", category: "CSS" },
    { name: "Project 6 Class", path: "../CSS/project-6/class.html", tag: "CSS", category: "CSS" },
    { name: "Project 7", path: "../CSS/project-7/index.html", tag: "CSS", category: "CSS" },
    { name: "Project 8", path: "../CSS/project-8/index.html", tag: "CSS", category: "CSS" },
    { name: "Navtag Project", path: "../CSS/navtag.project/index.html", tag: "CSS", category: "CSS" },
    { name: "Navtag Media", path: "../CSS/navtag.project/media.html", tag: "CSS", category: "CSS" },
    { name: "Age Predictor", path: "../JAVASCRIPT/AgePredictor.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Arithmetic Calculator", path: "../JAVASCRIPT/arthmeticcalculator.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Counter App", path: "../JAVASCRIPT/counter.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Login Page", path: "../JAVASCRIPT/loginpage.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Toss Game", path: "../JAVASCRIPT/TossGame.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Untitle", path: "../JAVASCRIPT/untitle.html", tag: "JAVASCRIPT", category: "JavaScript" },
    { name: "Untitle 2", path: "../JAVASCRIPT/untitle.2.html", tag: "JAVASCRIPT", category: "JavaScript" }
];

function loadProject(path, name) {
    const frame = document.getElementById('project-frame');
    const output = document.getElementById('console-display');
    const openLink = document.getElementById('open-project-link');

    frame.src = path;
    output.textContent = "Loaded: " + name;
    openLink.href = path;
}

function renderProjectList() {
    const list = document.getElementById('project-list');
    if (!list) {
        return;
    }

    const order = ["HTML", "CSS", "JavaScript"];
    let html = "";

    order.forEach((category) => {
        const projects = projectFiles.filter((project) => project.category === category);
        if (projects.length === 0) {
            return;
        }

        html += `<h3 class="project-group-title">${category}</h3>`;
        html += projects.map((project) => {
            return `
                <div class="glass-card">
                    <span class="tag">${project.tag}</span>
                    <h4>${project.name}</h4>
                    <p>${project.path}</p>
                    <button class="run-btn" onclick="loadProject('${project.path}', '${project.name.replace(/'/g, "\\'")}')">View Output</button>
                </div>
            `;
        }).join('');
    });

    list.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    renderProjectList();
    loadProject(projectFiles[0].path, projectFiles[0].name);
});
