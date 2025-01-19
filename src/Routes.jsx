import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import EditRecipePage from './pages/EditRecipePage';
import Categories from './pages/Categories';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        {/* Navbar is always displayed */}
        <Navbar />
        
        {/* Define all routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/edit/:id" element={<EditRecipePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
