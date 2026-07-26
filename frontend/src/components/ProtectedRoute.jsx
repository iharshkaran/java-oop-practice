import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  // if user not logged in (user null/undefined)
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // if user is logged in, show the page
  return children;
};

export default ProtectedRoute;