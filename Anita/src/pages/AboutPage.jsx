
import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-12">
        <User className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Acerca de Mí</h1>
        <p className="text-lg text-gray-600 mt-2">Conoce a la experta detrás de tu transformación.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img  
            className="rounded-xl shadow-2xl w-full h-auto object-cover" 
            alt="Retrato profesional de la asesora de imagen sonriendo con confianza"
           src="https://images.unsplash.com/photo-1635521071003-d9a00f967e0b" />
        </motion.div>
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Mi Pasión, Tu Estilo</h2>
          <p className="text-gray-700 leading-relaxed">
            ¡Hola! Soy [Nombre de la Asesora], y mi misión es ayudarte a descubrir y expresar tu identidad única a través de tu imagen. Con años de experiencia en la industria de la moda y un profundo entendimiento de la psicología del color y el estilo, te guiaré en un viaje de autoconocimiento y transformación.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Creo firmemente que la imagen personal va más allá de la ropa; es una herramienta poderosa para comunicar quién eres, aumentar tu confianza y alcanzar tus metas. Mi enfoque es personalizado, cercano y siempre enfocado en tus necesidades y aspiraciones.
          </p>
          <div className="flex space-x-6 mt-6">
            <div className="flex items-center text-primary">
              <Zap size={24} className="mr-2"/>
              <span className="font-semibold">Enfoque Creativo</span>
            </div>
            <div className="flex items-center text-primary">
              <Award size={24} className="mr-2"/>
              <span className="font-semibold">Resultados Garantizados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
