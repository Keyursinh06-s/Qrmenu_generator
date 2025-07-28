import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Pages
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import MenuPage from './pages/MenuPage';
import NotFound from './pages/NotFound';

// Styles
import './styles/globals.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu/:restaurantSlug" element={<MenuPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/:restaurantSlug" element={<AdminDashboard />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Global Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;