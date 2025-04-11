
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechIconProps {
  icon: LucideIcon;
  name: string;
}

const TechIcon = ({ icon: Icon, name }: TechIconProps) => {
  return (
    <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-110">
      <div className="w-16 h-16 flex items-center justify-center mb-2 text-blue-500 dark:text-blue-400">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <span className="font-medium dark:text-gray-200">{name}</span>
    </div>
  );
};

export default TechIcon;
