# Osceola Martin del Campo — Portfolio

<!-- Edited by OWL 🤖 -->

A personal portfolio website showcasing projects, skills, and experience as a full-stack developer.

## Live Demo

[https://OsceolaDev.com](https://OsceolaDev.com)

## Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router (HashRouter)
- **Styling:** CSS (custom)
- **Deployment:** GitHub Pages
- **Backend API:** AWS API Gateway + Lambda + DynamoDB

## Features

- **Hero section** with quick-nav buttons
- **Projects board** — fetches live data from a serverless AWS backend
- **Admin panel** (`/admin`) — create, edit, and delete projects through a modal form
- **Qualifications section** — certifications, skills, and education
- **Contact section** with email and LinkedIn links
- **Mobile-responsive** layout
- **BackendProject Deployment** 

## Project Structure

```
Osceola-portfolio/
├── public/                  # Static assets
├── src/
│   ├── App.jsx              # Main app — routing, API calls, state
│   ├── App.css              # Global styles
│   ├── CreateProject.jsx    # Admin modal form for projects
│   ├── CreateProject.css    # Modal styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Base/reset styles
│   └── assets/              # Images (hero, icons)
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## API

The portfolio pulls project data from a serverless AWS backend:

`GET /projects` — Fetch all projects
`POST /projects` — Create a new project
`PUT /projects/:id` — Update a project
`DELETE /projects/:id` — Delete a project

## Getting Started

```bash
git clone https://github.com/OJoeMDC/Osceola-portfolio.git
cd Osceola-portfolio
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

## Deployment

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## About

Built by **Osceola Martin del Campo** — a full-stack developer focused on building scalable web applications and cloud-based solutions with React, Node.js, AWS, and more.

This project was built with the assistance of **ChatGPT**, which helped with code development, debugging, and project setup.

- Email: ojoe.mdc@gmail.com
- LinkedIn: [Osceola Martin del Campo](https://www.linkedin.com/in/osceola-martin-del-campo-0ab1b6328)
