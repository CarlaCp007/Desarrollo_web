
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';

const galleryItems = [
  { id: 1, srcPlaceholder: "Elegante mujer con atuendo de negocios", alt: "Transformación de estilo ejecutivo" },
  { id: 2, srcPlaceholder: "Persona sonriendo con nueva paleta de colores", alt: "Antes y después de análisis de colorimetría" },
  { id: 3, srcPlaceholder: "Atuendo casual chic para el día a día", alt: "Look casual con estilo personalizado" },
  { id: 4, srcPlaceholder: "Outfit glamoroso para evento especial", alt: "Asesoría para evento de gala" },
  { id: 5, srcPlaceholder: "Guardarropa organizado y funcional", alt: "Optimización de fondo de armario" },
  { id: 6, srcPlaceholder: "Hombre con estilo moderno y confiado", alt: "Asesoría de imagen masculina" },
];

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-16">
        <Camera className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Galería de Estilos</h1>
        <p className="text-lg text-gray-600 mt-2">Inspiración y transformaciones reales.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg glassmorphism-card">
              <img  
                className="w-full h-72 object-cover"
                alt={item.alt}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </Card>
          </motion.div>
        ))}
      </div>
       <div className="text-center mt-12">
          <p className="text-gray-700 text-lg">
            Estas son solo algunas muestras de cómo una asesoría de imagen puede realzar tu potencial.
          </p>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
