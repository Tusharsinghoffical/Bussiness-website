# Deployment Guide for Render

## Backend Service (API Server)

### render.yaml Configuration
Your `render.yaml` file configures the backend API service that handles contact form submissions.

### Environment Variables Setup
When deploying to Render, you'll need to set these environment variables:

- `EMAIL_USER`: Your Gmail address (tusharsinghoffical@gmail.com)
- `EMAIL_PASS`: Your Gmail app password
- `NODE_ENV`: Set to "production"
- `CLIENT_URL`: Your frontend URL (e.g., https://codewithmrsingh.onrender.com)

### Port Configuration
The server will automatically use Render's assigned port via `process.env.PORT`.

## Frontend Configuration

For the frontend to communicate with your backend API when deployed:

1. The contact form will send POST requests to `/api/contact`
2. When deployed, this will be proxied to your backend service
3. In development, it connects to localhost:5000

## Deployment Steps

1. Connect your GitHub repository to Render
2. Render will use the `render.yaml` file to create two services:
   - Backend API service (handles email sending)
   - Frontend static site (your React app)

3. Set the environment variables in your Render dashboard

## Important Notes

- Keep your Gmail app password secure and never expose it in client-side code
- The backend handles all email functionality
- CORS is configured to allow requests from your frontend domain in production
- In development, CORS allows common localhost ports

## Troubleshooting

If emails aren't sending after deployment:
1. Verify your environment variables are set correctly
2. Check that your Gmail app password is still valid
3. Ensure your Gmail account allows access from less secure apps (though app passwords are preferred)
4. Check the server logs in your Render dashboard