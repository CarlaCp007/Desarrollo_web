
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, PlusCircle, Edit3, Settings, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const AdminDashboardPage = () => {
  const { user } = useAuth();
  
  const handleUnimplementedFeature = () => {
    toast({
      title: "🚧 ¡Función en camino!",
      description: "Esta característica aún no está implementada, ¡pero puedes pedirla en tu próximo mensaje! 🚀",
      variant: "destructive"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-12">
        <LayoutDashboard className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Panel de Administración</h1>
        <p className="text-lg text-gray-600 mt-2">Bienvenido/a, {user?.name || 'Admin'}. Gestiona tu contenido aquí.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/blog/nuevo">
            <Card className="hover:shadow-xl transition-shadow duration-300 glassmorphism-card cursor-pointer">
              <CardHeader>
                <PlusCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-2xl font-semibold text-gray-800">Crear Nuevo Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Redacta y publica nuevos artículos para tu blog.</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} onClick={handleUnimplementedFeature}>
          <Card className="hover:shadow-xl transition-shadow duration-300 glassmorphism-card cursor-pointer">
            <CardHeader>
              <Edit3 className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-2xl font-semibold text-gray-800">Gestionar Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Edita o elimina publicaciones existentes en el blog.</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} onClick={handleUnimplementedFeature}>
          <Card className="hover:shadow-xl transition-shadow duration-300 glassmorphism-card cursor-pointer">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-2xl font-semibold text-gray-800">Gestionar Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Administra los roles y permisos de los usuarios.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} onClick={handleUnimplementedFeature}>
          <Card className="hover:shadow-xl transition-shadow duration-300 glassmorphism-card cursor-pointer">
            <CardHeader>
              <Settings className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-2xl font-semibold text-gray-800">Configuración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Ajusta la configuración general del sitio web.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboardPage;
