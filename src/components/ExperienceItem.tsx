
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
    <div className="group mb-12 relative pl-8 md:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-[-5px] md:left-[calc(-5px-0.5rem)] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
      
      <div className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
          <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">{company}</span>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <span className="text-slate-600 dark:text-slate-400 font-medium">{location}</span>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="flex items-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
            <Calendar size={14} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
        
        <ul className="space-y-3 mt-6">
          {description.map((item, index) => (
            <li key={index} className="flex text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="mr-3 text-blue-500 mt-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
