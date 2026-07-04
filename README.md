# Project Hub

A centralized project management system for tracking personal projects, work projects, tasks, skills, and resources in one unified dashboard.

## Overview

**Project Hub** is your command center for managing everything across your professional and personal life. Organize projects hierarchically, break them into step-by-step tasks, track skills you're developing, and curate resources—all in a single, intuitive interface.

## Features

- **Project Management** — Create and organize projects (personal, work, side projects)
- **Task Management** — Break projects into actionable, step-by-step tasks with status tracking
- **Skills Tracking** — Log skills you're learning and monitor proficiency
- **Resource Library** — Save and organize articles, tools, documentation, and references
- **Dashboard** — At-a-glance view of active projects, pending tasks, and progress metrics
- **Filtering & Search** — Find projects and tasks by status, priority, or keyword
- **Progress Visualization** — Track completion rates per project

## Tech Stack

### Frontend
- **Lit.js** — Lightweight web components framework
- **Vite** — Next-gen build tool
- **pnpm** — Fast, disk-space efficient package manager
- **JavaScript (ES2024)** — Vanilla JS with modern standards

### Backend
- **Spring Boot 3.3.0** — Java REST API framework
- **Gradle** — Build automation
- **Java 17** — JVM runtime
- **Spring Web** — RESTful web services

## Project Structure

```
project-hub/
├── frontend/                    # Frontend (Lit.js + Vite)
│   ├── src/
│   │   ├── components/        # Lit web components
│   │   └── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── vite.config.js
│   └── .nvmrc                 # Node version lock
│
└── backend/               # Backend (Spring Boot)
    ├── src/
    │   ├── main/java/com/example/
    │   │   ├── Application.java
    │   │   └── controller/
    │   └── test/
    ├── build.gradle.kts
    └── gradle/
```

## Setup

### Prerequisites
- **Node 18+** (check `.nvmrc` in frontend)
- **Java 17+**
- **pnpm** (install via `npm install -g pnpm` or `brew install pnpm`)
- **Gradle** (bundled with `gradlew`, but `brew install gradle` works too)

### Frontend Setup

```bash
cd frontend
pnpm install
pnpm dev
```

Runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
./gradlew bootRun
```

Runs on `http://localhost:8080`

## Running the Full Stack

**Terminal 1 — Frontend:**
```bash
cd frontend && pnpm dev
```

**Terminal 2 — Backend:**
```bash
cd backend && ./gradlew bootRun
```

Visit `http://localhost:5173` to access the application.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create a new project |
| GET | `/api/projects/:id` | Get project details |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |
| GET | `/api/tasks` | List all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task status |
| GET | `/api/skills` | List skills |
| POST | `/api/resources` | Save a resource |

*(Full API documentation coming soon)*

## Development

### Adding a Lit Component

```javascript
// src/components/my-component.js
import { LitElement, html, css } from 'lit';

export class MyComponent extends LitElement {
  static styles = css`
    :host { display: block; }
  `;

  render() {
    return html`<p>Hello World</p>`;
  }
}

customElements.define('my-component', MyComponent);
```

### Adding a Spring Boot Controller

```java
// src/main/java/com/example/controller/ProjectController.java
package com.example.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    
    @GetMapping
    public String getAllProjects() {
        return "Projects list";
    }
}
```

## Build & Deploy

### Frontend Build
```bash
cd frontend && pnpm build
# Output: dist/
```

### Backend Build
```bash
cd backend && ./gradlew build
# Output: build/libs/backend-1.0.0.jar
```

## Node & Java Version Management

**Lock Node version:**
```bash
echo "18.17.0" > frontend/.nvmrc
nvm use  # Auto-switches when entering directory
```

**Lock Java version:**
Use IntelliJ's SDK selector or set `JAVA_HOME`:
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
```

## Roadmap

- [ ] Database integration (PostgreSQL / MongoDB)
- [ ] User authentication (OAuth2 / JWT)
- [ ] Project sharing & collaboration
- [ ] Mobile app (React Native)
- [ ] AI-powered task suggestions
- [ ] Integration with external tools (GitHub, Notion, Slack)
- [ ] Advanced analytics & reporting

## Contributing

Contributions welcome. Please open an issue or PR with your changes.

## License

MIT

---

**Status:** Early Development | **Last Updated:** July 2026
