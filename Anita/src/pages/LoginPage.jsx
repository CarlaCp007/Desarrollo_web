
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { LogIn, User, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password') {
      login({ email, name: "Admin User" });
      toast({
        title: "¡Inicio de Sesión Exitoso!",
        description: "Bienvenido/a de nuevo.",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        title: "Error de Autenticación",
        description: "Correo o contraseña incorrectos. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-[70vh] py-12"
    >
      <Card className="w-full max-w-md shadow-2xl glassmorphism-card">
        <CardHeader className="text-center">
          <LogIn className="h-12 w-12 mx-auto mb-4 text-primary" />
          <CardTitle className="text-3xl font-bold text-gray-800">Iniciar Sesión</CardTitle>
          <CardDescription className="text-gray-600">Accede al panel de administración.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="pl-10 bg-white/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
               <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="pl-10 bg-white/50"
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
              Acceder
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-xs text-gray-500">
            Credenciales de prueba: admin@example.com / password
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginPage;
