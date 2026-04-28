# Book Shop Project

Basic React + Vite frontend for the Book Shop Project.

The current Home page says:

```text
Book Shop Project is live. Features are coming soon.
```

## Project Structure

```text
frontend/
  src/
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js

database/
  schema.sql
  rls-policies.sql
  seed.sql
```

No PHP files are required for deployment.

## Local Setup

Run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

Build the production files:

```bash
cd frontend
npm run build
```

Vite writes the production build to:

```text
frontend/dist
```

## Cloudflare Pages Settings

Use these settings when deploying from GitHub:

```text
Framework preset: Vite
Root directory: frontend
Build command: npm run build
Build output directory: dist
```
