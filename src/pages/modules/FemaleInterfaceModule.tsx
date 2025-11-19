import React from 'react';
import TabSection from '../../components/TabSection';
import { Users } from 'lucide-react';

const FemaleInterfaceModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Female Reproductive-Urology Interface</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Understanding how reproductive life stages affect urinary function is crucial for
          comprehensive women's health care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800">
          <Users className="text-pink-600 mb-3" size={32} />
          <h3 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Pregnancy</h3>
          <p className="text-sm text-pink-800 dark:text-pink-200">
            Increased pressure, hormonal changes, and tissue stretching affect continence
          </p>
        </div>

        <div className="card bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
          <Users className="text-purple-600 mb-3" size={32} />
          <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Postpartum</h3>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            Pelvic floor trauma and recovery significantly impact urinary function
          </p>
        </div>

        <div className="card bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800">
          <Users className="text-indigo-600 mb-3" size={32} />
          <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Menopause</h3>
          <p className="text-sm text-indigo-800 dark:text-indigo-200">
            Estrogen loss leads to urogenital atrophy and urinary symptoms
          </p>
        </div>
      </div>
    </div>
  );

  const pregnancyContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Pregnancy-Related Urinary Changes
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Frequency & Nocturia</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Common throughout pregnancy due to increased blood volume, GFR, and uterine pressure on bladder
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Stress Incontinence</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Affects 30-60% of pregnant women; related to increased intra-abdominal pressure and pelvic floor stretching
            </p>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Postpartum Retention</h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Can occur after delivery due to perineal swelling, epidural effects, or nerve injury
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">
          Postpartum Pelvic Floor Recovery
        </h3>
        <ul className="space-y-2 text-red-800 dark:text-red-200">
          <li>• Most stress incontinence improves within 6-12 months</li>
          <li>• Pelvic floor PT should begin early (6 weeks postpartum)</li>
          <li>• Levator ani injury increases risk of persistent symptoms</li>
          <li>• Vacuum/forceps delivery increases pelvic floor trauma</li>
          <li>• Persistent symptoms beyond 1 year warrant evaluation</li>
        </ul>
      </div>
    </div>
  );

  const menopauseContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Estrogen Loss & Urogenital Effects
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
              Genitourinary Syndrome of Menopause (GSM)
            </h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
              Previously called atrophic vaginitis - encompasses vulvovaginal and urinary symptoms
            </p>
            <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
              <li>• Vaginal dryness and irritation</li>
              <li>• Urethral atrophy</li>
              <li>• Recurrent UTIs</li>
              <li>• Urgency and frequency</li>
              <li>• Dysuria without infection</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-600">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
              Increased Incontinence Risk
            </h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Estrogen loss contributes to weakening of pelvic floor support and urethral closure mechanism,
              though it's not the sole cause of postmenopausal incontinence.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Management Strategies
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Vaginal Estrogen (Topical)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              Low-dose vaginal estrogen is first-line for GSM-related urinary symptoms:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm ml-4">
              <li>Improves urethral and vaginal tissue health</li>
              <li>Can reduce recurrent UTIs</li>
              <li>May improve urgency and frequency from GSM</li>
              <li>Minimal systemic absorption</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Non-Hormonal Options
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm ml-4">
              <li>Vaginal moisturizers (regular use)</li>
              <li>Lubricants (as needed)</li>
              <li>Pelvic floor physical therapy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const oabVsICContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Overactive Bladder vs Interstitial Cystitis
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Both conditions cause urgency and frequency but have different etiologies and treatments:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Overactive Bladder (OAB)
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200">Definition:</p>
                <p className="text-blue-700 dark:text-blue-300">
                  Urgency with or without urgency incontinence, usually with frequency/nocturia
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200">Mechanism:</p>
                <p className="text-blue-700 dark:text-blue-300">
                  Detrusor overactivity (involuntary contractions)
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200">Pain:</p>
                <p className="text-blue-700 dark:text-blue-300">
                  Usually absent or minimal
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200">Treatment:</p>
                <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 ml-2">
                  <li>Behavioral modifications</li>
                  <li>Antimuscarinics/Beta-3 agonists</li>
                  <li>Neuromodulation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">
              Interstitial Cystitis / Painful Bladder Syndrome
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200">Definition:</p>
                <p className="text-red-700 dark:text-red-300">
                  Chronic bladder pain with urgency and frequency
                </p>
              </div>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200">Mechanism:</p>
                <p className="text-red-700 dark:text-red-300">
                  Bladder inflammation/urothelial dysfunction
                </p>
              </div>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200">Pain:</p>
                <p className="text-red-700 dark:text-red-300">
                  Suprapubic pain, often relieved with voiding
                </p>
              </div>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200">Treatment:</p>
                <ul className="list-disc list-inside text-red-700 dark:text-red-300 ml-2">
                  <li>Dietary modifications</li>
                  <li>Pentosan polysulfate</li>
                  <li>Bladder instillations</li>
                  <li>Pain management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'pregnancy', label: 'Pregnancy & Postpartum', content: pregnancyContent },
    { id: 'menopause', label: 'Menopause', content: menopauseContent },
    { id: 'oab-vs-ic', label: 'OAB vs IC', content: oabVsICContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Female Reproductive-Urology Interface
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding urinary issues across women's reproductive life stages.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default FemaleInterfaceModule;
