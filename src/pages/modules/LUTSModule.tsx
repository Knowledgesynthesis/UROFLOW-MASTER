import React from 'react';
import TabSection from '../../components/TabSection';
import { AlertTriangle, Activity } from 'lucide-react';

const LUTSModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Lower Urinary Tract Symptoms (LUTS)</h2>
        <p className="text-gray-700 dark:text-gray-300">
          LUTS encompass a variety of urinary symptoms that can be broadly categorized into
          storage (irritative) and voiding (obstructive) symptoms. Understanding this distinction
          is crucial for proper evaluation and management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
          <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
            <Activity className="mr-2" size={24} />
            Irritative (Storage) Symptoms
          </h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200">
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Urgency:</span> Sudden compelling need to void
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Frequency:</span> Voiding &gt;8 times per day
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Nocturia:</span> Waking to void ≥2 times per night
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Dysuria:</span> Painful or burning urination
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Urgency incontinence:</span> Leakage with urgency
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/40 rounded-lg">
            <p className="text-sm text-red-900 dark:text-red-100 font-semibold">Common Causes:</p>
            <p className="text-sm text-red-800 dark:text-red-200">UTI, detrusor overactivity, bladder stones, interstitial cystitis</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
            <AlertTriangle className="mr-2" size={24} />
            Obstructive (Voiding) Symptoms
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Hesitancy:</span> Difficulty initiating stream
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Weak stream:</span> Reduced force of urine flow
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Intermittency:</span> Starting and stopping
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Straining:</span> Need to push to void
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Incomplete emptying:</span> Sensation of residual urine
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div>
                <span className="font-semibold">Post-void dribbling:</span> Leakage after voiding
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold">Common Causes:</p>
            <p className="text-sm text-blue-800 dark:text-blue-200">BPH, urethral stricture, detrusor underactivity, neurogenic bladder</p>
          </div>
        </div>
      </div>
    </div>
  );

  const evaluationContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Evaluation Algorithm
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Step 1: History</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Voiding diary (3-7 days)</li>
              <li>• Symptom duration and severity</li>
              <li>• Fluid intake patterns</li>
              <li>• Medication review</li>
              <li>• Quality of life impact</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Step 2: Physical Exam</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Abdominal exam (bladder distension)</li>
              <li>• Digital rectal exam (prostate in men)</li>
              <li>• Pelvic exam (prolapse in women)</li>
              <li>• Neurologic examination</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Step 3: Basic Testing</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Urinalysis ± culture</li>
              <li>• Post-void residual (PVR)</li>
              <li>• Serum creatinine (if retention)</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Step 4: Specialized Testing (if needed)</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Urodynamics (complex cases)</li>
              <li>• Cystoscopy (hematuria, recurrent UTI)</li>
              <li>• Imaging (upper tract, bladder stones)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-100">
          Post-Void Residual (PVR) Interpretation
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <p className="font-bold text-green-900 dark:text-green-100 mb-1">Normal: &lt;50 mL</p>
            <p className="text-sm text-green-800 dark:text-green-200">Complete bladder emptying</p>
          </div>
          <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
            <p className="font-bold text-yellow-900 dark:text-yellow-100 mb-1">Borderline: 50-200 mL</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              May indicate incomplete emptying; consider repeat measurement and clinical context
            </p>
          </div>
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <p className="font-bold text-red-900 dark:text-red-100 mb-1">Elevated: &gt;200 mL</p>
            <p className="text-sm text-red-800 dark:text-red-200">
              Significant retention; evaluate for obstruction or detrusor underactivity
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const managementContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Management of Irritative LUTS
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm mr-2">
                First-Line
              </span>
              Behavioral Modifications
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 space-y-1">
              <li>Bladder training (scheduled voiding)</li>
              <li>Fluid management (avoid excess, especially before bed)</li>
              <li>Caffeine and alcohol reduction</li>
              <li>Avoid bladder irritants</li>
              <li>Weight loss if overweight</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm mr-2">
                Second-Line
              </span>
              Pharmacotherapy
            </h4>
            <div className="space-y-3 ml-6">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Antimuscarinics</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Oxybutynin, tolterodine, solifenacin, darifenacin
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Side effects: dry mouth, constipation, cognitive effects (caution in elderly)
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Beta-3 Agonist</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mirabegron - may have fewer anticholinergic side effects
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm mr-2">
                Third-Line
              </span>
              Advanced Therapies (Conceptual)
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 space-y-1">
              <li>Botulinum toxin bladder injection</li>
              <li>Sacral neuromodulation</li>
              <li>Percutaneous tibial nerve stimulation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Management of Obstructive LUTS
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              BPH-Related Obstruction
            </h4>
            <div className="space-y-3 ml-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Alpha-Blockers</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tamsulosin, alfuzosin, doxazosin - relax bladder neck
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">5-Alpha-Reductase Inhibitors</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Finasteride, dutasteride - reduce prostate size (large glands)
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Combination Therapy</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Alpha-blocker + 5-ARI for moderate-severe symptoms
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Detrusor Underactivity
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
              <li>Timed voiding</li>
              <li>Double voiding technique</li>
              <li>Clean intermittent catheterization (if severe)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">
          When to Consider Urodynamics
        </h3>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>• Mixed symptoms (difficult to categorize)</li>
          <li>• Failed initial management</li>
          <li>• Considering surgical intervention</li>
          <li>• Neurologic conditions</li>
          <li>• High PVR with unclear etiology</li>
        </ul>
      </div>
    </div>
  );

  const urodynamicsContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Understanding Urodynamics (Simplified)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Urodynamics assess bladder and urethral function during filling and voiding. Key concepts:
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Detrusor Overactivity (DO)</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">
              Involuntary bladder contractions during filling
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              <span className="font-semibold">Clinical correlation:</span> Urgency, frequency, urgency incontinence
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Detrusor Underactivity (DU)</h4>
            <p className="text-green-800 dark:text-green-200 text-sm mb-2">
              Weak or absent bladder contractions
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm">
              <span className="font-semibold">Clinical correlation:</span> Hesitancy, weak stream, incomplete emptying
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Bladder Outlet Obstruction (BOO)</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
              High pressure, low flow voiding pattern
            </p>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              <span className="font-semibold">Clinical correlation:</span> Straining, weak stream (BPH, stricture)
            </p>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-600">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Compliance</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm mb-2">
              Bladder's ability to stretch during filling
            </p>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              <span className="font-semibold">Low compliance:</span> High pressure at low volumes (neurogenic, chronic obstruction)
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'evaluation', label: 'Evaluation', content: evaluationContent },
    { id: 'management', label: 'Management', content: managementContent },
    { id: 'urodynamics', label: 'Urodynamics Basics', content: urodynamicsContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          LUTS & Voiding Dysfunction
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding and managing lower urinary tract symptoms and voiding disorders.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default LUTSModule;
