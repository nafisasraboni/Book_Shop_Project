import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function getRedirectPath(location) {
  const from = location.state?.from;

  if (!from?.pathname) {
    return '/my-orders';
  }

  return `${from.pathname}${from.search || ''}${from.hash || ''}`;
}

function getAuthErrorMessage(error) {
  if (error?.code === 'auth/popup-closed-by-user') {
    return 'Google sign-in popup was closed before login finished.';
  }

  if (error?.code === 'auth/popup-blocked') {
    return 'Your browser blocked the Google sign-in popup. Allow popups for this site and try again.';
  }

  if (error?.code === 'auth/unauthorized-domain') {
    return 'This domain is not authorized in Firebase Authentication settings.';
  }

  return error?.message || 'Google sign-in failed. Try again.';
}

export default function GoogleAuthCard({
  eyebrow,
  title,
  description,
  footerText,
  footerLink,
  footerLinkLabel,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isFirebaseConfigured,
    isLoading,
    loginWithGoogle,
  } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const redirectTo = getRedirectPath(location);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, redirectTo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await loginWithGoogle();
      navigate(redirectTo, { replace: true });
    } catch (authError) {
      setError(getAuthErrorMessage(authError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="auth-card__text">{description}</p>

      {!isFirebaseConfigured && (
        <p className="form-alert">
          Firebase config is missing. Add your web app values to frontend/.env first.
        </p>
      )}

      {error && <p className="form-alert form-alert--error">{error}</p>}

      <button
        className="button google-auth-button"
        type="submit"
        disabled={isLoading || isSubmitting || !isFirebaseConfigured}
      >
        <span className="google-mark" aria-hidden="true">
          G
        </span>
        {isSubmitting ? 'Connecting...' : 'Continue with Google'}
      </button>

      <p>
        {footerText} <Link to={footerLink}>{footerLinkLabel}</Link>
      </p>
    </form>
  );
}
