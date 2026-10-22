import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Layout from "./Layout" ;
import Landing from './pages/Landing';

export const API_URL = import.meta.env.VITE_API_URL;

function App() {
  console.log("App rendered");


const [projects, setProjects] = useState([]);
const originalList = useRef([]);
const [activeCard, setActiveCard] = useState(null);
const [editingProject, setEditingProject] = useState(null);

  ///////////////
  /* API Stuff */
  ///////////////
  
  // GET
  async function fetchProjects() {
    try {
      const res = await fetch(`${API_URL}/projects`);
      console.log("Fetching from:", `${API_URL}/projects`);

      if (!res.ok) {
        console.log("Could not retrieve projects", res.status);
        return;
      }

      const data = await res.json();
      data.sort((a,b) => a.projectOrder - b.projectOrder);
      setProjects(data);


      console.log("Recevied data:", data);


  } catch (err) {
    console.error("Fetch Failed:", err);
  }
  }
  
  ////////////
  // DELETE //
  ////////////
  async function deleteProject(projectID) {
    await fetch(`${API_URL}/projects/${projectID}`, {
      method: "DELETE",
    });
  
    fetchProjects(); // Refresh project list after deleting project
  }

    // POST
  async function addProject(project) {
    await fetch(`${API_URL}/projects`, {
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
      await fetch(`${API_URL}/projects/${projectID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });
      
      setEditingProject(null);
      fetchProjects();
    }

    //REORDER PROJECTS
    async function reorderProjects(updatedProjects) {
      const updatedOrder = updatedProjects.map((project, index) => ({
        id: project.id,
        order: index
      }));
      console.log(updatedOrder);
      await fetch(`${API_URL}/projects/reorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      });

      fetchProjects();
    }
  

useEffect(() => {
  console.log("Fetch is running");
   fetchProjects();
  }, []); // Fetch projects on initial load

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Landing
                isAdmin={false}
                projects={projects}
                setProjects={setProjects}
                deleteProject={deleteProject}
                addProject={addProject}
                setEditingProject={setEditingProject}
                editingProject={editingProject}
                editProject={editProject}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                originalList={originalList}
              />
            }
          />
          <Route path="/admin" element={
              <Landing 
                isAdmin={true}
                projects={projects} 
                setProjects={setProjects} 
                deleteProject={deleteProject} 
                addProject={addProject} 
                setEditingProject={setEditingProject} 
                editingProject={editingProject} 
                editProject={editProject}
                reorderProjects={reorderProjects}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                originalList={originalList}
              />
            } 
            />
        </Route>
        
      </Routes>
    </HashRouter>
      
  );
}

export default App;
