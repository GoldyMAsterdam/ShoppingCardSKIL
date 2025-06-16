# Motorcycle Shopping Cart

A responsive motorcycle shopping cart website built with Tailwind CSS.

## Setup for Cloud Server Deployment

### 1. Install Dependencies

```bash
npm install
```

### 2. Build CSS for Production

```bash
npm run build:css
```

### 3. Deployment

After building the CSS, you can deploy all files to your cloud server. Make sure to include:

- All HTML files
- The CSS folder with the compiled style.css
- The IMG folder with all images
- main.js

### 4. Development Workflow

To work on the project locally:

```bash
npm run watch:css
```

This will watch for changes in your CSS and automatically rebuild the Tailwind CSS file.

## Cloud Server Notes

- Make sure your server is configured to serve static files correctly
- Set the correct MIME types for .css, .js, and image files
- Check that paths in your HTML files match the server's file structure
- For relative paths, remove the leading slash if the site isn't hosted at the root directory
