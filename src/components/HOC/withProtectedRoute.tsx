import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const withProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoute: React.FC = (props) => {
    const isAuthenticated = useUser().user;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    // If authenticated, render the component
    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;
