
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-1">&lt;</span>
              <span>Valentín Figun</span>
              <span className="ml-1">/&gt;</span>
            </h3>
            {/* <p className="text-gray-300 mb-4">
              Desarrollador web de Gualeguaychú, Entre Ríos, Argentina.
            </p> */}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-300 transition">Inicio</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-300 transition">Proyectos</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-blue-300 transition">Educación</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-300 transition">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Conéctate</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vfigunn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/valentinfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/vfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              vfigun@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Valentín Figun. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
