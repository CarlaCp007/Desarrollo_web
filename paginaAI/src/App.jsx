
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Code, 
  Play, 
  CheckCircle, 
  BookOpen, 
  Trophy, 
  Star,
  ArrowRight,
  ArrowLeft,
  Monitor,
  Zap,
  Target,
  Award
} from 'lucide-react';

const App = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [userCode, setUserCode] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const lessons = [
    {
      id: 1,
      title: "¿Qué es HTML?",
      description: "Aprende los fundamentos básicos de HTML y su estructura",
      content: `HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. 
      
HTML utiliza "etiquetas" para estructurar el contenido. Las etiquetas están rodeadas por corchetes angulares < >.

Ejemplo básico:
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
  </body>
</html>`,
      exercise: `<!DOCTYPE html>
<html>
<head>
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Bienvenido a HTML!</h1>
    <p>Esta es mi primera página web.</p>
</body>
</html>`,
      expectedOutput: "Una página con un título y un párrafo"
    },
    {
      id: 2,
      title: "Estructura Básica de HTML",
      description: "Comprende la anatomía de un documento HTML",
      content: `Todo documento HTML tiene una estructura básica:

1. <!DOCTYPE html> - Declara el tipo de documento
2. <html> - Elemento raíz que contiene todo el contenido
3. <head> - Contiene metadatos (no visible en la página)
4. <body> - Contiene el contenido visible

La estructura es como el esqueleto de tu página web.`,
      exercise: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Estructura HTML</title>
</head>
<body>
    <header>
        <h1>Mi Sitio Web</h1>
    </header>
    <main>
        <p>Contenido principal aquí</p>
    </main>
</body>
</html>`,
      expectedOutput: "Documento HTML con estructura semántica"
    },
    {
      id: 3,
      title: "Etiquetas de Texto",
      description: "Aprende a formatear texto con diferentes etiquetas",
      content: `HTML ofrece muchas etiquetas para formatear texto:

• <h1> a <h6> - Encabezados (del más grande al más pequeño)
• <p> - Párrafos
• <strong> - Texto importante (negrita)
• <em> - Texto enfatizado (cursiva)
• <br> - Salto de línea
• <hr> - Línea horizontal`,
      exercise: `<!DOCTYPE html>
<html>
<head>
    <title>Formato de Texto</title>
</head>
<body>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    <p>Este es un <strong>párrafo importante</strong> con texto <em>enfatizado</em>.</p>
    <hr>
    <p>Otro párrafo después de una línea.</p>
</body>
</html>`,
      expectedOutput: "Página con diferentes formatos de texto"
    },
    {
      id: 4,
      title: "Enlaces e Imágenes",
      description: "Conecta páginas y añade contenido visual",
      content: `Los enlaces e imágenes hacen que las páginas web sean interactivas y atractivas:

Enlaces:
• <a href="URL">Texto del enlace</a>
• href especifica la dirección de destino

Imágenes:
• <img src="ruta-imagen.jpg" alt="descripción">
• src especifica la ubicación de la imagen
• alt proporciona texto alternativo`,
      exercise: `<!DOCTYPE html>
<html>
<head>
    <title>Enlaces e Imágenes</title>
</head>
<body>
    <h1>Mi Página con Multimedia</h1>
    <p>Visita <a href="https://www.google.com">Google</a> para buscar información.</p>
    <img src="https://via.placeholder.com/300x200" alt="Imagen de ejemplo">
    <p><a href="#seccion1">Ir a la sección 1</a></p>
</body>
</html>`,
      expectedOutput: "Página con enlaces e imagen"
    },
    {
      id: 5,
      title: "Listas en HTML",
      description: "Organiza información con listas ordenadas y no ordenadas",
      content: `Las listas ayudan a organizar información de manera clara:

Listas no ordenadas (viñetas):
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

Listas ordenadas (números):
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>`,
      exercise: `<!DOCTYPE html>
<html>
<head>
    <title>Listas HTML</title>
</head>
<body>
    <h1>Mis Listas</h1>
    <h2>Frutas favoritas:</h2>
    <ul>
        <li>Manzanas</li>
        <li>Naranjas</li>
        <li>Plátanos</li>
    </ul>
    <h2>Pasos para hacer café:</h2>
    <ol>
        <li>Hervir agua</li>
        <li>Añadir café</li>
        <li>Servir y disfrutar</li>
    </ol>
</body>
</html>`,
      expectedOutput: "Página con listas ordenadas y no ordenadas"
    }
  ];

  const currentLessonData = lessons[currentLesson];

  useEffect(() => {
    setUserCode(currentLessonData.exercise);
  }, [currentLesson]);

  const handleRunCode = () => {
    setShowPreview(true);
    toast({
      title: "¡Código ejecutado!",
      description: "Revisa la vista previa a la derecha",
    });
  };

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson]);
      toast({
        title: "¡Lección completada! 🎉",
        description: `Has dominado: ${currentLessonData.title}`,
      });
    }
  };

  const handleNextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setShowPreview(false);
    }
  };

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setShowPreview(false);
    }
  };

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="gradient-bg text-white py-6 shadow-2xl">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Code className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">HTML Academy</h1>
                <p className="text-blue-100">Aprende programación web desde cero</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>{completedLessons.length}/{lessons.length}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progreso del curso</span>
            <span className="text-sm font-bold text-indigo-600">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              className="progress-bar h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Lesson Content */}
          <motion.div 
            key={currentLesson}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Lesson Header */}
            <div className="lesson-card p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Lección {currentLesson + 1}: {currentLessonData.title}
                  </h2>
                  <p className="text-gray-600">{currentLessonData.description}</p>
                </div>
                {completedLessons.includes(currentLesson) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-500"
                  >
                    <CheckCircle className="h-8 w-8" />
                  </motion.div>
                )}
              </div>
              
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <pre className="whitespace-pre-wrap text-gray-700 font-medium">
                    {currentLessonData.content}
                  </pre>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="lesson-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                  <Monitor className="h-5 w-5" />
                  <span>Editor de Código</span>
                </h3>
                <div className="flex space-x-2">
                  <Button 
                    onClick={handleRunCode}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Ejecutar
                  </Button>
                  <Button 
                    onClick={handleCompleteLesson}
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Completar
                  </Button>
                </div>
              </div>
              
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-64 p-4 border-2 border-gray-200 rounded-lg code-editor text-sm resize-none focus:border-blue-500 focus:outline-none"
                placeholder="Escribe tu código HTML aquí..."
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button 
                onClick={handlePrevLesson}
                disabled={currentLesson === 0}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Anterior</span>
              </Button>
              
              <Button 
                onClick={handleNextLesson}
                disabled={currentLesson === lessons.length - 1}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center space-x-2"
              >
                <span>Siguiente</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Lessons Overview */}
            <div className="lesson-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Todas las Lecciones</span>
              </h3>
              <div className="space-y-3">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      index === currentLesson 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : completedLessons.includes(index)
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setCurrentLesson(index);
                      setShowPreview(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Lección {index + 1}</h4>
                        <p className={`text-sm ${index === currentLesson ? 'text-blue-100' : 'text-gray-600'}`}>
                          {lesson.title}
                        </p>
                      </div>
                      {completedLessons.includes(index) && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* HTML Preview */}
            <AnimatePresence>
              {showPreview && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="lesson-card p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Vista Previa</span>
                  </h3>
                  <div className="html-preview p-4">
                    <iframe
                      srcDoc={userCode}
                      className="w-full h-64 border-0"
                      title="HTML Preview"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Achievement Badge */}
            {completedLessons.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="lesson-card p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-3"
                  >
                    <Award className="h-12 w-12 text-yellow-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">¡Increíble Progreso!</h3>
                  <p className="text-gray-600">
                    Has completado {completedLessons.length} de {lessons.length} lecciones
                  </p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-6 w-6 ${
                          i < Math.floor((completedLessons.length / lessons.length) * 5) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default App;
