
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="relative mb-12">
        <Sparkles className="absolute top-0 left-1/4 w-16 h-16 text-yellow-400 animate-pulse" />
        <Sparkles className="absolute bottom-0 right-1/4 w-12 h-12 text-pink-400 animate-pulse delay-500" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 hero-gradient-text">
          Descubre Tu Mejor Versión
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
          Conviértete en la persona que siempre has querido ser con una asesoría de imagen personalizada y transformadora.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/servicios">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform">
              Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contacto">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-lg transform hover:scale-105 transition-transform">
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-16">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 bg-white rounded-xl shadow-2xl glassmorphism-card"
        >
          <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Análisis de Color</h2>
          <p className="text-gray-600">Descubre los colores que realzan tu belleza natural y te hacen brillar.</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 bg-white rounded-xl shadow-2xl glassmorphism-card"
        >
          <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Estilo Personal</h2>
          <p className="text-gray-600">Define un estilo auténtico que refleje tu personalidad y tus objetivos.</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 bg-white rounded-xl shadow-2xl glassmorphism-card"
        >
          <img  
            alt="Icono de guardarropa inteligente" 
            className="h-12 w-12 mx-auto mb-4 text-primary"
           src="https://images.unsplash.com/photo-1688233817014-9647e206f759" />
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Guardarropa Inteligente</h2>
          <p className="text-gray-600">Optimiza tu armario con prendas versátiles que te encanten y te sirvan.</p>
        </motion.div>
      </div>
      
      <div className="my-12">
        <img  
          className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl" 
          alt="Collage de moda inspirador con diferentes estilos y colores"
         src="https://images.unsplash.com/photo-1520778166-93b06a2ce71a" />
      </div>
    </motion.div>
  );
};

export default HomePage;
