import React from 'react';
import TabSection from '../../components/TabSection';
import { Brain, AlertCircle } from 'lucide-react';

const NeurogenicModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Brain className="mr-3 text-purple-600" size={32} />
          Neurogenic Bladder Disorders
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Neurogenic bladder results from neurologic conditions that disrupt the complex neural
          control of bladder function. The pattern of dysfunction depends on the level and nature
          of the neurologic lesion.
        </p>

        <div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">
            Normal Bladder Innervation (Simplified)
          </h3>
          <div className="space-y-3 text-sm text-purple-800 dark:text-purple-200">
            <p>
              <span className="font-semibold">Sympathetic (T10-L2):</span> Promotes storage (relaxes detrusor, contracts bladder neck)
            </p>
            <p>
              <span className="font-semibold">Parasympathetic (S2-S4):</span> Promotes voiding (contracts detrusor)
            </p>
            <p>
              <span className="font-semibold">Somatic (S2-S4, pudendal):</span> Voluntary control of external sphincter
            </p>
            <p>
              <span className="font-semibold">Pontine micturition center:</span> Coordinates voiding
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">
            Upper Motor Neuron Lesion
          </h3>
          <p className="text-sm text-red-800 dark:text-red-200 mb-3">
            Above sacral spinal cord (brain, cervical/thoracic spine)
          </p>
          <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
            <li>• <span className="font-semibold">Detrusor overactivity (hyperreflexia)</span></li>
            <li>• Loss of voluntary control</li>
            <li>• May have detrusor-sphincter dyssynergia (DSD)</li>
            <li>• Urgency, frequency, incontinence</li>
          </ul>
        </div>

        <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
            Lower Motor Neuron Lesion
          </h3>
          <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
            Sacral spinal cord or peripheral nerves (S2-S4)
          </p>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>• <span className="font-semibold">Detrusor areflexia (underactivity)</span></li>
            <li>• Impaired bladder sensation</li>
            <li>• Urinary retention</li>
            <li>• Overflow incontinence</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const conditionsContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Common Neurologic Conditions & Bladder Effects
        </h3>

        <div className="space-y-4">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
              Spinal Cord Injury (SCI)
            </h4>
            <div className="text-sm text-red-800 dark:text-red-200 space-y-2">
              <p>
                <span className="font-semibold">Suprasacral (above T12):</span> Detrusor hyperreflexia with DSD
                (uncoordinated sphincter). High risk of upper tract damage.
              </p>
              <p>
                <span className="font-semibold">Sacral/infrasacral:</span> Areflexic bladder, retention, overflow
              </p>
            </div>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
              Multiple Sclerosis (MS)
            </h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Variable presentation depending on lesion location. Commonly detrusor overactivity with or
              without sphincter dyssynergia. Symptoms may fluctuate with disease activity.
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Parkinson's Disease
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Detrusor overactivity common (urgency, frequency, nocturia). Loss of dopaminergic inhibition
              of micturition reflex.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              Stroke (CVA)
            </h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              Detrusor overactivity with urge incontinence is common. Often improves with time and
              rehabilitation.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Diabetes Mellitus (Diabetic Cystopathy)
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Peripheral neuropathy affects bladder: decreased sensation, impaired contractility,
              increased capacity, retention. Late complication of poorly controlled diabetes.
            </p>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
              Cauda Equina Syndrome
            </h4>
            <p className="text-sm text-orange-800 dark:text-orange-200">
              Compression of sacral nerve roots: retention, overflow, saddle anesthesia. Surgical
              emergency requiring prompt decompression.
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
          General Management Principles
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Goals: maintain continence, ensure complete emptying, prevent upper tract damage
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              For Detrusor Overactivity (Hyperreflexia)
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Behavioral</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                  <li>• Timed voiding</li>
                  <li>• Fluid management</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Pharmacologic</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                  <li>• Antimuscarinics</li>
                  <li>• Beta-3 agonists</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Advanced</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                  <li>• Botulinum toxin injections</li>
                  <li>• Sacral neuromodulation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              For Detrusor Underactivity (Areflexia)
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Clean Intermittent Catheterization (CIC)
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  Gold standard for emptying areflexic bladder. Performed 4-6 times daily.
                  Lower UTI risk than indwelling catheter.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Indwelling Catheter
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                  If CIC not feasible (urethral, suprapubic). Higher infection risk.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              For Detrusor-Sphincter Dyssynergia (DSD)
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 ml-4">
              Uncoordinated sphincter contraction during detrusor contraction → high pressure → upper tract damage risk
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • Alpha-blockers (relax bladder neck)
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • Botulinum toxin to sphincter
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                • Sphincterotomy (surgical - educational)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100 flex items-center">
          <AlertCircle className="mr-2" size={24} />
          Complications to Monitor
        </h3>
        <ul className="space-y-2 text-red-800 dark:text-red-200">
          <li>• <span className="font-semibold">Recurrent UTIs:</span> Especially with catheterization</li>
          <li>• <span className="font-semibold">Hydronephrosis:</span> From high bladder pressures or obstruction</li>
          <li>• <span className="font-semibold">Renal failure:</span> From chronic high pressure (monitor creatinine)</li>
          <li>• <span className="font-semibold">Bladder stones:</span> From stasis and catheter use</li>
          <li>• <span className="font-semibold">Autonomic dysreflexia:</span> In SCI above T6 (hypertensive emergency)</li>
        </ul>
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">
          Role of Urodynamics in Neurogenic Bladder
        </h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
          Urodynamics is particularly important in neurogenic bladder to:
        </p>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>• Identify detrusor overactivity vs underactivity</li>
          <li>• Detect DSD</li>
          <li>• Assess bladder compliance (risk for upper tract damage)</li>
          <li>• Guide management decisions</li>
          <li>• Monitor for changes over time</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'conditions', label: 'Specific Conditions', content: conditionsContent },
    { id: 'management', label: 'Management', content: managementContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Neurogenic Bladder Disorders
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding bladder dysfunction from neurologic conditions.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default NeurogenicModule;
