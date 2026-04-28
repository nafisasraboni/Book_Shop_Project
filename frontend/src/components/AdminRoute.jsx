import { Navigate, useLocation } from 'react-router-dom';
import { currentUser } from '../data/staticData.js';

export default function AdminRoute({ children }) {
  const location = useLocation();

  if (!currentUser.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (currentUser.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
}
