# Deployment to Render

## Prerequisites
1. Create a free account at [render.com](https://render.com)
2. Have your GitHub/GitLab account ready
3. Make sure your code is pushed to a Git repository

## Deployment Steps

### 1. Push Code to GitHub/GitLab
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### 2. Deploy on Render
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub/GitLab account
4. Select your repository
5. Configure settings:
   - **Name**: business-website (or your preferred name)
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"

### 3. Environment Variables (if needed)
If you're using Gemini API:
1. In Render dashboard, go to your site
2. Click "Environment" tab
3. Add variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your actual API key

## Local Development
To run locally:
```bash
npm install
npm run dev
```
Visit: http://localhost:3000

## Build for Production
```bash
npm run build
```
Output will be in the `dist` folder.

## Troubleshooting
- If build fails, check logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Ensure `vite.config.ts` has correct base path