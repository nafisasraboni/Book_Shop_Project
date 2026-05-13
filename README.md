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

For production Google sign-in, `VITE_FIREBASE_AUTH_DOMAIN` is set to
`book-shop-project.sraboni.dev` so the Google account picker does not show the default
`firebaseapp.com` project domain. The Cloudflare Pages function at `functions/__/auth/[[path]].js`
proxies Firebase Auth helper requests for that custom auth domain. Add
`book-shop-project.sraboni.dev` in Firebase Authentication authorized domains and allow
`https://book-shop-project.sraboni.dev/__/auth/handler` in the Google OAuth client.

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
