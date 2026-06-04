import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import CreateProject from "./CreateProject";


const categories = ["Front-End", "Back-End", "Full-Stack"];

function Home({ isAdmin, projects, setProjects, deleteProject, addProject, setEditingProject, editingProject, editProject }) {

  function handleDeleteProject(projectID) {
  deleteProject(projectID); // Call the API delete function
  }

  return(
    <main className="portfolio-page">

      {/* Navigation */}
      <nav className="nav"> 
          <div className="logo nav-links">
            <a href='#'>Osceola // Dev</a>
          </div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>



      {/* Hero Section */}
      <section className="hero section-container">
        <div className="hero-grid">
          <section className="hero-content">
            <h1>Hi, I'm Osceola</h1>
            <p className="eyebrow">Front-End • Back-End • Full-Stack</p>
            <p className="hero-description">
              Full-stack developer experienced in building scalable applications and cloud-based solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => 
                document.getElementById("projects")?.scrollIntoView({behavior: "smooth"},
                )} className="primary-button"
                >
                  View Projects
              </button>

              <button onClick={() => 
                document.getElementById("contact")?.scrollIntoView({behavior: "smooth",}
                )} className="secondary-button"
                >
                  Contact Me
                </button>
            </div>
          </section>


          {/* Focus Card in Hero */}
          <aside className="focus-card">
            <h2>Building Full-Stack Confidence</h2>
            <p className="eyebrow">Current Focus</p>
            <div className="category-list">
              {categories.map((category) => (
                <div className="category-item" key={category}>
                  <span>{category}</span>
                  <span>{projects.filter((project) => project.type === category).length} project</span>
                </div>
              ))}
              <div className="category-item experience">
                <span>Experience</span>
                <span>5 Years</span>
              </div>
            </div>
          </aside>
        </div>
      </section>




      {/* Projects Section */}
              {isAdmin && <CreateProject 
              addProject={addProject} 
              editingProject={editingProject} 
              editProject={editProject} 
              setEditingProject={setEditingProject} 
              />}

      <section className="section-container projects" id="projects">
        <div className="section-heading">
          <div>
            <h2>Work Board</h2>
            <p className="eyebrow">Projects</p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-topline">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <span>{Number(project.progress) >= 100 ? "Complete" : "In Progress"}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="skill-list">
                {project.skills.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <div>{project.liveDemo !== "" && 
                  (
                    <a href={project.liveDemo.startsWith('http') ? project.liveDemo : `https://${project.liveDemo}`} target="_blank" rel="noopener noreferrer"> {/* checks if it has HTTP and adds HTTPS if it doesn't*/}
                      Live Demo
                    </a>
                  )}
                </div>

                <div>{project.github !== "" && 
                  (
                    <a href={project.github.startsWith('http') ? project.github : `https://${project.github}`} target="_blank" rel="noopener noreferrer"> {/* Also opens in new tab, and doesnt allow the new tab to access origin tab */}
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="project-buttons">
                {isAdmin && (
                  <>
                    <button className="delete-button" onClick={() => deleteProject(project.id)}>
                      Delete
                    </button>
                    <button className="edit-button" onClick={() => setEditingProject(project)}>
                        Edit
                    </button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* Skills Section */}
      <section id="quals" className="section-container quals-section">
          <div className="quals-heading">
            <h2>Qualifications</h2>
            <p className="eyebrow">Technical Background</p>
          </div>
          <div className="quals-grid">
            <div className="cred-card">
              <h3 className="listTitle">Certifications</h3>
              <ul className="list">
                <p className="eyebrow listTitle">CoITB Certifications</p>
                <li>CoITB Certified Javascript Professional Exam</li>
                <li>CoITB Certified React Developer Exam</li>
                <li>CoITB Certified MySQL Exam</li>
                <li>CoITB Certified HTML & CSS Exam</li>
              </ul>
            </div>
            <div className="cred-card">
              <h3 className="listTitle">Skills</h3>
              <ul className="list">
                <p className="eyebrow listTitle">Code</p>
                <li> MySQL</li>
                <li> React</li>
                <li> CSS</li>
                <li>Node.js</li>
                <p className="eyebrow listTitle">Design</p>
                <li> Framer</li>
                <li> Figma</li>
                <li> Wireframing</li>
                <li> Responsive layouts</li>
                <li> Reusable components</li>
                <li> Mobile-first Design</li>
                <p className="eyebrow listTitle">Other</p>
                <li> APIs</li>
                <li> Local storage</li>
                <li> Server-side logic</li>
                <li> AWS & Azure</li>
              </ul>
            </div>
            <div className="cred-card">
              <h3 className="listTitle">Education</h3>
              <ul className="list">
                <p className="eyebrow listTitle">Courses</p>
                <li>Javascript Professional Developer Course</li>
                <li>CIW Javascript Specialist Course</li>
                <li>Mysql Backend Developer Course</li>
                <li>HTML + CSS Developer Course</li>
                <li>React Developer Course</li>
                <p className="eyebrow listTitle">College Education</p>
                <li>AS Information Technology | SNHU</li> 
              </ul>
            </div>
          </div>
      </section>

      <div>
        Testing 123 Testing
      </div>


      
      {/* Contact Section */}
      <section id="contact" className="section-container contact-section">
        <div className="contact-card">
          <h2>Let’s build something <b className="highlight">together.</b></h2>
          <p>
            I’m growing my skills through real projects and looking for opportunities to apply them in practical environments.
          </p>
          <div className="contact-buttons">
            <a className="email-button" href="mailto:ojoe.mdc@gmail.com">Email Me</a>
            <a className="linkedin-button" href="https://www.linkedin.com/in/osceola-martin-del-campo-0ab1b6328">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {


  ///////////////
  /* API Stuff */
  ///////////////
  const API = "https://26kaqiv1q8.execute-api.us-east-1.amazonaws.com/prod";
  
  // GET
  async function fetchProjects() {
    const res = await fetch(`${API}/projects`);
    const data = await res.json();
    setProjects(data);
  }
  
  ////////////
  // DELETE //
  ////////////
  async function deleteProject(projectID) {
    await fetch(`${API}/projects/${projectID}`, {
      method: "DELETE",
    });
  
    fetchProjects(); // Refresh project list after deleting project
  }

    // POST
  async function addProject(project) {
    await fetch(`${API}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    
    fetchProjects();
  }

    //EDIT
    async function editProject(projectID, updatedProject) {
      await fetch(`${API}/projects/${projectID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });
      
      setEditingProject(null);
      fetchProjects();
    }
  

useEffect(() => {fetchProjects()}, []); // Fetch projects on initial load

const [projects, setProjects] = useState([]);
const [editingProject, setEditingProject] = useState(null);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home projects={projects} setProjects={setProjects} deleteProject={deleteProject} setEditingProject={setEditingProject} editProject={editProject} />} />
        <Route path="/admin" element={<Home isAdmin={true} projects={projects} setProjects={setProjects} deleteProject={deleteProject} addProject={addProject} setEditingProject={setEditingProject} editingProject={editingProject} editProject={editProject} />} />
        
      </Routes>
    </HashRouter>
      
  );
}

export default App;
