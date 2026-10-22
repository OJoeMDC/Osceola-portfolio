import './ProjectCard.css';

export default function ProjectCard({ project, isAdmin, index, setActiveCard, setEditingProject, deleteProject }) {
    return (
                <article 
                    className="project-card" 
                    key={index}
                    draggable
                    onDragStart={() => setActiveCard(index)}
                    onDragEnd={() => setActiveCard(null)}
                    >


                    <div className="project-topline">
                        <div>
                        <p>{project.type}</p>
                        <h3>{project.title}</h3>
                        </div>
                        <span>{Number(project.progress) >= 100 ? "Complete" : "In Progress"}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    

                    <div className='card-footer'>
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
    )
}