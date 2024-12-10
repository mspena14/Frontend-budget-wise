import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import BudgetStatistics from '../pages/BudgetStatistics/BudgetStatistics';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

const Navigation: React.FC = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/budget" 
              element={
                <ProtectedRoute>
                  <BudgetStatistics />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default Navigation;