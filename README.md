# Book Shop Project

React + Vite frontend for the Book Shop Project with Firebase Google sign-in.

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
```

No PHP files are required for deployment.

## Firebase Auth Setup

1. Create a Firebase web app from the Firebase console.
2. Enable Authentication > Sign-in method > Google.
3. Add your local and production domains to Authentication > Settings > Authorized domains.
4. Copy `frontend/.env.example` to `frontend/.env` and fill in the Firebase web app values.
5. Set `VITE_ADMIN_EMAILS` to a comma-separated list of Google account emails that should see admin pages.

Firebase Auth uses the Firebase project auth domain for the Google popup. Keeping the
default `firebaseapp.com` auth domain is the stable setup for Google sign-in on this
deployment.

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
