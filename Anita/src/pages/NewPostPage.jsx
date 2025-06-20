
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { FilePlus2, ImageDown as ImageUp } from 'lucide-react';

const NewPostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imagePlaceholder, setImagePlaceholder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), 
      title,
      date: new Date().toISOString().split('T')[0],
      excerpt,
      content,
      imagePlaceholder: imagePlaceholder || 'Imagen descriptiva del post',
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    localStorage.setItem('blogPosts', JSON.stringify([newPost, ...existingPosts]));

    toast({
      title: "¡Post Creado Exitosamente!",
      description: `El artículo "${title}" ha sido publicado.`,
    });
    navigate('/blog');
  };
  
  const handleImageUploadClick = () => {
    toast({
      title: "🚧 ¡Función en camino!",
      description: "La carga de imágenes aún no está implementada. Puedes agregar un placeholder descriptivo. 🚀",
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
      <Card className="w-full max-w-2xl mx-auto shadow-2xl glassmorphism-card">
        <CardHeader className="text-center">
          <FilePlus2 className="h-12 w-12 mx-auto mb-4 text-primary" />
          <CardTitle className="text-3xl font-bold text-gray-800">Crear Nuevo Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Título del Post</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Un título impactante para tu artículo" 
                required 
                className="mt-1 bg-white/50"
              />
            </div>
            <div>
              <Label htmlFor="excerpt">Extracto (Resumen Corto)</Label>
              <Textarea 
                id="excerpt" 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                placeholder="Un breve resumen que invite a leer más..." 
                rows={3} 
                required 
                className="mt-1 bg-white/50"
              />
            </div>
            <div>
              <Label htmlFor="content">Contenido Completo</Label>
              <Textarea 
                id="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Escribe aquí el contenido de tu artículo..." 
                rows={10} 
                required 
                className="mt-1 bg-white/50"
              />
            </div>
            <div>
              <Label htmlFor="imagePlaceholder">Placeholder para Imagen Destacada</Label>
               <div className="flex items-center space-x-2 mt-1">
                <Input 
                  id="imagePlaceholder" 
                  value={imagePlaceholder} 
                  onChange={(e) => setImagePlaceholder(e.target.value)} 
                  placeholder="Ej: Mujer sonriendo con outfit primaveral"
                  className="bg-white/50 flex-grow"
                />
                <Button type="button" variant="outline" onClick={handleImageUploadClick} className="shrink-0">
                  <ImageUp className="h-4 w-4 mr-2" />
                  Subir
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">La carga real de imágenes no está implementada. Usa un texto descriptivo.</p>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
              Publicar Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewPostPage;
