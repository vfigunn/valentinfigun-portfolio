import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import EducationItem from '@/components/EducationItem';
import TechIcon from '@/components/TechIcon';
import { motion } from 'framer-motion';

import { 
  Github, Linkedin, Instagram, Mail, ArrowDown,
  Code2, ArrowRight, FileCode2, Terminal,
  Atom, Cat, ChevronsUp, Cpu, MonitorPlay, Zap,
  Download, LayoutTemplate, Server, Wrench, Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const projects = [
    {
      title: 'Loss Vial',
      description: 'Especialistas en obras civiles y movimiento de suelos. Construyendo infraestructura de calidad para nuestra comunidad.',
      image: '/images/lossvial.png',
      technologies: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://www.lossvial.com.ar/'
    },
    {
      title: 'Asukeai',
      description: 'Plataforma completa de eventos y actividades culturales en Asunción, Paraguay.',
      image: '/images/asukeai.png',
      technologies: ['React', 'Tailwind', 'Typescript'],
      demoUrl: 'https://www.asukeai.com.py/'
    },
    {
      title: 'Maldita Birra',
      description: 'Restaurant, Bar y Cervecería. Experiencia gastronómica completa e interactiva.',
      image: '/images/malditabirra.png',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: 'https://malditabirra.vercel.app/'
    },
    {
      title: 'Óptica Figún',
      description: 'Laboratorio Óptico. Sitio web informativo destacando servicios, horarios y medios de contacto.',
      image: '/images/opticafigun.png',
      technologies: ['React', 'Typescript', 'Tailwind CSS'],
      demoUrl: 'https://www.opticafigun.com.ar/'
    },
    {
      title: 'Net-G',
      description: 'Proveedor de Internet. Landing page para captación de clientes de alta performance.',
      image: '/images/net-g.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://net-g.vercel.app/'
    },
    {
      title: 'Mega Gym',
      description: 'Gimnasio Local. Promoción de actividades, membresías y vida saludable.',
      image: '/images/megagym.png',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: 'https://megagym-gchu.vercel.app/'
    },
    {
      title: 'Instituto Sedes Sapientiae',
      description: 'Instituto académico universitario. Sitio web institucional con información académica detallada.',
      image: '/images/sedessapientiae.png',
      technologies: ['React', 'Tailwind CSS', 'Typescript'],
      demoUrl: 'https://sedessapientiae.vercel.app/'
    },
    {
      title: 'EntreRios.Net',
      description: 'Proveedor de Internet. Solución web ágil para servicios de telecomunicaciones regionales.',
      image: '/images/entreriosnet.png',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: 'https://vfigunn.github.io/entreriosnet/'
    },
    {
      title: 'Proyecto Fintek',
      description: 'Prototipo de "Gestión de Finanzas Personales", un proyecto realizado para la materia "Prácticas Profesionalizantes".',
      image: '/images/proyectofintek.png',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: 'https://proyectofintek.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-500/30 dark:bg-[#0A0A0A]">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-100 dark:from-blue-950/20 dark:via-[#0A0A0A] dark:to-slate-900/40" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6"
            >
              <Zap size={16} className="mr-2 fill-current" />
              Disponible para nuevos proyectos
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
              Valentín <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Figun</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Desarrollador de Software
              <span className="block text-xl font-medium text-slate-500 dark:text-slate-400 mt-2">Apasionado por la tecnología y la innovación</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Creo experiencias digitales atractivas, accesibles y de alto rendimiento. Transformo ideas complejas en soluciones web elegantes.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 bg-blue-600 hover:bg-blue-700">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail size={18} /> Contáctame
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
                <a href="#projects" className="flex items-center gap-2">
                  <Code2 size={18} /> Ver proyectos
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="rounded-full border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <a href="/assets/ValentinFigunCV.pdf" download="Valentin_Figun_CV.pdf" className="flex items-center gap-2">
                  <Download size={18} /> Descargar CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/vfigunn", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/valentinfigun/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/vfigun/", label: "Instagram" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-md transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-2">
                <img 
                  src="/images/vf.png" 
                  alt="Valentín Figun" 
                  className="w-full h-full object-cover object-[65%_35%] rounded-[1.5rem]"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
              >
                <MonitorPlay className="w-8 h-8 text-blue-500" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
              >
                <Cpu className="w-8 h-8 text-cyan-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down" className="flex flex-col items-center group">
            <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 font-medium">Descubrir</span>
            <div className="w-8 h-12 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1 group-hover:border-blue-500 transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-blue-500 rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Sobre mí</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Transformando ideas en experiencias digitales
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Soy un desarrollador de software apasionado por crear soluciones digitales que combinen excelencia técnica con diseño atractivo. 
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Mi enfoque profesional se centra en construir aplicaciones web modernas, accesibles y optimizadas que brinden una experiencia excepcional al usuario final. Estoy constantemente aprendiendo nuevas tecnologías y mejorando mis habilidades para mantenerme al día con las últimas tendencias de la industria.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button variant="default" size="lg" asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <a href="#experience" className="flex items-center gap-2">
                    <FileCode2 size={18} /> Ver experiencia
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <a 
                    href="https://www.linkedin.com/in/valentinfigun/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={18} /> Conectar en LinkedIn
                  </a>
                </Button>

                <Button variant="secondary" size="lg" asChild className="rounded-full">
                  <a href="/assets/ValentinFigunCV.pdf" download="Valentin_Figun_CV.pdf" className="flex items-center gap-2">
                    <Download size={18} /> Mi Currículum
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000" 
                  alt="Coding Workspace" 
                  className="w-full h-80 md:h-96 object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experiencia Laboral</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2"></div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <ExperienceItem
                title="Desarrollador Web Freelance"
                company="Autónomo"
                period=" 2023 - Presente"
                description={[
                  "Diseño y desarrollo de sitios web personalizados para clientes.",
                  "Mantenimiento y actualización de sitios web existentes.",
                  "Optimización SEO y experiencia de usuario.",
                  "Consultoría tecnológica para empresas locales."
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <ExperienceItem
                title="Cross-Border Trader"
                company="Bitex"
                period=" 2019 - 2023"
                location="Buenos Aires, Argentina"
                description={[
                  "Análisis y gestión de cotizaciones para transacciones internacionales.",
                  "Coordinación con equipos comerciales en transacciones complejas.",
                  "Resolución de incidencias operativas para garantizar eficiencia."
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <ExperienceItem
                title="Analista de Altas y Compliance"
                company="Bitex"
                period=" 2017 - 2019"
                location="Buenos Aires, Argentina"
                description={[
                  "Registro y validación de nuevos usuarios según procedimientos internos.",
                  "Verificación documental y cumplimiento de normativas KYC/AML.",
                  "Procesamiento de depósitos y control de transacciones bancarias.",
                  "Detección de alertas y prevención de operaciones sospechosas."
                ]}
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <ExperienceItem
                title="Administrativo"
                company="Óptica Figun"
                period="2015 - 2016"
                location="Gualeguaychú, Entre Ríos"
                description={[
                  "Recepción y asesoramiento a clientes en la selección de productos.",
                  "Manejo de operaciones de cobro, cierres de caja.",
                  "Gestión de inventarios, registro de ventas y coordinación con proveedores."
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="section bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Educación</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <EducationItem
                institution="IDS | Instituto Data Science"
                degree="Diplomatura en Inteligencia Artificial con Python"
                period="2025 - Presente"
                description="Formación integral en IA, abarcando desde conceptos fundamentales y análisis de datos hasta el desarrollo de modelos de Machine Learning y automatización de procesos."
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, delay: 0.1 }}>
              <EducationItem
                institution="IPSS | Instituto Sedes Sapientiae"
                degree="Tecnicatura Superior en Análisis y Desarrollo de Software"
                period="2024 - Presente"
                description="Formación técnica en programación, redes, sistemas operativos y hardware."
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, delay: 0.2 }}>
              <EducationItem
                institution="DS4B | Data Science For Business"
                degree="Análisis y Visualización de Datos"
                period="2024"
                description="Capacitación en limpieza de datos, análisis y visualización mediante Power BI, trabajando con fuentes de datos en Excel y bases de datos SQL."
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, delay: 0.3 }}>
              <EducationItem
                institution="UTN | Universidad Tecnológica Nacional"
                degree="Diplomatura en Programación Web Full Stack"
                period="2023 - 2024"
                description="Curso de HTML, CSS, JavaScript, React, Node.js, Express y SQL."
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Proyectos Destacados</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Una selección de mis trabajos recientes, demostrando mi capacidad para crear interfaces atractivas y aplicaciones funcionales de alto rendimiento.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700">
              <a 
                href="https://github.com/vfigunn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} /> Explorar más en GitHub <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section bg-white dark:bg-[#0A0A0A] overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Stack Tecnológico</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <LayoutTemplate size={120} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <LayoutTemplate size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "React & Next.js", level: 90 },
                  { name: "TypeScript / JavaScript", level: 85 },
                  { name: "Tailwind CSS", level: 95 },
                  { name: "HTML5 & CSS3", level: 95 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Server size={120} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-2xl">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend & Data</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { name: "Node.js", icon: Terminal },
                  { name: "Express", icon: Server },
                  { name: "SQL", icon: Database },
                  { name: "Python", icon: Code2 },
                  { name: "IA / ML", icon: Atom }
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <tech.icon size={16} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Herramientas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Wrench size={120} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Herramientas</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { name: "Git", icon: Terminal },
                  { name: "GitHub", icon: Cat },
                  { name: "VS Code", icon: Code2 },
                  { name: "Figma", icon: LayoutTemplate },
                  { name: "Postman", icon: Server },
                  { name: "Vercel", icon: ChevronsUp }
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <tech.icon size={16} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section bg-slate-100 dark:bg-slate-900 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Hablemos</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              ¿Tenés un proyecto en mente o querés trabajar juntos? Me encantaría conocer más sobre tus ideas.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white dark:bg-[#0A0A0A] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 p-8 md:p-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
