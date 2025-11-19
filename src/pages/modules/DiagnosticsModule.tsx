import React, { useState } from 'react';
import TabSection from '../../components/TabSection';
import { Stethoscope, Activity } from 'lucide-react';

const DiagnosticsModule: React.FC = () => {
  const [pvrValue, setPvrValue] = useState<string>('');
  const [pvrResult, setPvrResult] = useState<{interpretation: string, meaning: string, actions: string[], color: string} | null>(null);

  const interpretPVR = () => {
    const value = parseFloat(pvrValue);
    if (isNaN(value) || value < 0) {
      setPvrResult({
        interpretation: 'Invalid Input',
        meaning: 'Please enter a valid PVR value',
        actions: [],
        color: 'gray'
      });
      return;
    }

    if (value < 50) {
      setPvrResult({
        interpretation: 'Normal',
        meaning: 'Complete bladder emptying',
        actions: ['No immediate concern', 'Continue routine monitoring'],
        color: 'green'
      });
    } else if (value >= 50 && value <= 200) {
      setPvrResult({
        interpretation: 'Borderline Elevated',
        meaning: 'May indicate incomplete emptying',
        actions: [
          'Consider repeat measurement',
          'Evaluate clinical context',
          'May be normal in some individuals',
          'Monitor for symptoms'
        ],
        color: 'yellow'
      });
    } else {
      setPvrResult({
        interpretation: 'Elevated',
        meaning: 'Significant retention - incomplete bladder emptying',
        actions: [
          'Evaluate for obstruction (BPH, stricture, prolapse)',
          'Assess for detrusor underactivity',
          'Consider neurologic causes',
          'Rule out medications causing retention',
          'May need catheterization or further workup'
        ],
        color: 'red'
      });
    }
  };

  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Stethoscope className="mr-3 text-blue-600" size={32} />
          Diagnostic Tools in Urology
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Understanding how to use and interpret basic urologic diagnostic tools is essential
          for proper evaluation and management of urinary symptoms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Urinalysis</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Screen for infection, hematuria, proteinuria, and other abnormalities
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">Post-Void Residual</h3>
            <p className="text-sm text-green-800 dark:text-green-200">
              Measure remaining urine after voiding to assess emptying
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Bladder Diary</h3>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Track voiding patterns, volumes, and symptom triggers
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Urinalysis Interpretation
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Positive Leukocyte Esterase or Nitrites</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Suggests UTI - confirm with culture if symptomatic
            </p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Hematuria (Blood)</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Microscopic (non-visible) or gross (visible) - requires evaluation for stones, infection, malignancy
            </p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Proteinuria</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              May indicate kidney disease - quantify with spot protein/creatinine ratio
            </p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Glucosuria</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Screen for diabetes mellitus
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const pvrContent = (
    <div className="space-y-6">
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Activity className="mr-3 text-blue-600" size={28} />
          Interactive PVR Interpreter
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Enter a post-void residual value to learn about its interpretation and clinical significance.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Enter PVR Value (mL):
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                value={pvrValue}
                onChange={(e) => setPvrValue(e.target.value)}
                placeholder="e.g., 150"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button
                onClick={interpretPVR}
                className="btn-primary"
              >
                Interpret
              </button>
            </div>
          </div>

          {pvrResult && (
            <div className={`p-6 rounded-lg border-2 ${
              pvrResult.color === 'green' ? 'bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700' :
              pvrResult.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700' :
              pvrResult.color === 'red' ? 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-700' :
              'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
            }`}>
              <div className="mb-4">
                <h4 className={`text-2xl font-bold mb-2 ${
                  pvrResult.color === 'green' ? 'text-green-900 dark:text-green-100' :
                  pvrResult.color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
                  pvrResult.color === 'red' ? 'text-red-900 dark:text-red-100' :
                  'text-gray-900 dark:text-gray-100'
                }`}>
                  {pvrResult.interpretation}
                </h4>
                <p className={`text-lg ${
                  pvrResult.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  pvrResult.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-200' :
                  pvrResult.color === 'red' ? 'text-red-800 dark:text-red-200' :
                  'text-gray-800 dark:text-gray-200'
                }`}>
                  {pvrResult.meaning}
                </p>
              </div>

              {pvrResult.actions.length > 0 && (
                <div>
                  <p className={`font-semibold mb-2 ${
                    pvrResult.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    pvrResult.color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
                    pvrResult.color === 'red' ? 'text-red-900 dark:text-red-100' :
                    'text-gray-900 dark:text-gray-100'
                  }`}>
                    Clinical Actions:
                  </p>
                  <ul className={`space-y-1 ${
                    pvrResult.color === 'green' ? 'text-green-800 dark:text-green-200' :
                    pvrResult.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-200' :
                    pvrResult.color === 'red' ? 'text-red-800 dark:text-red-200' :
                    'text-gray-800 dark:text-gray-200'
                  }`}>
                    {pvrResult.actions.map((action, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          PVR Measurement Methods
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Bladder Ultrasound (Preferred)</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Non-invasive portable device estimates bladder volume. Quick and no infection risk.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Catheterization</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Direct measurement via straight catheter. Accurate but invasive with small UTI risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const bladderDiaryContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Bladder Diary (Voiding Diary)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A voiding diary is a detailed record of fluid intake, voiding times, volumes, and
          incontinence episodes. It provides objective data about bladder function patterns.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">What to Record</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Time of each void</li>
              <li>• Volume voided (if measurable)</li>
              <li>• Fluid intake (amount and type)</li>
              <li>• Urgency episodes (scale 0-10)</li>
              <li>• Incontinence episodes</li>
              <li>• Pad usage</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Duration</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Typically 3-7 days to capture representative patterns including weekdays and weekends
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Key Findings</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• <span className="font-semibold">Frequency:</span> Normal is 4-8 voids per day</li>
              <li>• <span className="font-semibold">Nocturia:</span> 0-1 void per night is normal</li>
              <li>• <span className="font-semibold">Functional capacity:</span> Normal ~300-500 mL</li>
              <li>• <span className="font-semibold">Excessive fluid intake:</span> May contribute to frequency</li>
              <li>• <span className="font-semibold">Caffeine/alcohol timing:</span> May trigger symptoms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">
          Example Bladder Diary Pattern Interpretation
        </h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Pattern: Voiding every 1-2 hours, small volumes (100-150 mL)</p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              → Suggests overactive bladder or anxiety-driven frequent voiding
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Pattern: Large volumes (500-600 mL), infrequent, with incontinence</p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              → Suggests bladder overdistension leading to overflow incontinence
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Pattern: Nocturia ≥3 times, large night volumes</p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              → Consider nocturnal polyuria (heart failure, diabetes insipidus, late fluid intake)
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const urodynamicsContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Urodynamics Overview (Educational)
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Urodynamic testing assesses bladder and urethral function during filling and voiding.
          It's reserved for complex cases or when conservative management fails.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Components</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Cystometry (bladder pressure during filling)</li>
              <li>• Pressure-flow study (voiding pressures and flow rate)</li>
              <li>• Leak point pressure</li>
              <li>• Electromyography (sphincter activity)</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Indications</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Pre-surgical planning</li>
              <li>• Mixed or unclear symptoms</li>
              <li>• Neurogenic bladder assessment</li>
              <li>• Failed initial management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Key Urodynamic Findings (Simplified)
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100">Detrusor Overactivity</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Involuntary detrusor contractions during filling → urgency, frequency
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-600">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100">Detrusor Underactivity</h4>
            <p className="text-sm text-orange-800 dark:text-orange-200">
              Weak or absent contractions → incomplete emptying, retention
            </p>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-600">
            <h4 className="font-semibold text-red-900 dark:text-red-100">Bladder Outlet Obstruction</h4>
            <p className="text-sm text-red-800 dark:text-red-200">
              High voiding pressure + low flow rate → BPH, stricture
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100">Stress Urinary Incontinence</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Leakage with increased abdominal pressure, without detrusor contraction
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'pvr', label: 'PVR Interpreter', content: pvrContent },
    { id: 'diary', label: 'Bladder Diary', content: bladderDiaryContent },
    { id: 'urodynamics', label: 'Urodynamics', content: urodynamicsContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Diagnostic Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Interactive tools and guides for urologic evaluation and diagnosis.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default DiagnosticsModule;
