import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext/useAuthContext';
import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div className="flex flex-col h-screen w-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Budget Wise</h1>
      </header>
      <div className="flex flex-1">
      {isAuthenticated && (
        <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white w-24 h-24">
          {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
      )}
      <Sidebar isOpen={isOpen} />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <footer className="bg-blue-600 text-white p-4">
        <p>&copy; 2023 Budget Wise</p>
      </footer>
    </div>
  );
};

export default Layout;