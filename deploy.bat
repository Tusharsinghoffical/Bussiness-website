@echo off
echo Building website for production...
npm run build
echo.
echo Build completed! Files are in the 'dist' folder.
echo.
echo To deploy to Render:
echo 1. Push your code to GitHub/GitLab
echo 2. Go to https://dashboard.render.com
echo 3. Create a new Static Site
echo 4. Connect your repository
echo 5. Set build command: npm install && npm run build
echo 6. Set publish directory: dist
echo.
pause