# Deployment Guide

Complete guide for deploying your portfolio to GitHub Pages and other platforms.

## GitHub Pages Deployment (Recommended)

### Prerequisites
- GitHub account
- Git installed locally
- Repository created on GitHub

### Step-by-Step Deployment

#### 1. Configure Your Repository

Update `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
```

Update `vite.config.js`:
```javascript
base: '/REPO_NAME/'
```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"

#### 3. Deploy

##### Option A: Automatic Deployment (Recommended)

Push to main branch - automatically deploys:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

##### Option B: Manual Deployment

```bash
npm run deploy
```

#### 4. Verify Deployment

1. Go to Actions tab in your repository
2. Wait for the workflow to complete (green checkmark)
3. Visit your site at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Troubleshooting GitHub Pages

#### Issue: 404 Page Not Found

**Solutions:**
1. Verify `base` in `vite.config.js` matches repository name exactly
2. Check that `homepage` in `package.json` is correct
3. Ensure GitHub Pages is enabled in repository settings
4. Wait 5-10 minutes after first deployment

#### Issue: Blank Page

**Solutions:**
1. Check browser console for errors
2. Verify all paths are relative or use proper base URL
3. Check that build completed successfully in Actions tab

#### Issue: Styles Not Loading

**Solutions:**
1. Clear browser cache
2. Verify CSS files are in dist folder after build
3. Check network tab for 404 errors on CSS files

## Alternative Hosting Platforms

### Netlify

#### Deploy to Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

#### Configuration for Netlify

Update `vite.config.js`:
```javascript
base: '/'  // Root path for Netlify
```

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Benefits:**
- Custom domain support
- Automatic HTTPS
- Form handling without backend
- Faster deployments
- Better analytics

### Vercel

#### Deploy to Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Vite
4. Click "Deploy"

#### Configuration for Vercel

Update `vite.config.js`:
```javascript
base: '/'  // Root path for Vercel
```

Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

**Benefits:**
- Extremely fast deployments
- Automatic HTTPS
- Edge network
- Great performance
- Serverless functions support

### Cloudflare Pages

#### Deploy to Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy

**Benefits:**
- Fast CDN
- Free
- Good analytics
- DDoS protection

## Custom Domain Setup

### For GitHub Pages

1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. Add CNAME file to `public/` folder with your domain:
   ```
   yourdomain.com
   ```
3. In repository Settings → Pages → Custom domain, enter your domain
4. Configure DNS at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   
   Type: A
   Name: @
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### For Netlify/Vercel

1. Go to domain settings in dashboard
2. Add custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

## Environment Variables

For production environment variables:

### GitHub Pages
Add to GitHub Secrets and reference in workflow

### Netlify/Vercel
Add in dashboard under Environment Variables

## Performance Optimization

Before deploying, optimize your build:

### 1. Optimize Images
```bash
# Use tinypng.com or similar
# Keep images under 200KB
```

### 2. Check Bundle Size
```bash
npm run build
# Check dist folder size
```

### 3. Enable Compression
GitHub Pages, Netlify, and Vercel handle this automatically

## Continuous Deployment

The included GitHub Actions workflow automatically:
1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

On every push to main branch!

## Deployment Checklist

- [ ] Updated all personal information
- [ ] Replaced placeholder images
- [ ] Tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Updated repository URLs in package.json and vite.config.js
- [ ] Committed all changes
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages or chosen hosting platform
- [ ] Verified deployment is live
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Tested contact form (if integrated with service)

## Monitoring Your Site

### Google Analytics (Optional)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Performance Monitoring

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## Rollback

If something goes wrong:

### GitHub Pages
```bash
git revert HEAD
git push origin main
```

### Netlify/Vercel
Use the dashboard to rollback to previous deployment

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check browser console for errors
4. Verify all configuration files

---

Happy deploying! 🚀

