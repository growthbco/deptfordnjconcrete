# Netlify Deployment Guide

## ✅ Code is Pushed to GitHub

Your code has been successfully pushed to:
**Repository:** https://github.com/growthbco/deptfordnjconcrete.git  
**Branch:** `main`

## Deploying to Netlify

### Step 1: Connect Repository in Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"** (or GitLab/Bitbucket)
4. Authorize Netlify to access your GitHub account (if needed)
5. Select the repository: **`growthbco/deptfordnjconcrete`**

### Step 2: Configure Build Settings

Netlify should auto-detect these settings, but verify:

**Branch to deploy:** `main`  
**Build command:** `npm run build`  
**Publish directory:** `dist`

If the branch dropdown doesn't show `main`:
- Wait a few seconds for Netlify to refresh
- Click "Refresh" or reload the page
- Make sure the repository connection is successful
- The branch should appear after Netlify fetches the repository

### Step 3: Deploy

1. Click **"Deploy site"**
2. Netlify will automatically:
   - Install dependencies (`npm install`)
   - Build your site (`npm run build`)
   - Deploy to a URL like `deptfordnjconcrete.netlify.app`

### Step 4: Update Domain (Optional)

After deployment, you can:
- Set a custom domain in Netlify settings
- Update `astro.config.mjs` with your actual domain
- Update `robots.txt` with your actual domain

## Build Settings Summary

```
Build command: npm run build
Publish directory: dist
Base directory: (leave empty)
```

## Troubleshooting Branch Not Showing

If the branch dropdown is empty:

1. **Check Repository Connection:**
   - Verify Netlify can access your GitHub repo
   - Re-authorize GitHub access if needed

2. **Refresh the Page:**
   - Sometimes Netlify needs a moment to fetch branches
   - Click refresh or reload the deployment page

3. **Manual Configuration:**
   - If auto-detection fails, manually enter:
     - Branch: `main`
     - Build command: `npm run build`
     - Publish directory: `dist`

4. **Check GitHub:**
   - Verify the `main` branch exists on GitHub
   - Visit: https://github.com/growthbco/deptfordnjconcrete

## After Deployment

1. **Update Site URL:**
   - Edit `astro.config.mjs` with your Netlify URL or custom domain
   - Rebuild and redeploy

2. **Test Forms:**
   - Netlify Forms should work automatically
   - Check Forms tab in Netlify dashboard

3. **SSL Certificate:**
   - Automatically provided by Netlify
   - HTTPS enabled by default

## Current Configuration

- **Framework:** Astro
- **Node Version:** Auto-detected (or set in Netlify)
- **Build:** Static site generation
- **Forms:** Netlify Forms enabled
- **Sitemap:** Auto-generated at `/sitemap-index.xml`

