import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
  color = 'primary'
}) => {
  return (
    <Link to={path} className="group">
      <div className="card hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1">
        <div className={`flex items-center space-x-3 mb-4`}>
          <div className={`p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg`}>
            <Icon className={`text-${color}-600 dark:text-${color}-400`} size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;
