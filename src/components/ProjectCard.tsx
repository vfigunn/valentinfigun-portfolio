
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl
}: ProjectProps) => {
  return (
    <div className="project-card bg-white">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex gap-2">
            <Button asChild variant="default" size="sm" className="rounded-full">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink size={16} /> Demo
              </a>
            </Button>
            
            {repoUrl && (
              <Button asChild variant="outline" size="sm" className="bg-white/20 backdrop-blur-sm rounded-full">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github size={16} /> Repo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
