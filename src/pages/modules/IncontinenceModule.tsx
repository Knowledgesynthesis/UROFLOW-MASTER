import React from 'react';
import TabSection from '../../components/TabSection';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

const IncontinenceModule: React.FC = () => {
  const incontinenceTypes = [
    {
      name: 'Stress Incontinence',
      definition: 'Involuntary leakage with increased intra-abdominal pressure',
      triggers: ['Coughing', 'Sneezing', 'Laughing', 'Exercise', 'Lifting'],
      pathophysiology: 'Urethral hypermobility or intrinsic sphincter deficiency',
      physicalExam: ['Pelvic exam for prolapse', 'Cough stress test', 'Q-tip test (urethral mobility)'],
      firstLine: ['Pelvic floor physical therapy', 'Kegel exercises', 'Pessary'],
      secondLine: ['Bulking agents (educational)', 'Mid-urethral sling (conceptual)'],
    },
    {
      name: 'Urge Incontinence',
      definition: 'Sudden compelling urge to void followed by involuntary leakage',
      triggers: ['Sudden urge', 'Key-in-door syndrome', 'Running water', 'Cold weather'],
      pathophysiology: 'Detrusor overactivity - involuntary bladder contractions',
      physicalExam: ['Rule out UTI', 'Neurologic exam', 'Post-void residual'],
      firstLine: ['Bladder training', 'Timed voiding', 'Fluid management', 'Caffeine reduction'],
      secondLine: ['Antimuscarinics (oxybutynin, tolterodine)', 'Beta-3 agonists (mirabegron)'],
    },
    {
      name: 'Mixed Incontinence',
      definition: 'Combination of stress and urge incontinence symptoms',
      triggers: ['Both stress and urge triggers present'],
      pathophysiology: 'Combined mechanisms of urethral dysfunction and detrusor overactivity',
      physicalExam: ['Comprehensive pelvic exam', 'PVR measurement', 'Cough stress test'],
      firstLine: ['Address predominant symptom first', 'Pelvic floor therapy', 'Behavioral modifications'],
      secondLine: ['May require combination therapy'],
    },
    {
      name: 'Overflow Incontinence',
      definition: 'Leakage from overdistended bladder with incomplete emptying',
      triggers: ['Constant dribbling', 'Weak stream', 'Incomplete emptying sensation'],
      pathophysiology: 'Detrusor underactivity or bladder outlet obstruction',
      physicalExam: ['Elevated PVR (>200 mL)', 'Palpable bladder', 'Neurologic exam'],
      firstLine: ['Treat underlying obstruction', 'Alpha-blockers if BPH', 'Intermittent catheterization'],
      secondLine: ['Address underlying cause (stricture, prolapse, neurologic)'],
    },
    {
      name: 'Functional Incontinence',
      definition: 'Inability to reach toilet in time due to physical or cognitive impairments',
      triggers: ['Mobility limitations', 'Cognitive impairment', 'Environmental barriers'],
      pathophysiology: 'Normal bladder function but external barriers to continence',
      physicalExam: ['Mobility assessment', 'Cognitive evaluation', 'Medication review'],
      firstLine: ['Scheduled toileting', 'Environmental modifications', 'Assistive devices'],
      secondLine: ['Caregiver education', 'Continence products'],
    },
  ];

  const transientCauses = {
    mnemonic: 'DIAPPERS',
    causes: [
      { letter: 'D', meaning: 'Delirium' },
      { letter: 'I', meaning: 'Infection (UTI)' },
      { letter: 'A', meaning: 'Atrophic urethritis/vaginitis' },
      { letter: 'P', meaning: 'Pharmaceuticals (diuretics, sedatives, anticholinergics)' },
      { letter: 'P', meaning: 'Psychological (depression)' },
      { letter: 'E', meaning: 'Excess fluid intake' },
      { letter: 'R', meaning: 'Restricted mobility' },
      { letter: 'S', meaning: 'Stool impaction' },
    ],
  };

  const overviewContent = (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Urinary Incontinence</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Urinary incontinence is the involuntary leakage of urine. It's a common condition affecting
          millions of people, particularly women and older adults. Understanding the different types
          is crucial for proper evaluation and management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {incontinenceTypes.map((type, index) => (
          <div key={index} className="card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
              {type.name}
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              {type.definition}
            </p>
          </div>
        ))}
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center">
          <Info className="mr-2" size={24} />
          DIAPPERS Mnemonic - Transient Causes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {transientCauses.causes.map((cause, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="font-bold text-yellow-700 dark:text-yellow-300 text-lg">
                {cause.letter}:
              </span>
              <span className="text-yellow-800 dark:text-yellow-200">{cause.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const pathophysiologyContent = (
    <div className="space-y-6">
      {incontinenceTypes.map((type, index) => (
        <div key={index} className="card">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            {type.name}
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mechanism:</h4>
              <p className="text-gray-600 dark:text-gray-400">{type.pathophysiology}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Common Triggers:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {type.triggers.map((trigger, i) => (
                  <li key={i}>{trigger}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const evaluationContent = (
    <div className="space-y-6">
      <div className="card bg-blue-50 dark:bg-blue-900/20">
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
          Physical Examination Elements
        </h3>
        <div className="space-y-4">
          {incontinenceTypes.map((type, index) => (
            <div key={index}>
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{type.name}:</h4>
              <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 ml-4">
                {type.physicalExam.map((exam, i) => (
                  <li key={i}>{exam}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Essential Diagnostic Steps
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">History & Symptom Assessment</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Detailed voiding diary, trigger identification</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Urinalysis</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rule out UTI, hematuria, glucosuria</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Post-Void Residual (PVR)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assess for retention/overflow</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Pelvic Examination</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assess for prolapse, pelvic floor strength</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const managementContent = (
    <div className="space-y-6">
      {incontinenceTypes.map((type, index) => (
        <div key={index} className="card">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {type.name} Management
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                  First-Line
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                {type.firstLine.map((treatment, i) => (
                  <li key={i}>{treatment}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                  Second-Line
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                {type.secondLine.map((treatment, i) => (
                  <li key={i}>{treatment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100 flex items-center">
          <AlertCircle className="mr-2" size={24} />
          Red Flags - When to Refer
        </h3>
        <ul className="space-y-2 text-red-800 dark:text-red-200">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Hematuria without infection</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Pelvic pain or masses</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Recurrent UTIs (≥3 per year)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Neurologic symptoms</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Failed conservative management</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Significant pelvic organ prolapse</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'pathophysiology', label: 'Pathophysiology', content: pathophysiologyContent },
    { id: 'evaluation', label: 'Evaluation', content: evaluationContent },
    { id: 'management', label: 'Management', content: managementContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Urinary Incontinence Types
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive guide to understanding, evaluating, and managing different types of urinary incontinence.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default IncontinenceModule;
