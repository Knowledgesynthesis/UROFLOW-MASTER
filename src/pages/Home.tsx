import React from 'react';
import ModuleCard from '../components/ModuleCard';
import {
  Droplet,
  Activity,
  Heart,
  Users,
  User,
  Brain,
  Stethoscope,
  ClipboardList,
  GraduationCap
} from 'lucide-react';

const Home: React.FC = () => {
  const modules = [
    {
      title: 'Urinary Incontinence',
      description: 'Learn about stress, urge, mixed, overflow, functional, and transient incontinence with pathophysiology and management.',
      icon: Droplet,
      path: '/incontinence',
    },
    {
      title: 'LUTS & Voiding Dysfunction',
      description: 'Explore irritative vs obstructive LUTS, evaluation algorithms, and management strategies.',
      icon: Activity,
      path: '/luts',
    },
    {
      title: 'Pelvic Floor Disorders',
      description: 'Understand pelvic organ prolapse, pelvic floor dysfunction, and their relationship to incontinence.',
      icon: Heart,
      path: '/pelvic-floor',
    },
    {
      title: 'Female-Urology Interface',
      description: 'Postpartum issues, menopause effects, and pregnancy-related urinary concerns.',
      icon: Users,
      path: '/female-interface',
    },
    {
      title: 'Male-Urology Interface',
      description: 'BPH-related LUTS, prostate enlargement, and overflow patterns in men.',
      icon: User,
      path: '/male-interface',
    },
    {
      title: 'Neurologic Bladder',
      description: 'Neurogenic bladder disorders, spinal cord lesions, and management approaches.',
      icon: Brain,
      path: '/neurogenic',
    },
    {
      title: 'Diagnostic Tools',
      description: 'Interactive PVR interpreter, bladder diaries, urodynamics basics, and evaluation tools.',
      icon: Stethoscope,
      path: '/diagnostics',
    },
    {
      title: 'Management Framework',
      description: 'Stepwise approach from conservative to pharmacologic to procedural management.',
      icon: ClipboardList,
      path: '/management',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to UroFlow Master
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive educational platform for learning about urinary incontinence,
          pelvic floor disorders, and lower urinary tract symptoms (LUTS).
        </p>
      </div>

      {/* Educational Disclaimer */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-12">
        <div className="flex items-start space-x-3">
          <GraduationCap className="text-blue-600 dark:text-blue-400 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Educational Purpose Only
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              This app is designed for educational and training purposes. It does not provide
              medical advice and should not be used for clinical decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
            icon={module.icon}
            path={module.path}
          />
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Assessment Center
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Test your knowledge with interactive questions and case scenarios.
          </p>
          <a href="/assessment" className="btn-primary inline-block">
            Start Assessment
          </a>
        </div>

        <div className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Medical Glossary
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Quick reference for urologic and urogynecologic terminology.
          </p>
          <a href="/glossary" className="btn-primary inline-block">
            Browse Glossary
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
