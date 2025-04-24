# Netlify Deployment Guide

## Prerequisites
- Make sure you have a Netlify account. If not, sign up at [Netlify](https://app.netlify.com/signup)
- Your project has been built successfully with `npm run build`

## Manual Deployment (Drag & Drop)

1. **Prepare your build**
   - Run `npm run build` (We've already done this)
   - The build output is located in the `dist` folder

2. **Log in to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Log in with your account

3. **Deploy via Drag & Drop**
   - On the Netlify dashboard, look for the deployment zone (it usually says "Drag and drop your site folder here")
   - Open your project folder (`D:\portfolio`)
   - Find and drag the `dist` folder onto the Netlify deployment zone
   - Wait for the upload to complete
   - Netlify will automatically deploy your site and provide a unique URL

4. **Customize Your Site**
   - After deployment, you can customize your site name by clicking "Site settings"
   - Under "Domain management," you can set up a custom domain if you have one
   - You can set up "Deploy settings" to connect to your GitHub repository for automatic deployments

## Continuous Deployment (GitHub Integration)

1. **Push your code to GitHub**
   - Create a repository on GitHub for your portfolio
   - Push your local code to the repository

2. **Connect to Netlify**
   - In Netlify dashboard, click "New site from Git"
   - Choose GitHub as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your portfolio repository

3. **Configure Build Settings**
   - Set build command to: `npm run build`
   - Set publish directory to: `dist`
   - Click "Deploy site"

4. **Set up Environment Variables**
   - If your site uses any environment variables, add them in the "Site settings" > "Build & deploy" > "Environment" section

## Handling Client-Side Routing

This portfolio uses client-side routing, so to ensure all routes work correctly:

1. The `netlify.toml` file has been set up with appropriate redirects
2. The `public/_redirects` file has also been configured

These files tell Netlify to redirect all requests to `index.html`, which allows your client-side router to handle navigation.

## Troubleshooting

If you encounter any issues:

1. Make sure all build dependencies are installed (`npm install`)
2. Ensure your build completes successfully locally (`npm run build`)
3. Check Netlify's deploy logs for any specific errors
4. Ensure redirects are properly set up for client-side routing

## Need Help?

- Check Netlify's [documentation](https://docs.netlify.com/)
- Visit their [support forums](https://answers.netlify.com/)
- Contact Netlify support through your dashboard 