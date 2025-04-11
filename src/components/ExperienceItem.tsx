
import React from 'react';
import { Calendar } from 'lucide-react';

export interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  location
}: ExperienceProps) => {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-200">
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1.5"></div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-medium text-blue-600">{company}</span>
          <span className="text-gray-500">{location}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
