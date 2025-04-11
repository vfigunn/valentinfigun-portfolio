
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export interface EducationProps {
  institution: string;
  degree: string;
  period?: string;
  location?: string;
  description?: string;
}

const EducationItem = ({
  institution,
  degree,
  period,
  location,
  description
}: EducationProps) => {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-200">
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1.5 flex items-center justify-center">
        <GraduationCap size={12} className="text-white" />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900">{degree}</h3>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-medium text-blue-600">{institution}</span>
          <span className="text-gray-500">{location}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
        
        {description && (
          <p className="text-gray-700">{description}</p>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
