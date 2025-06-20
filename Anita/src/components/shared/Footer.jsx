
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    toast({
      title: `Redirigiendo a ${platform}`,
      description: "🚧 Esta función aún no está implementada, ¡pero puedes solicitarla! 🚀",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-white">Asesora Chic</span>
            <p className="mt-2 text-sm">Transformando tu imagen, potenciando tu confianza.</p>
          </div>
          <div>
            <span className="text-lg font-semibold text-white">Enlaces Rápidos</span>
            <ul className="mt-2 space-y-1">
              <li><a href="/acerca-de" className="hover:text-primary transition-colors">Acerca de</a></li>
              <li><a href="/servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-semibold text-white">Síguenos</span>
            <div className="flex space-x-4 mt-2">
              <button onClick={() => handleSocialClick('Facebook')} className="hover:text-primary transition-colors"><Facebook size={24} /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:text-primary transition-colors"><Instagram size={24} /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="hover:text-primary transition-colors"><Twitter size={24} /></button>
              <button onClick={() => handleSocialClick('LinkedIn')} className="hover:text-primary transition-colors"><Linkedin size={24} /></button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Asesora Chic. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ por Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
