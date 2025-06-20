
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, PlusCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const BlogPage = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const defaultPosts = [
      { id: 1, title: "5 Tendencias de Moda para Esta Temporada", date: "2025-06-10", excerpt: "Descubre los colores, prendas y accesorios que marcarán pauta en los próximos meses y cómo adaptarlos a tu estilo.", imagePlaceholder: "Collage de tendencias de moda de temporada" },
      { id: 2, title: "El Poder de la Primera Impresión: Vístete para el Éxito", date: "2025-06-05", excerpt: "Tu imagen comunica antes que tus palabras. Aprende a proyectar confianza y profesionalismo con tu atuendo.", imagePlaceholder: "Persona de negocios bien vestida dando la mano" },
      { id: 3, title: "Cómo Construir un Fondo de Armario Inteligente", date: "2025-05-28", excerpt: "Menos es más cuando se trata de un guardarropa funcional. Te enseñamos las claves para tener prendas versátiles.", imagePlaceholder: "Armario perfectamente organizado con prendas basicas" },
    ];
    setPosts(storedPosts.length > 0 ? storedPosts : defaultPosts);
  }, []);

  const handleReadMoreUnimplemented = () => {
    toast({
      title: "🚧 ¡Contenido en camino!",
      description: "La lectura completa del artículo aún no está disponible. ¡Pronto podrás disfrutarlo! 🚀",
      variant: "destructive"
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-12">
        <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold hero-gradient-text">Nuestro Blog</h1>
        <p className="text-lg text-gray-600 mt-2">Consejos, tendencias e inspiración sobre imagen y estilo.</p>
      </div>

      {isAuthenticated && (
        <div className="text-right mb-8">
          <Link to="/blog/nuevo">
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              <PlusCircle className="mr-2 h-5 w-5" />
              Publicar Nuevo
            </Button>
          </Link>
        </div>
      )}

      {posts.length === 0 ? (
         <div className="text-center py-10">
          <img  alt="Icono de búsqueda de contenido" className="mx-auto h-24 w-24 text-gray-400 mb-4" src="https://images.unsplash.com/photo-1694878981885-7647baf0d957" />
          <p className="text-xl text-gray-500">Aún no hay publicaciones en el blog. ¡Vuelve pronto!</p>
          {isAuthenticated && <p className="text-gray-500 mt-2">¿Qué tal si <Link to="/blog/nuevo" className="text-primary hover:underline">creamos la primera</Link>?</p>}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"}}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl glassmorphism-card border-primary/20">
                <CardHeader>
                  <img  
                    className="w-full h-48 object-cover rounded-t-xl mb-4" 
                    alt={`Imagen destacada para el post: ${post.title}`}
                   src="https://images.unsplash.com/photo-1664366134937-64ce04902627" />
                  <CardTitle className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-primary p-0 hover:underline" onClick={handleReadMoreUnimplemented}>
                    Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BlogPage;
