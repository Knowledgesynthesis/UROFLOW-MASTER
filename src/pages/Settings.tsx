import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Info, Shield, GraduationCap } from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Settings
      </h1>

      {/* Theme Toggle */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Appearance</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Theme</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Choose between light and dark mode
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            {theme === 'light' ? (
              <>
                <Moon size={20} />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun size={20} />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* About the App */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Info className="mr-2" size={24} />
          About UroFlow Master
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>UroFlow Master</strong> is a comprehensive educational platform designed to teach
            healthcare professionals and students about urinary incontinence, pelvic floor disorders,
            and lower urinary tract symptoms (LUTS).
          </p>
          <p>
            The app covers eight major modules:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Urinary Incontinence Types</li>
            <li>LUTS & Voiding Dysfunction</li>
            <li>Pelvic Floor Disorders</li>
            <li>Female Reproductive-Urology Interface</li>
            <li>Male Reproductive-Urology Interface</li>
            <li>Neurogenic Bladder Disorders</li>
            <li>Diagnostic Tools</li>
            <li>Stepwise Management Framework</li>
          </ul>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
            <p className="flex items-start">
              <GraduationCap className="mr-2 flex-shrink-0 text-blue-600" size={20} />
              <span className="text-blue-900 dark:text-blue-100 text-sm">
                This application is designed for educational purposes to help medical professionals,
                residents, and students master urologic and urogynecologic concepts through interactive
                learning modules and clinical scenarios.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Educational Disclaimer */}
      <div className="card mb-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h2 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100 flex items-center">
          <Shield className="mr-2" size={24} />
          Educational Disclaimer
        </h2>
        <div className="space-y-4 text-yellow-800 dark:text-yellow-200">
          <p className="font-semibold">
            IMPORTANT: This app is for educational and training purposes only.
          </p>
          <p>
            The information provided in UroFlow Master is intended to supplement, not substitute for,
            the knowledge, expertise, and judgment of healthcare professionals. The content should not
            be used for:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Diagnosing medical conditions</li>
            <li>Making treatment decisions</li>
            <li>Replacing clinical judgment</li>
            <li>Providing medical advice to patients</li>
          </ul>
          <p>
            All case scenarios and examples use synthetic data for educational purposes. Any resemblance
            to real patients or clinical situations is purely coincidental.
          </p>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <h2 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">
          Medical Disclaimer
        </h2>
        <div className="space-y-4 text-red-800 dark:text-red-200 text-sm">
          <p>
            <strong>No Doctor-Patient Relationship:</strong> Use of this application does not create
            a doctor-patient relationship between users and the app creators.
          </p>
          <p>
            <strong>No Medical Advice:</strong> The content is for educational purposes only and does
            not constitute medical advice. Always consult qualified healthcare professionals for
            medical conditions.
          </p>
          <p>
            <strong>Clinical Guidelines:</strong> While the app references evidence-based practices
            and clinical guidelines, medical knowledge evolves. Users should verify information with
            current medical literature and institutional protocols.
          </p>
          <p>
            <strong>No Liability:</strong> The creators of UroFlow Master are not liable for any
            decisions made based on information in this app. Clinical decisions should be made by
            qualified healthcare professionals based on individual patient assessment.
          </p>
          <p>
            <strong>Emergency Situations:</strong> This app is not intended for use in emergency
            situations. Always seek immediate medical attention for urgent medical conditions.
          </p>
        </div>
      </div>

      {/* Version Info */}
      <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>UroFlow Master v1.0.0</p>
        <p className="mt-1">© 2024 UroFlow Master. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Settings;
