# Troubleshooting GitHub Pages Deployment

## Current Issue
Site is trying to load `/src/main.jsx` instead of built files, resulting in 404 errors.

## Root Cause
GitHub Pages is serving source files instead of the built `dist/` folder contents.

## Solutions to Try

### Solution 1: Verify GitHub Pages Settings

1. Go to your repository: https://github.com/vincentk191/modular-website
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Must be **"GitHub Actions"** (NOT "Deploy from a branch")
   - If it shows a branch, change it to "GitHub Actions"
4. Save changes

### Solution 2: Check Actions Workflow

1. Go to **Actions** tab in your repository
2. Find the latest "Deploy to GitHub Pages" workflow run
3. Click on it to see details
4. Check if:
   - ✅ Build job completed successfully
   - ✅ Deploy job completed successfully
   - ❌ Any red X marks or errors

### Solution 3: Manually Trigger New Deployment

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click **"Run workflow"**
6. Wait 3-5 minutes for completion

### Solution 4: Clear Browser Cache

The browser might be caching the old broken version:

1. **Chrome/Edge**: Press `Ctrl + Shift + Delete` → Clear cached images and files
2. **Firefox**: Press `Ctrl + Shift + Delete` → Clear cache
3. Or use **Incognito/Private mode** to test

### Solution 5: Verify Build Output

After pushing the updated workflow, check the Actions log:

1. Go to **Actions** → Latest workflow run
2. Click on **"build"** job
3. Expand **"Verify build output"** step
4. Verify it shows:
   - `index.html` exists
   - `assets/` folder exists with JS/CSS files
   - The index.html should NOT have `/src/main.jsx` in it

### Solution 6: Check URL

Make sure you're accessing:
```
https://vincentk191.github.io/modular-website/
```

**NOT:**
```
https://vincentk191.github.io/  ❌
```

### Solution 7: Force Rebuild

If nothing works, try:

1. Make a small change to any file (add a space)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Force rebuild"
   git push origin main
   ```
3. Wait for workflow to complete

## What Should Happen

When working correctly:
1. You push to `main` branch
2. GitHub Actions runs automatically
3. Build job creates `dist/` folder with:
   - `index.html` (with correct paths like `/modular-website/assets/...`)
   - `assets/` folder with bundled JS/CSS
4. Deploy job uploads `dist/` to GitHub Pages
5. Site is live at `https://vincentk191.github.io/modular-website/`

## Expected Build Output

The built `index.html` should look like:
```html
<!doctype html>
<html>
  <head>...</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/modular-website/assets/index-abc123.js"></script>
  </body>
</html>
```

**NOT:**
```html
<script type="module" src="/src/main.jsx"></script>  ❌
```

## Still Not Working?

1. Check the Actions workflow logs for errors
2. Verify the `dist/` folder is being created correctly
3. Make sure GitHub Pages source is set to "GitHub Actions"
4. Wait 10-15 minutes after deployment (sometimes takes time to propagate)
5. Try accessing from a different browser/device

## Quick Test

Run locally to verify build works:
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173/modular-website/` - if this works, the build is correct.

