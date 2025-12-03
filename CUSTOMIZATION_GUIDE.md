# Customization Guide

This guide will help you quickly customize your portfolio website.

## Quick Start - 5 Minute Setup

### Step 1: Update Your Personal Information

Open `src/data/portfolioData.js` and update the `personal` section:

```javascript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  tagline: "Your tagline or motto",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  avatar: "URL_TO_YOUR_IMAGE",
}
```

### Step 2: Update Social Links

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourwebsite.com",
}
```

### Step 3: Update GitHub Pages Configuration

In `package.json`, line 7:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME"
```

In `vite.config.js`, line 6:
```javascript
base: '/REPOSITORY_NAME/'
```

### Step 4: Deploy!

```bash
npm install
npm run dev  # Test locally
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

## Detailed Customization

### Adding Your Photo

1. Option 1: Use a hosting service like [Imgur](https://imgur.com/) or [Cloudinary](https://cloudinary.com/)
2. Option 2: Add image to `public/` folder and reference as `/yourimage.jpg`
3. Update the URL in `portfolioData.js`

### Modifying Skills

Add or remove skills by editing the `skills.categories` array:

```javascript
{
  name: "Category Name",
  items: [
    { name: "Skill Name", level: 85 },  // level is 0-100
  ]
}
```

### Adding Projects

```javascript
{
  name: "Project Name",
  description: "Brief description",
  technologies: ["React", "Node.js"],
  github: "https://github.com/user/repo",
  demo: "https://demo-url.com",
  image: "https://image-url.com"
}
```

### Modifying Colors

Edit `src/styles/index.css`:

```css
:root {
  --color-primary: #3b82f6;      /* Main brand color */
  --color-secondary: #8b5cf6;    /* Secondary accent */
  --color-accent: #06b6d4;       /* Additional accent */
}
```

### Removing Sections

In `src/App.jsx`, simply comment out or delete sections you don't want:

```javascript
// <Education />  // Comment out to hide
```

### Adding Custom Sections

1. Create a new component folder: `src/components/YourSection/`
2. Create `YourSection.jsx` and `YourSection.css`
3. Import and add to `App.jsx`

## Image Recommendations

- **Avatar/Profile Photo**: 200x200px to 400x400px, square format
- **About Section Image**: 400x300px or similar landscape format
- **Project Images**: 400x250px, landscape format
- **Format**: JPG or PNG, optimized for web (< 200KB each)

## Free Image Resources

- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://pexels.com/) - Free stock photos
- [Placeholder.com](https://placeholder.com/) - Temporary placeholders (already used in template)

## Testing Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your changes.

## Common Issues

### Issue: Site shows 404 on GitHub Pages

**Solution**: Make sure:
1. GitHub Pages is enabled in repository settings
2. `base` in `vite.config.js` matches your repository name
3. `homepage` in `package.json` is correct

### Issue: Images not loading

**Solution**: 
- Use full URLs for external images
- For local images, place in `public/` folder and reference as `/image.jpg`

### Issue: Form not submitting

**Solution**: The contact form needs a backend service. See README.md for integration options (Formspree, EmailJS, etc.)

## Deployment Checklist

- [ ] Updated personal information
- [ ] Added your photos
- [ ] Updated social links
- [ ] Customized skills section
- [ ] Added your projects
- [ ] Updated experience section
- [ ] Updated education section
- [ ] Changed colors (optional)
- [ ] Updated GitHub Pages configuration
- [ ] Tested locally
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages in repository settings

## Need Help?

1. Check the component files - they're well-documented
2. Review the README.md
3. Look at the example data in portfolioData.js
4. Open an issue on GitHub

Happy coding! 🚀

