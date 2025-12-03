# Quick Start Guide

Get your portfolio up and running in 10 minutes!

## 🚀 Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:5173
```

## ✏️ Customize in 3 Steps

### Step 1: Edit Your Info (2 minutes)
Open `src/data/portfolioData.js` and update:
- Your name
- Your title
- Your email
- Your social links

### Step 2: Add Your Photos (3 minutes)
Replace placeholder image URLs with your own:
- Profile photo
- About section image
- Project images

**Tip**: Use https://imgur.com for quick image hosting!

### Step 3: Update Skills & Experience (5 minutes)
In the same `portfolioData.js` file:
- Add/remove skills
- Update experience history
- Add your projects

## 🌐 Deploy to GitHub Pages

### First Time Setup
```bash
# 1. Update package.json line 7
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/modular-website"

# 2. Update vite.config.js line 6
base: '/modular-website/'

# 3. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 4. Enable GitHub Pages
# Go to GitHub repo → Settings → Pages → Source: GitHub Actions
```

### Future Updates
```bash
# Just push to main branch - auto deploys!
git add .
git commit -m "Update content"
git push
```

## 📱 What You Get

✅ **7 Complete Sections**
- Hero/Landing
- About Me
- Skills (with progress bars)
- Work Experience (timeline)
- Education
- Projects (with images)
- Contact

✅ **Built-in Features**
- Dark/Light mode toggle
- Smooth scrolling
- Mobile responsive
- Modern animations
- Professional design

✅ **Easy Maintenance**
- One file to edit (`portfolioData.js`)
- No code changes needed
- Well documented
- Modular structure

## 🎨 Quick Customizations

### Change Colors
Edit `src/styles/index.css`:
```css
--color-primary: #3b82f6;    /* Your main color */
--color-secondary: #8b5cf6;  /* Your accent color */
```

### Remove a Section
Edit `src/App.jsx`, comment out:
```javascript
// <Education />  // Section is now hidden
```

### Add Social Links
Edit `src/data/portfolioData.js`:
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // Add more as needed
}
```

## 🐛 Common Issues

**Blank page?**
- Check browser console for errors
- Verify base URL in vite.config.js

**Images not loading?**
- Use full URLs (https://...)
- Or place in public/ folder

**Can't deploy?**
- Enable GitHub Pages in settings
- Check Actions tab for errors
- Wait 5-10 minutes after first deploy

## 📚 Need More Help?

- **README.md** - Full documentation
- **CUSTOMIZATION_GUIDE.md** - Detailed customization
- **DEPLOYMENT.md** - Deployment options
- **ARCHITECTURE.md** - Technical details

## 🎯 Deployment Checklist

- [ ] `npm install` completed
- [ ] Tested locally with `npm run dev`
- [ ] Updated personal info in portfolioData.js
- [ ] Changed homepage in package.json
- [ ] Changed base in vite.config.js
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Waited for deployment (check Actions tab)
- [ ] Site is live! 🎉

## 💡 Pro Tips

1. **Use Quality Images**: Professional photo makes a big difference
2. **Keep It Updated**: Add new projects as you complete them
3. **Test on Mobile**: Most visitors will be on mobile
4. **Share the Link**: Add to LinkedIn, resume, email signature
5. **Custom Domain**: Consider buying yourdomain.com (optional)

---

**That's it! You now have a professional portfolio website! 🎉**

Share your live site: `https://YOUR_USERNAME.github.io/modular-website`

