
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto. (Simulación)",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-16">
        <Mail className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Contáctanos</h1>
        <p className="text-lg text-gray-600 mt-2">¿Lista para transformar tu imagen? ¡Hablemos!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          className="space-y-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Información de Contacto</h2>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md glassmorphism-card">
            <Mail className="h-8 w-8 text-primary mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <a href="mailto:hola@asesorachic.com" className="text-primary hover:underline">hola@asesorachic.com</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md glassmorphism-card">
            <Phone className="h-8 w-8 text-primary mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Teléfono</p>
              <a href="tel:+123456789" className="text-primary hover:underline">+123 456 789</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md glassmorphism-card">
            <MapPin className="h-8 w-8 text-primary mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Ubicación</p>
              <p className="text-gray-600">Ciudad Elegante, Calle Estilo 123 (Atención con cita previa)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="p-8 bg-white rounded-xl shadow-2xl glassmorphism-card"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700">Nombre Completo</Label>
              <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Tu Nombre" required className="mt-1 bg-white/50"/>
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Correo Electrónico</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="mt-1 bg-white/50"/>
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} required className="mt-1 bg-white/50"/>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
              Enviar Mensaje
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
