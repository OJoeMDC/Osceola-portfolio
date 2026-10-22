import CreateProject from "./CreateProject";
import "./Landing.css";
import Projects from '../components/Projects.jsx';
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Contact from "../components/Contact.jsx";

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
    <main id= 'top' className="portfolio-page">

      <Hero 
        categories={categories}
        projects={projects}
      />

      {/* Projects Section */}
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
      <Skills />


      
      {/* Contact Section */}
      <Contact />


    </main>
  )
}