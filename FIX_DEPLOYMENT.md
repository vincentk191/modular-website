# Fix for 404 Error on GitHub Pages

## The Problem

You're seeing: `GET https://vincentk191.github.io/src/main.jsx net::ERR_ABORTED 404`

This means GitHub Pages is serving your **source files** instead of your **built files**.

## Quick Fix Steps

### Step 1: Verify Your Repository Name

Your repo should be named `modular-website`. If it's different, update:
- `vite.config.js` - Change `base: '/modular-website/'` to match your repo name
- `package.json` - Update the `homepage` field

### Step 2: Make Sure GitHub Pages is Configured Correctly

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Must be **"GitHub Actions"** (NOT "Deploy from a branch")
   - If it's set to a branch, change it to "GitHub Actions"

### Step 3: Trigger a New Deployment

**Option A: Push a commit (Recommended)**
```bash
git add .
git commit -m "Fix deployment"
git push origin main
```

**Option B: Manually trigger workflow**
1. Go to **Actions** tab in your GitHub repo
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select your branch and click "Run workflow"

### Step 4: Wait for Build to Complete

1. Go to **Actions** tab
2. Wait for the workflow to complete (green checkmark)
3. It should take 2-5 minutes

### Step 5: Access the Correct URL

Your site should be at:
```
https://vincentk191.github.io/modular-website/
```

**NOT** at:
```
https://vincentk191.github.io/  ❌
```

## If You Want to Use Root Domain

If you want `https://vincentk191.github.io/` (without `/modular-website/`), you need to:

1. Rename your repository to `vincentk191.github.io` (special name for user pages)
2. Change `vite.config.js`:
   ```js
   base: '/'
   ```
3. Update `package.json`:
   ```json
   "homepage": "https://vincentk191.github.io"
   ```

## Verify Build is Working

Check that the build creates these files in `dist/`:
- `index.html` (with correct paths, not `/src/main.jsx`)
- `assets/` folder with JS and CSS files

Run locally to test:
```bash
npm run build
npm run preview
```

## Still Not Working?

1. **Check Actions tab** - Is the workflow failing? Read the error messages.
2. **Check Pages settings** - Source must be "GitHub Actions"
3. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
4. **Check the URL** - Must include `/modular-website/` at the end

## Common Issues

### Issue: Workflow not running
**Fix**: Make sure you have a `.github/workflows/deploy.yml` file

### Issue: Build failing
**Fix**: Check Actions tab for errors, usually missing dependencies

### Issue: Still seeing source files
**Fix**: GitHub Pages source is set to wrong branch. Change to "GitHub Actions"

### Issue: Wrong base path
**Fix**: The `base` in `vite.config.js` must match your repo name exactly

