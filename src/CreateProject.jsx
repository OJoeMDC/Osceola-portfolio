import { useState } from "react";
import { useEffect } from "react";
import "./CreateProject.css";

export default function CreateProject({ addProject, editProject, editingProject, setEditingProject }) {
  const [showForm, setShowForm] = useState(false);


// Add/remove class to body to prevent background scroll when modal is open
  useEffect(() => {
  if (showForm) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  // Cleanup function to ensure class is removed if component unmounts while modal is open
  return () => {
    document.body.classList.remove("modal-open");
  };
}, [showForm]);


useEffect(() => {
  if (editingProject) {
    setFormData({
    title: editingProject.title || "",
    description: editingProject.description ||  "",
    progress: editingProject.progress || "",
    skills: editingProject.skills || [],
    type: editingProject.type || "",
    liveDemo: editingProject.liveDemo || "",
    github: editingProject.github || "",
    });

    console.log("Editing project:", editingProject);
    console.log("Loaded skills:", editingProject.skills);
    setShowForm(true);
  }
}, [editingProject]);


////////////////
/* Form Stuff */
////////////////

// Form fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    progress: "",
    skills: [],
    type: "",
    liveDemo: "",
    github: "",
  });

  // Handle input changes
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const projectData = {
      title: formData.title,
      description: formData.description,
      progress: formData.progress,
      skills: formData.skills,
      type: formData.type,
      liveDemo: formData.liveDemo,
      github: formData.github,
    };


    if (editingProject) {
        editProject(editingProject.id, projectData);
      } else {
      addProject(projectData);
    }

    setFormData({
      title: "",
      description: "",
      progress: "",
      skills: [],
      type: "",
      liveDemo: "",
      github: "",
    });

    setShowForm(false);
    if (editingProject) {
      setEditingProject(null);
    }
  }


// List of skills for checkbox options
  const skillsList = [
  "React",
  "JavaScript",
  "CSS",
  "AWS",
  "DynamoDB",
  "Lambda",
  "API Gateway",
];

// Handle skill checkbox toggle
  function handleSkillToggle(skill) {
  if (formData.skills.includes(skill)) {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  } else {
    setFormData({
      ...formData,
      skills: [...formData.skills, skill],
    });
  }
}



///////////////
/* Rendering */
///////////////

// Render the button and modal form
  return (
    <>
    <button onClick={() => setShowForm(true)}>
      Create New Project
    </button>

    {showForm && (
      <div className="modal-overlay" onClick={() => setShowForm(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="formTitle">
            <h2>
              {editingProject ? `Editing Project: ${editingProject.title}` : "Create New Project"}
            </h2>
            <button onClick={() => {setShowForm(false); setEditingProject(false);} }>X</button>
          </div>
          
          {/*Form fields for project creation*/}
          <form onSubmit={handleSubmit}>
            <input
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            />

            {/* Textarea for project description */}
            <textarea
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
            />

              <input
                name="progress"
                type="number"
                min="0"
                max="100"
                placeholder="Progress %"
                value={formData.progress}
                onChange={handleChange}
              />


              <p>Select Skills:</p>
              <div className="skills-container">

                {skillsList.map((skill) => (
                  <label key={skill} className={formData.skills.includes(skill) ? "selected" : ""}>
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                    {skill}
                  </label>
                ))}
              </div>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
              <option value="">Select Type</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="Cloud">Cloud</option>
              <option value="DevOps">DevOps</option>
              <option value="Design">Design</option>
            </select>

            <input
              name="liveDemo"
              placeholder="Live Demo URL"
              value={formData.liveDemo}
              onChange={handleChange}
            />

            <input
              name="github"
              placeholder="GitHub Repository URL"
              value={formData.github}
              onChange={handleChange}
            />

            <button type="submit">{editingProject ? "Submit" : "Create Project"}</button>
          </form>
        </div>
      </div>
    )}
    </>
  );
}