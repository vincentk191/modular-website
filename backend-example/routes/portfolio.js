const express = require('express');
const router = express.Router();
const pool = require('../database/db');

/**
 * GET /api/portfolio
 * Get all portfolio data
 */
router.get('/', async (req, res) => {
  try {
    // Fetch all data from different tables
    const personalResult = await pool.query('SELECT * FROM personal ORDER BY id DESC LIMIT 1');
    const socialResult = await pool.query('SELECT * FROM social_links ORDER BY id DESC LIMIT 1');
    const aboutResult = await pool.query('SELECT * FROM about ORDER BY id DESC LIMIT 1');
    
    // Fetch skills with categories
    const skillCategoriesResult = await pool.query(`
      SELECT sc.id, sc.name, 
             COALESCE(json_agg(
               json_build_object('name', s.name, 'level', s.level)
               ORDER BY s.id
             ) FILTER (WHERE s.name IS NOT NULL), '[]'::json) as items
      FROM skill_categories sc
      LEFT JOIN skills s ON s.category_id = sc.id
      GROUP BY sc.id, sc.name
      ORDER BY sc.id
    `);
    
    const experienceResult = await pool.query('SELECT * FROM experience ORDER BY id DESC');
    const educationResult = await pool.query('SELECT * FROM education ORDER BY id DESC');
    const projectsResult = await pool.query('SELECT * FROM projects ORDER BY id DESC');

    // Format response to match frontend structure
    const response = {
      personal: personalResult.rows[0] || {},
      social: socialResult.rows[0] || {},
      about: aboutResult.rows[0] || {},
      skills: {
        title: "Skills & Technologies",
        categories: skillCategoriesResult.rows.map(cat => ({
          name: cat.name,
          items: cat.items
        }))
      },
      experience: {
        title: "Experience",
        items: experienceResult.rows
      },
      education: {
        title: "Education",
        items: educationResult.rows
      },
      projects: {
        title: "Featured Projects",
        items: projectsResult.rows
      },
      contact: {
        title: "Get In Touch",
        description: "I'm always interested in hearing about new opportunities and projects. Feel free to reach out!",
        buttonText: "Send Message"
      }
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ 
      error: 'Failed to fetch portfolio data',
      message: error.message 
    });
  }
});

/**
 * GET /api/portfolio/personal
 * Get personal information
 */
router.get('/personal', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personal ORDER BY id DESC LIMIT 1');
    res.json(result.rows[0] || {});
  } catch (error) {
    console.error('Error fetching personal data:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/portfolio/projects
 * Get all projects
 */
router.get('/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/portfolio/projects/:id
 * Get single project
 */
router.get('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/portfolio/projects
 * Create new project
 */
router.post('/projects', async (req, res) => {
  try {
    const { name, description, technologies, github, demo, image } = req.body;
    
    // Basic validation
    if (!name) {
      return res.status(400).json({ error: 'Project name is required' });
    }

    const result = await pool.query(
      'INSERT INTO projects (name, description, technologies, github, demo, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, description, technologies || [], github, demo, image]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/portfolio/projects/:id
 * Update project
 */
router.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, technologies, github, demo, image } = req.body;

    const result = await pool.query(
      'UPDATE projects SET name = $1, description = $2, technologies = $3, github = $4, demo = $5, image = $6, updated_at = CURRENT_TIMESTAMP WHERE id = $7 RETURNING *',
      [name, description, technologies, github, demo, image, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/portfolio/projects/:id
 * Delete project
 */
router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully', project: result.rows[0] });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;




