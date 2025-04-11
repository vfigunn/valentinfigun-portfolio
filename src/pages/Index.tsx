
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import EducationItem from '@/components/EducationItem';
import TechIcon from '@/components/TechIcon';
import { useScrollAppear } from '@/utils/useScrollAppear';
import { 
  Github, Linkedin, Instagram, Mail, ArrowDown,
  Globe, Code2, ArrowRight, FileCode2, Database,
  LayoutTemplate, Server, Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollRef = useScrollAppear();

  const projects = [
    {
      title: 'Óptica Figun',
      description: 'Sitio web para una óptica familiar con catálogo de productos y sistema de consultas.',
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      demoUrl: 'https://www.opticafigun.com.ar/',
      repoUrl: 'https://github.com/valentinfigun/optica-figun'
    },
    {
      title: 'En Gualeguaychú',
      description: 'Plataforma turística con información y guía de lugares de interés en Gualeguaychú.',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Google Maps API'],
      demoUrl: 'https://engualeguaychu.vercel.app/',
      repoUrl: 'https://github.com/valentinfigun/engualeguaychu'
    },
    {
      title: 'Instituto Sedes Sapientiae',
      description: 'Sitio web institucional para un establecimiento educativo con información académica.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000',
      technologies: ['React', 'CSS Modules', 'Vercel'],
      demoUrl: 'https://sedessapientiae.vercel.app/',
      repoUrl: 'https://github.com/valentinfigun/sedes-web'
    },
    {
      title: 'Asuke AI',
      description: 'Proyecto de inteligencia artificial con interfaz web interactiva para asistencia.',
      image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=1000',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI API'],
      demoUrl: 'https://asukeai.vercel.app/',
      repoUrl: 'https://github.com/valentinfigun/asuke-ai'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" ref={scrollRef}>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 pt-16">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-blue-500 font-semibold mb-2">¡Hola! Soy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Valentín <span className="text-blue-500">Figun</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              Desarrollador Web
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Creando experiencias web modernas y accesibles desde Gualeguaychú, Entre Ríos, Argentina.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Mail size={18} /> Contactame
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  <Code2 size={18} /> Ver proyectos
                </a>
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/valentinfigun" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/valentin-figun/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/valentinfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                alt="Valentín Figun" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-blue-500" />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre mí</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="scroll-appear">
                <p className="text-lg mb-4">
                  Soy un desarrollador web apasionado por crear soluciones digitales que combinen excelencia técnica con diseño atractivo. Con base en Gualeguaychú, Entre Ríos, me especializo en desarrollo frontend con React y diseño de interfaces de usuario.
                </p>
                
                <p className="text-lg mb-6">
                  Mi enfoque profesional se centra en construir aplicaciones web modernas, accesibles y optimizadas que brinden una experiencia excepcional al usuario final. Estoy constantemente aprendiendo nuevas tecnologías y mejorando mis habilidades para mantenerme al día con las últimas tendencias de la industria.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" asChild>
                    <a href="#experience" className="flex items-center gap-2">
                      <FileCode2 size={18} /> Ver experiencia
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a 
                      href="https://www.linkedin.com/in/valentin-figun/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin size={18} /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative max-w-md">
                <div className="w-full h-80 rounded-lg bg-blue-100 transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000" 
                  alt="Coding" 
                  className="absolute inset-0 w-full h-80 object-cover rounded-lg shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Experiencia Laboral</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="scroll-appear">
              <ExperienceItem
                title="Desarrollador Frontend"
                company="Bitex"
                period="Enero 2021 - Presente"
                location="Buenos Aires, Argentina (Remoto)"
                description={[
                  "Desarrollo de interfaces de usuario para plataforma de criptomonedas utilizando React y TypeScript.",
                  "Implementación de mejoras en la UX/UI basadas en feedback de usuarios.",
                  "Colaboración en equipos multidisciplinarios utilizando metodologías ágiles.",
                  "Optimización de rendimiento y tiempos de carga en aplicaciones frontend.",
                  "Mantenimiento y actualización de componentes en design system propio."
                ]}
              />
            </div>
            
            <div className="scroll-appear">
              <ExperienceItem
                title="Desarrollador Web Freelance"
                company="Independiente"
                period="Marzo 2018 - Presente"
                location="Gualeguaychú, Entre Ríos"
                description={[
                  "Diseño y desarrollo de sitios web personalizados para clientes locales y nacionales.",
                  "Implementación de soluciones e-commerce y landing pages.",
                  "Mantenimiento y actualización de sitios web existentes.",
                  "Optimización SEO y experiencia de usuario.",
                  "Consultoría tecnológica para empresas locales."
                ]}
              />
            </div>
            
            <div className="scroll-appear">
              <ExperienceItem
                title="Asistente Técnico IT"
                company="Instituto Sedes Sapientiae"
                period="Marzo 2016 - Diciembre 2019"
                location="Gualeguaychú, Entre Ríos"
                description={[
                  "Soporte técnico a docentes y administrativos.",
                  "Mantenimiento de equipos informáticos y red local.",
                  "Desarrollo y mantenimiento del sitio web institucional.",
                  "Capacitación a personal en herramientas digitales.",
                  "Administración de sistemas de gestión educativa."
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Educación</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="scroll-appear">
              <EducationItem
                institution="Instituto Sedes Sapientiae"
                degree="Técnico en Informática Profesional y Personal"
                period="2014 - 2019"
                location="Gualeguaychú, Entre Ríos"
                description="Formación técnica en programación, redes, sistemas operativos y hardware."
              />
            </div>
            
            <div className="scroll-appear">
              <EducationItem
                institution="Coderhouse"
                degree="Desarrollo Web Frontend"
                period="2020"
                location="Online"
                description="Curso intensivo de HTML, CSS, JavaScript y React."
              />
            </div>
            
            <div className="scroll-appear">
              <EducationItem
                institution="Platzi"
                degree="Escuela de JavaScript"
                period="2021"
                location="Online"
                description="Programa completo de desarrollo JavaScript y frameworks modernos."
              />
            </div>
            
            <div className="scroll-appear">
              <EducationItem
                institution="freeCodeCamp"
                degree="Certificación Responsive Web Design"
                period="2019"
                location="Online"
                description="Proyecto práctico de 300 horas sobre diseño web adaptable."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="scroll-appear">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <a 
                href="https://github.com/valentinfigun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} /> Ver más proyectos <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tecnologías</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <div className="scroll-appear">
              <TechIcon icon={FileCode2} name="HTML" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={FileCode2} name="CSS" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={FileCode2} name="JavaScript" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={FileCode2} name="TypeScript" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Code2} name="React" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Code2} name="Next.js" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={LayoutTemplate} name="Tailwind" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Database} name="MongoDB" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Server} name="Node.js" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Terminal} name="Git" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Globe} name="REST API" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Database} name="Firebase" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contacto</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-lg text-gray-600 mb-8">
              ¿Tenés un proyecto en mente o querés trabajar juntos? ¡No dudes en contactarme!
            </p>
            
            <div className="scroll-appear">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
