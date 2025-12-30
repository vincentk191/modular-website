-- Portfolio Database Schema
-- Run this file to create all necessary tables

-- Personal Information Table
CREATE TABLE IF NOT EXISTS personal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    tagline TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    location VARCHAR(255),
    avatar TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Social Links Table
CREATE TABLE IF NOT EXISTS social_links (
    id SERIAL PRIMARY KEY,
    personal_id INTEGER REFERENCES personal(id) ON DELETE CASCADE,
    github TEXT,
    linkedin TEXT,
    twitter TEXT,
    portfolio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills Categories Table
CREATE TABLE IF NOT EXISTS skill_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES skill_categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    level INTEGER CHECK (level >= 0 AND level <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience Table
CREATE TABLE IF NOT EXISTS experience (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    duration VARCHAR(100),
    location VARCHAR(255),
    description TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Education Table
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255),
    field VARCHAR(255),
    duration VARCHAR(100),
    description TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    technologies TEXT[],
    github TEXT,
    demo TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- About Section Table
CREATE TABLE IF NOT EXISTS about (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) DEFAULT 'About Me',
    description TEXT[],
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category_id);
CREATE INDEX IF NOT EXISTS idx_social_personal ON social_links(personal_id);
CREATE INDEX IF NOT EXISTS idx_projects_created ON projects(created_at DESC);

-- Insert default skill categories
INSERT INTO skill_categories (name) VALUES 
    ('Frontend'),
    ('Backend'),
    ('Tools & Others')
ON CONFLICT (name) DO NOTHING;




