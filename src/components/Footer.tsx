
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="text-2xl font-bold mb-4 font-montserrat text-white flex items-center">
              <span className="text-blue-500 mr-1">&lt;</span>
              <span>Valentín Figun</span>
              <span className="text-blue-500 ml-1">/&gt;</span>
            </h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales con un enfoque en diseño y rendimiento.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com/vfigunn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 p-2.5 rounded-full text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/valentinfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 p-2.5 rounded-full text-slate-400 hover:text-blue-400 hover:border-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/vfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 p-2.5 rounded-full text-slate-400 hover:text-pink-400 hover:border-slate-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-bold mb-4 text-white">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition inline-block relative group">Inicio<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition inline-block relative group">Sobre mí<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition inline-block relative group">Proyectos<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-blue-400 transition inline-block relative group">Tecnologías<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <p className="text-slate-400 mb-4">
              ¿Interesado en trabajar juntos? No dudes en contactarme.
            </p>
            <a href="mailto:vfigun@gmail.com" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition group">
              <span className="bg-slate-900 p-2 rounded-full border border-slate-800 group-hover:border-slate-600 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
              </span>
              vfigun@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Valentín Figun. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado & Desarrollado en Gualeguaychú, Entre Ríos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
