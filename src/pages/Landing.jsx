import CreateProject from "./CreateProject";
import "./Landing.css";
import Projects from '../components/Projects.jsx';

const categories = ["Front-End", "Back-End", "Full-Stack"];

export default function Landing({ isAdmin, projects, setProjects, deleteProject, addProject, setEditingProject, editingProject, editProject, activeCard, setActiveCard, reorderProjects, originalList }) {
  const onDrop = async (position) => {
        originalList.current= [...projects];
        console.log(`${activeCard} is going to be placed at ${position}`)

        if(activeCard == null || activeCard === undefined) return;

        const projectToMove = projects[activeCard];
        console.log(activeCard);
        const updatedProjects = projects.filter((project, index) => index !== activeCard)
        console.log(updatedProjects);

        updatedProjects.splice(position, 0, {
          ...projectToMove
        })

        try {
          setProjects(updatedProjects);
          await reorderProjects(updatedProjects);
          console.log(projects);
          console.log("Projects reordered successfully");
        } catch (err) {
          setProjects(originalList.current);
          console.error("Failed to reorder projects:", err);
        }
    };

  return(
    <main className="portfolio-page">

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




      <Projects 
        CreateProject={CreateProject} 
        isAdmin={isAdmin}
        projects={projects}
        addProject={addProject}
        setProjects={setProjects}
        deleteProject={deleteProject}
        setEditingProject={setEditingProject}
        editingProject={editingProject}
        editProject={editProject}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />



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