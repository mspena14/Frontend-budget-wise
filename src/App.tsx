import React from 'react';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './contexts/authContext/AuthContext';
import { useAuth } from './contexts/authContext/useAuthContext';
const App: React.FC = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    
   <Navigation/>


  );
};

export default App;

