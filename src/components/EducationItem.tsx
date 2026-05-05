
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
    <div className="group h-full bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md dark:shadow-none hover:border-blue-500/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
        <GraduationCap size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{degree}</h3>
      
      <div className="flex flex-col gap-3 mb-5">
        <span className="font-semibold text-blue-600 dark:text-blue-400">{institution}</span>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          {period && (
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              <Calendar size={14} className="mr-2" />
              <span>{period}</span>
            </div>
          )}
          {location && <span>{location}</span>}
        </div>
      </div>
      
      {description && (
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default EducationItem;
