# Database Integration Guide

This guide explains how to connect your React portfolio to an SQL database, both locally and in hosted environments.

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Options for Local Development](#options-for-local-development)
3. [Options for Hosted Deployment](#options-for-hosted-deployment)
4. [Implementation Steps](#implementation-steps)
5. [Example Backend Setup](#example-backend-setup)
6. [Frontend Integration](#frontend-integration)
7. [Deployment Scenarios](#deployment-scenarios)

---

## 🏗️ Architecture Overview

### Current Architecture (Static)
```
React App (Frontend)
    ↓
portfolioData.js (Static file)
    ↓
Components render data
```

### New Architecture (With Database)
```
React App (Frontend)
    ↓
API Calls (fetch/axios)
    ↓
Backend API (Node.js/Express)
    ↓
SQL Database (PostgreSQL/MySQL/SQLite)
```

### What Changes?

1. **Backend API**: New server to handle database operations
2. **Database**: SQL database to store portfolio data
3. **Frontend**: Modify to fetch data from API instead of static file
4. **Deployment**: Need to host both frontend and backend

---

## 💻 Options for Local Development

### Option 1: SQLite (Easiest - No Server Setup)

**Pros:**
- ✅ No database server needed
- ✅ File-based database
- ✅ Perfect for development
- ✅ Easy to set up

**Cons:**
- ❌ Not ideal for production (concurrent writes)
- ❌ Limited scalability

**Best For:** Local development, small projects

**Setup:**
```bash
npm install sqlite3
# or
npm install better-sqlite3
```

### Option 2: PostgreSQL (Recommended for Production)

**Pros:**
- ✅ Industry standard
- ✅ Excellent performance
- ✅ Great for production
- ✅ Free and open source

**Cons:**
- ❌ Requires database server installation
- ❌ More setup complexity

**Best For:** Production applications, scalable projects

**Setup:**
- Download from [postgresql.org](https://www.postgresql.org/download/)
- Or use Docker: `docker run -d -p 5432:5432 postgres`

### Option 3: MySQL

**Pros:**
- ✅ Very popular
- ✅ Good performance
- ✅ Easy to use

**Cons:**
- ❌ Requires database server
- ❌ Some features require paid version

**Best For:** Traditional web applications

**Setup:**
- Download from [mysql.com](https://dev.mysql.com/downloads/)
- Or use Docker: `docker run -d -p 3306:3306 mysql`

### Option 4: Docker Compose (All-in-One)

**Pros:**
- ✅ Everything in one command
- ✅ Consistent environment
- ✅ Easy to share

**Best For:** Team development, consistent environments

---

## 🌐 Options for Hosted Deployment

### Free/Cheap Hosting Options

#### 1. **Supabase** (Recommended - Free Tier)
- ✅ Free PostgreSQL database
- ✅ Built-in REST API
- ✅ Authentication included
- ✅ Real-time subscriptions
- ✅ 500MB database, 2GB bandwidth free

**Setup:** [supabase.com](https://supabase.com)

#### 2. **Railway**
- ✅ Free tier available
- ✅ PostgreSQL included
- ✅ Easy deployment
- ✅ Auto-deploy from GitHub

**Setup:** [railway.app](https://railway.app)

#### 3. **Render**
- ✅ Free PostgreSQL database
- ✅ Free backend hosting
- ✅ Auto-deploy from GitHub
- ✅ 750 hours/month free

**Setup:** [render.com](https://render.com)

#### 4. **PlanetScale** (MySQL)
- ✅ Free MySQL database
- ✅ Serverless
- ✅ Branching (like Git)
- ✅ 5GB storage free

**Setup:** [planetscale.com](https://planetscale.com)

#### 5. **Neon** (PostgreSQL)
- ✅ Serverless PostgreSQL
- ✅ Free tier available
- ✅ Branching support
- ✅ Auto-scaling

**Setup:** [neon.tech](https://neon.tech)

### Paid Hosting Options

- **AWS RDS**: Enterprise-grade, pay-as-you-go
- **Google Cloud SQL**: Managed database service
- **Azure Database**: Microsoft's managed service
- **Heroku Postgres**: Easy setup, $5/month starter

---

## 🚀 Implementation Steps

### Step 1: Choose Your Stack

**Recommended Stack:**
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (or SQLite for dev)
- **ORM**: Prisma or Sequelize (optional, but recommended)

### Step 2: Create Backend API

Create a new folder for your backend:

```
modular-website/
├── frontend/          # Your existing React app
└── backend/           # New backend API
    ├── server.js
    ├── routes/
    ├── models/
    └── database/
```

### Step 3: Set Up Database Schema

Design your database tables based on `portfolioData.js` structure.

### Step 4: Create API Endpoints

Create REST endpoints:
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/personal` - Get personal info
- `GET /api/portfolio/projects` - Get projects
- `POST /api/portfolio/projects` - Add new project
- `PUT /api/portfolio/projects/:id` - Update project
- `DELETE /api/portfolio/projects/:id` - Delete project

### Step 5: Update Frontend

Replace static imports with API calls.

---

## 💻 Example Backend Setup

### Option A: Node.js + Express + PostgreSQL (Full Example)

#### 1. Create Backend Directory

```bash
mkdir backend
cd backend
npm init -y
```

#### 2. Install Dependencies

```bash
npm install express cors dotenv
npm install pg                    # PostgreSQL client
# OR
npm install mysql2               # MySQL client
# OR
npm install better-sqlite3       # SQLite

npm install --save-dev nodemon   # Auto-restart on changes
```

#### 3. Create Database Schema (PostgreSQL)

**File: `backend/database/schema.sql`**

```sql
-- Create database
CREATE DATABASE portfolio_db;

-- Connect to database
\c portfolio_db;

-- Personal Information Table
CREATE TABLE personal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    tagline TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    location VARCHAR(255),
    avatar TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Social Links Table
CREATE TABLE social_links (
    id SERIAL PRIMARY KEY,
    personal_id INTEGER REFERENCES personal(id),
    github TEXT,
    linkedin TEXT,
    twitter TEXT,
    portfolio TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills Categories Table
CREATE TABLE skill_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES skill_categories(id),
    name VARCHAR(255) NOT NULL,
    level INTEGER CHECK (level >= 0 AND level <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience Table
CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    duration VARCHAR(100),
    location VARCHAR(255),
    description TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Education Table
CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255),
    field VARCHAR(255),
    duration VARCHAR(100),
    description TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    technologies TEXT[],
    github TEXT,
    demo TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- About Section Table
CREATE TABLE about (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) DEFAULT 'About Me',
    description TEXT[],
    image TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 4. Create Database Connection

**File: `backend/database/db.js`**

```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_db',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Test connection
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err);
});

module.exports = pool;
```

#### 5. Create API Routes

**File: `backend/routes/portfolio.js`**

```javascript
const express = require('express');
const router = express.Router();
const pool = require('../database/db');

// GET all portfolio data
router.get('/', async (req, res) => {
  try {
    // Fetch all data from different tables
    const personal = await pool.query('SELECT * FROM personal ORDER BY id DESC LIMIT 1');
    const social = await pool.query('SELECT * FROM social_links ORDER BY id DESC LIMIT 1');
    const about = await pool.query('SELECT * FROM about ORDER BY id DESC LIMIT 1');
    
    // Fetch skills with categories
    const skillCategories = await pool.query(`
      SELECT sc.*, 
             json_agg(json_build_object('name', s.name, 'level', s.level)) as items
      FROM skill_categories sc
      LEFT JOIN skills s ON s.category_id = sc.id
      GROUP BY sc.id
      ORDER BY sc.id
    `);
    
    const experience = await pool.query('SELECT * FROM experience ORDER BY id DESC');
    const education = await pool.query('SELECT * FROM education ORDER BY id DESC');
    const projects = await pool.query('SELECT * FROM projects ORDER BY id DESC');

    res.json({
      personal: personal.rows[0] || {},
      social: social.rows[0] || {},
      about: about.rows[0] || {},
      skills: {
        title: "Skills & Technologies",
        categories: skillCategories.rows.map(cat => ({
          name: cat.name,
          items: cat.items.filter(item => item.name !== null)
        }))
      },
      experience: {
        title: "Experience",
        items: experience.rows
      },
      education: {
        title: "Education",
        items: education.rows
      },
      projects: {
        title: "Featured Projects",
        items: projects.rows
      }
    });
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
});

// GET personal information
router.get('/personal', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personal ORDER BY id DESC LIMIT 1');
    res.json(result.rows[0] || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET projects
router.get('/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new project
router.post('/projects', async (req, res) => {
  try {
    const { name, description, technologies, github, demo, image } = req.body;
    const result = await pool.query(
      'INSERT INTO projects (name, description, technologies, github, demo, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, description, technologies, github, demo, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update project
router.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, technologies, github, demo, image } = req.body;
    const result = await pool.query(
      'UPDATE projects SET name = $1, description = $2, technologies = $3, github = $4, demo = $5, image = $6 WHERE id = $7 RETURNING *',
      [name, description, technologies, github, demo, image, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE project
router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

#### 6. Create Main Server File

**File: `backend/server.js`**

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

#### 7. Create Environment File

**File: `backend/.env`**

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=portfolio_db
DB_PASSWORD=your_password
DB_PORT=5432

# Server Configuration
PORT=5000
NODE_ENV=development
```

#### 8. Update package.json

**File: `backend/package.json`**

```json
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### Option B: SQLite (Simpler for Development)

**File: `backend/database/db.js` (SQLite version)**

```javascript
const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'portfolio.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS personal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    title TEXT,
    tagline TEXT,
    email TEXT,
    phone TEXT,
    location TEXT,
    avatar TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    technologies TEXT,
    github TEXT,
    demo TEXT,
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

module.exports = db;
```

---

## 🎨 Frontend Integration

### Step 1: Install Axios (or use fetch)

```bash
cd frontend  # or root if frontend is in root
npm install axios
```

### Step 2: Create API Service

**File: `src/services/api.js`**

```javascript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Portfolio API
export const portfolioAPI = {
  // Get all portfolio data
  getAll: async () => {
    const response = await api.get('/portfolio');
    return response.data;
  },

  // Get personal info
  getPersonal: async () => {
    const response = await api.get('/portfolio/personal');
    return response.data;
  },

  // Get projects
  getProjects: async () => {
    const response = await api.get('/portfolio/projects');
    return response.data;
  },

  // Add project
  addProject: async (project) => {
    const response = await api.post('/portfolio/projects', project);
    return response.data;
  },

  // Update project
  updateProject: async (id, project) => {
    const response = await api.put(`/portfolio/projects/${id}`, project);
    return response.data;
  },

  // Delete project
  deleteProject: async (id) => {
    const response = await api.delete(`/portfolio/projects/${id}`);
    return response.data;
  },
};

export default api;
```

### Step 3: Create Data Context/Hook

**File: `src/hooks/usePortfolio.js`**

```javascript
import { useState, useEffect } from 'react';
import { portfolioAPI } from '../services/api';

export const usePortfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await portfolioAPI.getAll();
        setPortfolioData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError(err.message);
        // Fallback to static data if API fails
        // You can import portfolioData from the static file as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { portfolioData, loading, error };
};
```

### Step 4: Update App.jsx

**File: `src/App.jsx` (Updated)**

```javascript
import React, { useState } from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import Header from './components/Header/Header';
// ... other imports

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { portfolioData, loading, error } = usePortfolio();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (loading) {
    return (
      <div className="app loading">
        <div className="loader">Loading portfolio...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app error">
        <div className="error-message">
          <h2>Error loading portfolio</h2>
          <p>{error}</p>
          <p>Please check your backend connection.</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return null;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Experience data={portfolioData} />
        <Education data={portfolioData} />
        <Projects data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
      <ScrollToTop />
    </div>
  );
}

export default App;
```

### Step 5: Update Components to Accept Props

**Example: `src/components/Projects/Projects.jsx`**

```javascript
import React from 'react';
import './Projects.scss';

const Projects = ({ data }) => {
  if (!data || !data.projects) {
    return null;
  }

  const { projects } = data;

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">{projects.title}</h2>
        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <div key={project.id || index} className="project-card">
              {/* Project card content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

### Step 6: Create Environment Variables

**File: `.env` (in frontend root)**

```env
VITE_API_URL=http://localhost:5000/api
```

**For production:**
```env
VITE_API_URL=https://your-backend-api.com/api
```

---

## 🚢 Deployment Scenarios

### Scenario 1: Local Development

1. **Run PostgreSQL locally** (or use SQLite)
2. **Start backend**: `cd backend && npm run dev`
3. **Start frontend**: `npm run dev`
4. **Access**: Frontend on `http://localhost:5173`, Backend on `http://localhost:5000`

### Scenario 2: Frontend on GitHub Pages, Backend on Render/Railway

1. **Deploy backend** to Render/Railway
2. **Get backend URL**: `https://your-backend.onrender.com`
3. **Update frontend `.env`**: `VITE_API_URL=https://your-backend.onrender.com/api`
4. **Build and deploy frontend** to GitHub Pages
5. **Configure CORS** on backend to allow GitHub Pages domain

### Scenario 3: Both on Same Platform (Vercel/Netlify)

**Vercel:**
- Deploy frontend as Vercel project
- Deploy backend as Vercel serverless functions
- Use Vercel Postgres for database

**Netlify:**
- Deploy frontend to Netlify
- Use Netlify Functions for API
- Connect to external database (Supabase, etc.)

### Scenario 4: Full Stack on Railway/Render

1. **Create two services**:
   - Frontend service (build React app)
   - Backend service (Node.js API)
2. **Add PostgreSQL** service
3. **Connect services** using environment variables
4. **Auto-deploy** from GitHub

---

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit `.env` files
- Use environment variables for sensitive data
- Use different credentials for dev/prod

### 2. CORS Configuration
```javascript
// backend/server.js
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));
```

### 3. Input Validation
- Validate all inputs on backend
- Sanitize database queries (use parameterized queries)
- Consider using a validation library (Joi, Zod)

### 4. Authentication (If Adding Admin Features)
- Add JWT authentication for admin routes
- Protect write operations (POST, PUT, DELETE)
- Keep read operations (GET) public

---

## 📝 Migration Script

**File: `backend/scripts/migrate.js`**

Script to migrate existing `portfolioData.js` to database:

```javascript
const pool = require('../database/db');
const portfolioData = require('../../frontend/src/data/portfolioData');

async function migrate() {
  try {
    // Insert personal data
    await pool.query(
      'INSERT INTO personal (name, title, tagline, email, phone, location, avatar) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        portfolioData.personal.name,
        portfolioData.personal.title,
        portfolioData.personal.tagline,
        portfolioData.personal.email,
        portfolioData.personal.phone,
        portfolioData.personal.location,
        portfolioData.personal.avatar,
      ]
    );

    // Insert projects
    for (const project of portfolioData.projects.items) {
      await pool.query(
        'INSERT INTO projects (name, description, technologies, github, demo, image) VALUES ($1, $2, $3, $4, $5, $6)',
        [
          project.name,
          project.description,
          project.technologies,
          project.github,
          project.demo,
          project.image,
        ]
      );
    }

    console.log('✅ Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await pool.end();
  }
}

migrate();
```

Run with: `node backend/scripts/migrate.js`

---

## 🎯 Quick Start Checklist

- [ ] Choose database (SQLite for dev, PostgreSQL for prod)
- [ ] Set up database (install or use cloud)
- [ ] Create backend folder and install dependencies
- [ ] Create database schema
- [ ] Set up database connection
- [ ] Create API routes
- [ ] Test API endpoints (use Postman or curl)
- [ ] Install axios in frontend
- [ ] Create API service in frontend
- [ ] Create usePortfolio hook
- [ ] Update App.jsx to use API
- [ ] Update components to accept data as props
- [ ] Test locally
- [ ] Deploy backend
- [ ] Update frontend environment variables
- [ ] Deploy frontend
- [ ] Test production deployment

---

## 📚 Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Supabase Getting Started](https://supabase.com/docs/guides/getting-started)
- [Render Documentation](https://render.com/docs)

---

## 💡 Next Steps

1. **Start Simple**: Use SQLite for local development
2. **Test Locally**: Get everything working on your machine
3. **Choose Hosting**: Pick a free tier (Supabase, Railway, Render)
4. **Deploy Backend**: Get your API live
5. **Update Frontend**: Point to production API
6. **Deploy Frontend**: Update and redeploy

---

**Need Help?** Check the troubleshooting section or review the example code in this guide.




