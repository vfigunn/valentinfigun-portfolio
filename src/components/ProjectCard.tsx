
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
  index = 0
}: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        <img
          src={image}
          alt={title}
          className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
          <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Button asChild variant="default" size="sm" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} /> Visitar Sitio
              </a>
            </Button>
            
            {repoUrl && (
              <Button asChild variant="outline" size="sm" className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-md">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} /> Código
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/30 px-3 py-1 text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
