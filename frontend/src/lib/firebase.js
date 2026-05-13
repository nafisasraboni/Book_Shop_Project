import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const envConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  envConfig.apiKey && envConfig.authDomain && envConfig.projectId && envConfig.appId,
);

const firebaseConfig = {
  apiKey: envConfig.apiKey || 'missing-firebase-api-key',
  authDomain: envConfig.authDomain || 'missing-firebase-auth-domain',
  projectId: envConfig.projectId || 'missing-firebase-project-id',
  storageBucket: envConfig.storageBucket || 'missing-firebase-storage-bucket',
  messagingSenderId: envConfig.messagingSenderId || '000000000000',
  appId: envConfig.appId || '1:000000000000:web:missingfirebaseappid',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const adminEmails = (import.meta.env.VITE_ADMIN_EMAILS || '')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
