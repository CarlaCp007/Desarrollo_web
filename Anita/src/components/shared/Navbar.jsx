
import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LogIn, UserCircle, Feather } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive ? 'active text-primary' : 'text-gray-700'}`
    }
  >
    {children}
  </RouterNavLink>
);

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente.",
    });
  };
  
  const handleUnimplemented = () => {
    toast({
      title: "🚧 ¡Función en camino!",
      description: "Esta característica aún no está implementada, ¡pero puedes pedirla en tu próximo mensaje! 🚀",
      variant: "destructive"
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }}>
              <Feather className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="text-2xl font-bold hero-gradient-text">Asesora Chic</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/galeria">Galería</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contacto">Contáctenos</NavLink>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Button variant="outline" onClick={() => {
                  toast({ title: "Navegando al panel de admin..." });
                  window.location.href = '/admin';
                }} className="border-primary text-primary hover:bg-primary/10">
                  <UserCircle className="mr-2 h-5 w-5" />
                  Admin
                </Button>
                <Button onClick={handleLogout} className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                  Salir
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  <LogIn className="mr-2 h-5 w-5" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
