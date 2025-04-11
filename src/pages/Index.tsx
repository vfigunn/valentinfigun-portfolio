
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
  LayoutTemplate, Server, Terminal,
  Atom,
  Cat,
  ChevronsDownUp,
  ChevronsDown,
  ChevronsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollRef = useScrollAppear();

  const projects = [
    {
      title: 'Óptica Figún',
      description: '​Sitio web informativo para una óptica familiar, que destaca sus servicios, horarios y medios de contacto.',
      image: '/images/opticafigun.png',
      technologies: ['React', 'Typescript', 'Tailwind CSS'],
      demoUrl: 'https://www.opticafigun.com.ar/',
      repoUrl: 'https://github.com/vfigunn/opticafigun'
    },
    {
      title: 'EnGualeguaychú',
      description: 'Plataforma creada con la intención de informar y dar a conocer comercios locales Gualeguaychú.',
      image: '/images/engualeguaychu.png',
      technologies: ['React', 'Tailwind CSS', 'Typescript'],
      demoUrl: 'https://engualeguaychu.vercel.app/',
      repoUrl: 'https://github.com/vfigunn/engualeguaychu'
    },
    {
      title: 'Instituto Sedes Sapientiae',
      description: 'Sitio web institucional para un establecimiento educativo con información académica.',
      image: '/images/sedessapientiae.png',
      technologies: ['React', 'Tailwind', 'Typescript'],
      demoUrl: 'https://sedessapientiae.vercel.app/',
      repoUrl: 'https://github.com/vfigunn/sedessapientiae'
    },
    {
      title: 'Asukeai',
      description: 'Sitio web creado con el objetivo de difundir los eventos culutrales que se realizan en Asunción Paraguay.',
      image: '/images/asukeai.png',
      technologies: ['React', 'Tailwind', 'Typescript'],
      demoUrl: 'https://asukeai.vercel.app/',
      repoUrl: 'https://github.com/vfigunn/asukeai'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-500" ref={scrollRef}>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-500 pt-16">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-blue-700 font-semibold mb-2">¡Hola! Soy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Valentín <span className="text-blue-500">Figun</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            Estudiante de Desarrollo de Sowftare <br />Apasionado por la tecnología y la innovación
            </h2>
            {/* <p className="text-xl text-gray-600 mb-8">
            Estudiante de Desarrollo de Sowftare | Apasionado por la tecnología y la innovación
            </p> */}
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button asChild>
                <a href="#contact" className="flex items-center gap-2 ">
                  <Mail size={18} /> Contáctame
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
                href="https://github.com/vfigunn" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/valentinfigun/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/vfigun/" 
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
            <div className="w-44 h-44 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/images/yo.png" 
                alt="Valentín Figun" 
                className="w-full h-full object-cover object-[65%_35%]"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-transparent md:text-blue-500" />
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
                <p className="text-lg font-light mb-4">
                  Soy un estudiante de desarrollo de software apasionado por crear soluciones digitales que combinen excelencia técnica con diseño atractivo. 
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
                      href="https://www.linkedin.com/in/valentinfigun/" 
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
                <div className="w-full h-80 rounded-lg bg-white-100 transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000" 
                  alt="Coding" 
                  className="relative inset-0 w-full h-80 object-cover rounded-lg shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-300"
                /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Experiencia Laboral</h2>
          
          <div className="max-w-3xl mx-auto">            
            <div className="scroll-appear">
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
            </div>

            <div className="scroll-appear">
              <ExperienceItem
                title="Cross-Border Trader"
                company="Bitex"
                period=" 2019 - 2023"
                location="| Buenos Aires, Argentina"
                description={[
                  "Análisis y gestión de cotizaciones para transacciones internacionales.",
                  "Coordinación con equipos comerciales en transacciones complejas. ",
                  "Resolución de incidencias operativas para garantizar eﬁciencia."
                ]}
              />
              <ExperienceItem
                title="Analista de Altas y Compliance"
                company="Bitex"
                period=" 2017 - 2019"
                location="| Buenos Aires, Argentina"
                description={[
                  "Registro y validación de nuevos usuarios según procedimientos internos.",
                  "Veriﬁcación documental y cumplimiento de normativas KYC/AML. ",
                  "Procesamiento de depósitos y control de transacciones bancarias.",
                  "Detección de alertas y prevención de operaciones sospechosas. "
                ]}
              />
            </div>
            
            <div className="scroll-appear">
              <ExperienceItem
                title="Administrativo"
                company="Óptica Figun "
                period="2015 - 2016"
                location="| Gualeguaychú, Entre Ríos"
                description={[
                  "Recepción y asesoramiento a clientes en la selección de productos. ",
                  "Manejo de operaciones de cobro, cierres de caja. ",
                  "Gestión de inventarios, registro de ventas y coordinación con proveedores."
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
                institution="IPSS | Instituto Sedes Sapientiae"
                degree="Tecnicatura Superior en Análisis y Desarrollo de Software"
                period="2024 - Presente"
                description="Formación técnica en programación, redes, sistemas operativos y hardware."
              />
            </div>

            <div className="scroll-appear">
              <EducationItem
                institution="DS4B | Data Science For Business"
                degree="Análisis y Visualización de Datos"
                period="2024"
                description="Capacitación en limpieza de datos, análisis y visualización mediante Power BI, trabajando con fuentes de datos en Excel y bases de datos SQL."
              />
            </div>
            
            <div className="scroll-appear">
              <EducationItem
                institution="UTN | Universidad Tecnológica Nacional "
                degree="Diplomatura en Programación Web Full Stack"
                period="2023 - 2024"
                description="Curso intensivo de HTML, CSS, JavaScript y React."
              />
            </div>
            
            
            <div className="scroll-appear">
              <EducationItem
                institution="ICB | Instituto de Capacitación Bursátil "
                degree="IPRO | Inversor Profesional de Mercado de Valores "
                period="2022"
                description="Estudio de los mercados de valores, incluyendo la negociación de acciones, bonos, y otros instrumentos, así como la comprensión de las regulaciones que rigen estos mercados."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section bg-gray-100">
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
                href="https://github.com/vfigunn" 
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 max-w-4xl mx-auto">
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
              <TechIcon icon={Atom} name="React" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={Code2} name="Next.js" />
            </div>
            <div className="scroll-appear">
              <TechIcon icon={ChevronsUp} name="Tailwind" />
            </div>
            {/* <div className="scroll-appear">
              <TechIcon icon={Database} name="MongoDB" />
            </div> */}
            {/* <div className="scroll-appear">
              <TechIcon icon={Server} name="Node.js" />
            </div> */}
            <div className="scroll-appear">
              <TechIcon icon={Cat} name="Github" />
            </div>
            {/* <div className="scroll-appear">
              <TechIcon icon={Globe} name="REST API" />
            </div> */}
            {/* <div className="scroll-appear">
              <TechIcon icon={Database} name="Firebase" />
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section bg-gray-200">
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
