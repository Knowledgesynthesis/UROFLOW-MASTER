import React from 'react';
import TabSection from '../../components/TabSection';
import { User } from 'lucide-react';

const MaleInterfaceModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Male Reproductive-Urology Interface</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          In men, benign prostatic hyperplasia (BPH) is the most common cause of LUTS. Understanding
          the relationship between prostate enlargement and urinary symptoms is essential.
        </p>

        <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
          <User className="text-blue-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
            Benign Prostatic Hyperplasia (BPH)
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Age-related prostate enlargement that can cause bladder outlet obstruction and both
            obstructive and irritative LUTS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prevalence:</p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• 50% of men by age 60</li>
                <li>• 90% of men by age 85</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Not all BPH causes LUTS:</p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Size doesn't always correlate with symptoms</li>
                <li>• Transition zone growth more symptomatic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">
            Obstructive Symptoms (Common)
          </h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
            <li>• Hesitancy</li>
            <li>• Weak stream</li>
            <li>• Intermittency</li>
            <li>• Straining to void</li>
            <li>• Incomplete emptying sensation</li>
            <li>• Post-void dribbling</li>
          </ul>
        </div>

        <div className="card bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">
            Irritative Symptoms (Secondary)
          </h3>
          <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
            <li>• Frequency</li>
            <li>• Urgency</li>
            <li>• Nocturia (often bothersome)</li>
            <li>• Due to incomplete emptying and detrusor changes</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const evaluationContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          BPH Evaluation Approach
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Symptom Assessment</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              IPSS (International Prostate Symptom Score) - 7-item questionnaire:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>• Mild: 0-7 points</li>
              <li>• Moderate: 8-19 points</li>
              <li>• Severe: 20-35 points</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Digital Rectal Exam (DRE)</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Assess prostate size, consistency, and nodules (prostate cancer screening)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Urinalysis</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Rule out UTI and hematuria
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Post-Void Residual</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Assess degree of retention; elevated PVR suggests significant obstruction
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">5. PSA (Optional/Shared Decision)</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              May help estimate prostate size and screen for cancer; discuss risks/benefits
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">
          Red Flags - Consider Prostate Cancer
        </h3>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>• Hard, nodular prostate on DRE</li>
          <li>• Elevated PSA (age-adjusted)</li>
          <li>• Hematuria</li>
          <li>• Bone pain (metastases)</li>
          <li>• Rapid symptom progression</li>
        </ul>
      </div>
    </div>
  );

  const managementContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          BPH/LUTS Management Strategy
        </h3>

        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3">
              Mild Symptoms (IPSS 0-7)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Watchful Waiting</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Lifestyle modifications</li>
              <li>• Fluid timing (reduce before bed)</li>
              <li>• Avoid decongestants/antihistamines</li>
              <li>• Annual monitoring</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3">
              Moderate to Severe Symptoms (IPSS ≥8)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Pharmacotherapy</p>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Alpha-Blockers (First-Line)
                </h5>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                  Tamsulosin, alfuzosin, doxazosin, terazosin
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Relax smooth muscle of prostate/bladder neck</li>
                  <li>• Rapid onset (days to weeks)</li>
                  <li>• Effective for obstructive symptoms</li>
                  <li>• Side effects: orthostatic hypotension, dizziness, retrograde ejaculation</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  5-Alpha-Reductase Inhibitors (5-ARIs)
                </h5>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                  Finasteride, dutasteride
                </p>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Reduce prostate size by blocking DHT</li>
                  <li>• Slow onset (3-6 months for full effect)</li>
                  <li>• Best for larger prostates (&gt;40g)</li>
                  <li>• Reduce PSA by ~50% (important for cancer screening)</li>
                  <li>• Side effects: decreased libido, erectile dysfunction</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  Combination Therapy
                </h5>
                <p className="text-sm text-indigo-800 dark:text-indigo-200">
                  Alpha-blocker + 5-ARI for moderate-severe symptoms with large prostates
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3">
              Refractory/Severe Cases
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Surgical/Procedural Options (Educational)</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• <span className="font-semibold">TURP</span> (Transurethral resection of prostate) - gold standard</li>
              <li>• <span className="font-semibold">Laser procedures</span> (HoLEP, PVP) - lower bleeding risk</li>
              <li>• <span className="font-semibold">UroLift</span> - prostatic urethral lift</li>
              <li>• <span className="font-semibold">Rezum</span> - water vapor therapy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
        <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">
          Overflow Incontinence in Men
        </h3>
        <p className="text-orange-800 dark:text-orange-200 mb-4">
          Severe BPH or other outlet obstruction can lead to overflow incontinence:
        </p>
        <ul className="space-y-2 text-orange-800 dark:text-orange-200">
          <li>• Continuous dribbling from overdistended bladder</li>
          <li>• Elevated PVR (&gt;200 mL)</li>
          <li>• Weak or absent stream</li>
          <li>• Urgent treatment needed if acute retention or hydronephrosis</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'evaluation', label: 'Evaluation', content: evaluationContent },
    { id: 'management', label: 'Management', content: managementContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Male Reproductive-Urology Interface
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding BPH-related LUTS and prostate-related urinary issues in men.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default MaleInterfaceModule;
