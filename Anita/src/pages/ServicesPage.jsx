
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, ShoppingBag, Gem, UserCheck, Coffee, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary mb-4" />,
    title: "Análisis de Colorimetría",
    description: "Descubre la paleta de colores que armoniza con tu tono de piel, cabello y ojos, realzando tu belleza natural.",
    price: "Desde $150"
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary mb-4" />,
    title: "Personal Shopper",
    description: "Te acompaño de compras o selecciono prendas online que se ajusten a tu estilo, presupuesto y necesidades.",
    price: "Desde $100/hora"
  },
  {
    icon: <Gem className="h-10 w-10 text-primary mb-4" />,
    title: "Análisis de Estilo y Morfología",
    description: "Identificamos tu tipo de cuerpo y estilo personal para crear looks que te favorezcan y te hagan sentir cómoda.",
    price: "Desde $200"
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary mb-4" />,
    title: "Asesoría de Imagen Integral",
    description: "Un paquete completo que incluye colorimetría, análisis de estilo, fondo de armario y personal shopper.",
    price: "Desde $500"
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary mb-4" />,
    title: "Consultoría de Imagen para Eventos",
    description: "Te ayudo a encontrar el outfit perfecto para esa ocasión especial, asegurando que luzcas impecable.",
    price: "Desde $180"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
    title: "Asesoría de Imagen Corporativa",
    description: "Potencia tu marca personal o la imagen de tu equipo con un estilo profesional y coherente.",
    price: "Consultar"
  },
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-16">
        <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600 mt-2">Soluciones personalizadas para potenciar tu imagen.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"}}
            className="h-full"
          >
            <Card className="h-full flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl glassmorphism-card border-primary/20">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="text-2xl font-semibold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div>
                  <p className="text-xl font-bold text-primary mb-4">{service.price}</p>
                  <Link to="/contacto">
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                      Saber Más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
