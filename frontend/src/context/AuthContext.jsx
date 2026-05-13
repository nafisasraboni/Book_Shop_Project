import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { adminEmails, auth, isFirebaseConfigured } from '../lib/firebase.js';

const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsLoading(false);
      return undefined;
    }

    return onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setIsLoading(false);
      },
      () => {
        setUser(null);
        setIsLoading(false);
      },
    );
  }, []);

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Add your Firebase web app values to frontend/.env.');
    }

    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  };

  const logout = () => signOut(auth);

  const value = useMemo(() => {
    const email = user?.email?.toLowerCase();

    return {
      user,
      isAuthenticated: Boolean(user),
      isAdmin: Boolean(email && adminEmails.includes(email)),
      isLoading,
      isFirebaseConfigured,
      loginWithGoogle,
      logout,
    };
  }, [isLoading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
