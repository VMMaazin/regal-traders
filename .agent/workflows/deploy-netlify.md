---
description: How to deploy the Regal Traders website to Netlify
---

Follow these steps to deploy your Next.js application to Netlify:

### Method 1: Deploy with Netlify CLI (Recommended for Local Dev)

1. **Install Netlify CLI** (if you haven't already):
   ```powershell
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```powershell
   netlify login
   ```

3. **Build the Project**:
   ```powershell
   npm run build
   ```

4. **Deploy**:
   ```powershell
   netlify deploy --prod
   ```
   *Follow the prompts to create a new site or link to an existing one.*

### Method 2: Deploy via GitHub (Recommended for Continuous Deployment)

1. **Push your code to a GitHub repository**.
2. **Log in to [Netlify](https://app.netlify.com/)**.
3. **Click "Add new site" > "Import an existing project"**.
4. **Connect your GitHub account** and select the `RT AG` repository.
5. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (Netlify usually detects this automatically for Next.js)
6. **Click "Deploy site"**.

### Important Notes for Next.js on Netlify
- Netlify will automatically install the **@netlify/plugin-nextjs** to handle server-side features.
- Ensure your environment variables (if any) are added in the Netlify dashboard under **Site settings > Environment variables**.
