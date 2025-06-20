
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import AdminDashboardPage from '@/pages/AdminDashboardPage';
import NewPostPage from '@/pages/NewPostPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/nuevo" element={
            <ProtectedRoute>
              <NewPostPage />
            </ProtectedRoute>
          } />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          } />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
