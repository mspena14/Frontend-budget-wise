import React from "react";
import { useAuth } from "../../contexts/authContext/useAuthContext";
import { Link } from "react-router-dom";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 text-white">
        <h2 className="text-lg">Sidebar</h2>
        <li className="mb-2">
          <Link to="/budget" className="text-blue-600 hover:underline">
            Mis Presupuestos
          </Link>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
