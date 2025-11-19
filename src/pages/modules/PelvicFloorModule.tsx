import React from 'react';
import TabSection from '../../components/TabSection';
import { Heart, Info } from 'lucide-react';

const PelvicFloorModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Pelvic Floor Disorders Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Pelvic floor disorders encompass conditions resulting from weakening or damage to pelvic
          floor muscles and connective tissue, including pelvic organ prolapse (POP), which can
          significantly contribute to urinary symptoms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
            <Heart className="text-pink-600 mb-2" size={28} />
            <h3 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Cystocele</h3>
            <p className="text-sm text-pink-800 dark:text-pink-200">
              Anterior wall prolapse - bladder descends into vagina
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <Heart className="text-purple-600 mb-2" size={28} />
            <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Rectocele</h3>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Posterior wall prolapse - rectum bulges into vagina
            </p>
          </div>

          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <Heart className="text-indigo-600 mb-2" size={28} />
            <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Uterine Prolapse</h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-200">
              Uterus descends into or through vaginal canal
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100 flex items-center">
          <Info className="mr-2" size={24} />
          POP-Q Staging (Simplified)
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="font-bold text-blue-700 dark:text-blue-300 text-lg w-20">Stage 0:</span>
            <span className="text-blue-800 dark:text-blue-200">No prolapse</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-blue-700 dark:text-blue-300 text-lg w-20">Stage I:</span>
            <span className="text-blue-800 dark:text-blue-200">Descent to &gt;1 cm above hymen</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-blue-700 dark:text-blue-300 text-lg w-20">Stage II:</span>
            <span className="text-blue-800 dark:text-blue-200">Descent to ±1 cm of hymen</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-blue-700 dark:text-blue-300 text-lg w-20">Stage III:</span>
            <span className="text-blue-800 dark:text-blue-200">Descent to &gt;1 cm beyond hymen</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-blue-700 dark:text-blue-300 text-lg w-20">Stage IV:</span>
            <span className="text-blue-800 dark:text-blue-200">Complete eversion</span>
          </div>
        </div>
      </div>
    </div>
  );

  const relationshipContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          How Prolapse Affects Urinary Function
        </h3>

        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Stress Incontinence
            </h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Urethral hypermobility from anterior wall prolapse can lead to leakage with increased
              abdominal pressure. Loss of urethral support is a key mechanism.
            </p>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
              Overflow Incontinence
            </h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Severe prolapse can kink the urethra, causing bladder outlet obstruction leading to
              retention and overflow. Patients may need to manually reduce prolapse to void.
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
              Masked Incontinence
            </h4>
            <p className="text-red-800 dark:text-red-200 text-sm">
              Severe prolapse can compress the urethra, hiding stress incontinence. After prolapse
              repair, previously masked incontinence may become apparent.
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
          Conservative Management
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
              Pelvic Floor Physical Therapy
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Kegel exercises (pelvic floor muscle training)</li>
              <li>• Biofeedback techniques</li>
              <li>• Most effective for mild prolapse (Stage I-II)</li>
              <li>• Can improve symptoms even without anatomic correction</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
              Pessary (Conceptual)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Vaginal device that supports prolapsed organs
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Multiple types: ring, Gellhorn, cube, donut</li>
              <li>• Non-surgical option for all stages</li>
              <li>• Requires periodic removal and cleaning</li>
              <li>• Can relieve prolapse symptoms and sometimes improve continence</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
              Lifestyle Modifications
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Weight loss</li>
              <li>• Avoid heavy lifting</li>
              <li>• Treat constipation</li>
              <li>• Manage chronic cough</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-100">
          Surgical Management (Educational Overview)
        </h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">
          Surgery is considered for symptomatic prolapse that fails conservative management:
        </p>
        <ul className="space-y-2 text-purple-800 dark:text-purple-200">
          <li>• <span className="font-semibold">Anterior repair:</span> For cystocele</li>
          <li>• <span className="font-semibold">Posterior repair:</span> For rectocele</li>
          <li>• <span className="font-semibold">Apical suspension:</span> For uterine/vault prolapse</li>
          <li>• <span className="font-semibold">Concurrent anti-incontinence procedures:</span> May be needed</li>
        </ul>
      </div>

      <div className="card bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
        <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">
          Postpartum Pelvic Floor Dysfunction
        </h3>
        <p className="text-orange-800 dark:text-orange-200 mb-4">
          Vaginal delivery is a major risk factor for pelvic floor disorders:
        </p>
        <ul className="space-y-2 text-orange-800 dark:text-orange-200">
          <li>• Stress incontinence common in postpartum period</li>
          <li>• Often improves with pelvic floor PT in first year</li>
          <li>• Levator ani injury can lead to later prolapse</li>
          <li>• Early intervention with PT recommended</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'relationship', label: 'Urinary Impact', content: relationshipContent },
    { id: 'management', label: 'Management', content: managementContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Pelvic Floor Disorders
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding pelvic organ prolapse and its relationship to urinary symptoms.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default PelvicFloorModule;
