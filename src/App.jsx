import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Layout" ;
import Landing from './pages/Landing';

function App() {
const [projects, setProjects] = useState([]);
const [editingProject, setEditingProject] = useState(null);

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
                deleteProject={deleteProject}
                addProject={addProject}
                setEditingProject={setEditingProject}
                editingProject={editingProject}
                editProject={editProject}
              />
            }
          />
          <Route path="/admin" element={<Landing isAdmin={true} projects={projects} setProjects={setProjects} deleteProject={deleteProject} addProject={addProject} setEditingProject={setEditingProject} editingProject={editingProject} editProject={editProject} />} />
        </Route>
        
      </Routes>
    </HashRouter>
      
  );
}

export default App;
