import './Projects.css';
import ProjectCard from './ProjectCard.jsx';
import React from 'react';
import DropArea from './DropArea.jsx'

export default function Projects({ CreateProject, isAdmin, projects, addProject, setProjects, deleteProject, setEditingProject, editingProject, editProject, setActiveCard, onDrop }) {


    return (
        <>
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
                    {projects.length === 0 ? (
                        <p>No Projects Found</p>
                    ) : ( 
                        projects.map((project, index) => (
                        <div>
                            <DropArea onDrop={() => onDrop(index)} />
                            <ProjectCard
                                index={index}
                                project={project}
                                isAdmin={isAdmin}
                                setActiveCard={setActiveCard}
                                setEditingProject={setEditingProject}
                                deleteProject={deleteProject}
                            />
                            <DropArea onDrop={() => onDrop(index + 1)} />
                        </div>
                        ))
                    )}
                </div>
            </section>
        </>
    )
}