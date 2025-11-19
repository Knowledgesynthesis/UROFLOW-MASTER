import React from 'react';
import TabSection from '../../components/TabSection';
import { ClipboardList, TrendingUp } from 'lucide-react';

const ManagementModule: React.FC = () => {
  const overviewContent = (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <ClipboardList className="mr-3 text-primary-600" size={32} />
          Stepwise Management Framework
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A systematic, stepwise approach to managing urinary symptoms ensures appropriate
          escalation from conservative to more invasive interventions based on symptom severity
          and treatment response.
        </p>

        <div className="p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-primary-300 dark:border-primary-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <TrendingUp className="mr-2" size={24} />
            The Treatment Ladder Concept
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Start with the least invasive, safest options and progress only if needed:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Behavioral & Lifestyle Modifications</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Pelvic Floor Physical Therapy</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Pharmacologic Therapy</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Advanced/Procedural Interventions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const conservativeContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          First-Line: Conservative Management
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          These interventions should be tried first for all patients with urinary symptoms.
          They are safe, effective, and often sufficient for mild to moderate symptoms.
        </p>

        <div className="space-y-6">
          <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">
              Behavioral Modifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Fluid Management</p>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• Avoid excessive fluid intake (&gt;2-3 L/day)</li>
                  <li>• Reduce evening fluids to decrease nocturia</li>
                  <li>• Maintain adequate hydration (don't restrict excessively)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Dietary Modifications</p>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• Reduce caffeine (coffee, tea, soda)</li>
                  <li>• Limit alcohol</li>
                  <li>• Avoid artificial sweeteners and acidic foods (if IC)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Weight Loss</p>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• 5-10% weight loss can reduce incontinence</li>
                  <li>• Decreases intra-abdominal pressure</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Constipation Management</p>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• Treat chronic constipation</li>
                  <li>• Reduces pelvic floor strain</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              Bladder Training
            </h4>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              Technique to increase bladder capacity and reduce urgency episodes
            </p>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <p>• Schedule voiding at fixed intervals (e.g., every 2 hours)</p>
              <p>• Gradually increase intervals by 15-30 minutes</p>
              <p>• Use distraction/relaxation techniques for urgency</p>
              <p>• Goal: 3-4 hour voiding intervals</p>
              <p>• Can take 6-12 weeks to see results</p>
            </div>
          </div>

          <div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">
              Pelvic Floor Physical Therapy (PFPT)
            </h4>
            <p className="text-purple-800 dark:text-purple-200 mb-3">
              Supervised exercises to strengthen pelvic floor muscles
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200">Kegel Exercises</p>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Contract pelvic floor muscles (as if stopping urine flow)</li>
                  <li>• Hold 5-10 seconds, relax 5-10 seconds</li>
                  <li>• Repeat 10 times, 3 sets per day</li>
                  <li>• Proper technique crucial - PFPT ensures correct contraction</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200">Additional PFPT Techniques</p>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Biofeedback to confirm correct muscle activation</li>
                  <li>• Electrical stimulation</li>
                  <li>• Manual therapy for pelvic floor tension</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
                <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">Evidence:</p>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  PFPT is first-line for stress incontinence with 50-80% improvement rates
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h4 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">
              Timed/Scheduled Voiding
            </h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Voiding on a schedule rather than waiting for urge. Useful for urgency, frequency,
              and functional incontinence (especially in elderly or cognitively impaired).
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const pharmacologicContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Second-Line: Pharmacologic Therapy
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          When conservative measures are insufficient, medications can be added. Choice depends
          on symptom type and patient factors.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-5">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              For Urgency/Frequency (OAB)
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Antimuscarinics</h5>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                  Block muscarinic receptors → reduce detrusor contractions
                </p>
                <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <p><span className="font-semibold">Agents:</span> Oxybutynin, tolterodine, solifenacin, darifenacin, fesoterodine</p>
                  <p><span className="font-semibold">Side effects:</span> Dry mouth, constipation, blurred vision, cognitive effects (especially elderly)</p>
                  <p><span className="font-semibold">Contraindications:</span> Urinary retention, gastric retention, uncontrolled narrow-angle glaucoma</p>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Beta-3 Agonist</h5>
                <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2">
                  Mirabegron - relaxes detrusor muscle during filling
                </p>
                <div className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
                  <p><span className="font-semibold">Advantage:</span> Fewer anticholinergic side effects</p>
                  <p><span className="font-semibold">Side effects:</span> Hypertension (monitor BP), headache, nasopharyngitis</p>
                  <p><span className="font-semibold">Caution:</span> Severe uncontrolled hypertension</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-600 pl-5">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              For BPH-Related LUTS (Men)
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Alpha-Blockers</h5>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  Relax smooth muscle of prostate and bladder neck
                </p>
                <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <p><span className="font-semibold">Agents:</span> Tamsulosin, alfuzosin, doxazosin, terazosin</p>
                  <p><span className="font-semibold">Onset:</span> Days to weeks</p>
                  <p><span className="font-semibold">Side effects:</span> Orthostatic hypotension, dizziness, retrograde ejaculation</p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">5-Alpha-Reductase Inhibitors</h5>
                <p className="text-sm text-teal-800 dark:text-teal-200 mb-2">
                  Reduce prostate size by blocking DHT conversion
                </p>
                <div className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                  <p><span className="font-semibold">Agents:</span> Finasteride, dutasteride</p>
                  <p><span className="font-semibold">Onset:</span> 3-6 months for full effect</p>
                  <p><span className="font-semibold">Best for:</span> Large prostates (&gt;40g)</p>
                  <p><span className="font-semibold">Side effects:</span> Decreased libido, ED, gynecomastia</p>
                  <p><span className="font-semibold">Note:</span> Reduces PSA by ~50%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-600 pl-5">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              For Stress Incontinence
            </h4>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                <span className="font-semibold">Limited pharmacologic options:</span>
              </p>
              <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <p>• PFPT is first-line</p>
                <p>• Topical estrogen may help in postmenopausal women (improves urethral/vaginal tissue)</p>
                <p>• Duloxetine (off-label, not FDA-approved in US) - increases urethral sphincter tone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const advancedContent = (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Third-Line: Advanced & Procedural Interventions
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Reserved for refractory cases after failed conservative and pharmacologic management.
          Requires specialist referral (urology/urogynecology).
        </p>

        <div className="space-y-6">
          <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-600">
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3">
              For Refractory OAB
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Botulinum Toxin (Botox) Bladder Injection</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Paralyzes detrusor muscle → reduces overactivity. Effects last 6-12 months. Risk of retention requiring CIC.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Sacral Neuromodulation</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Implanted device stimulates S3 nerve → modulates bladder reflexes. Requires trial period.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Percutaneous Tibial Nerve Stimulation (PTNS)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Weekly office-based stimulation of posterior tibial nerve. Less invasive alternative.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              For Stress Incontinence (Women)
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Mid-Urethral Sling</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Gold standard surgical treatment. Supports urethra with mesh sling. High success rate.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Urethral Bulking Agents</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Injection around urethra to increase closure. Less invasive but lower success than sling.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Pessary</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Vaginal device to support urethra. Non-surgical option for those who prefer or can't have surgery.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">
              For BPH with Failed Medical Management
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">TURP (Transurethral Resection of Prostate)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Gold standard surgical treatment. Removes obstructing prostate tissue endoscopically.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Laser Procedures (HoLEP, PVP)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Laser ablation/enucleation of prostate. Lower bleeding risk than TURP.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">Minimally Invasive Options</p>
                <p className="text-gray-700 dark:text-gray-300">
                  UroLift (prostatic urethral lift), Rezum (water vapor therapy) - for selected patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">
          When to Refer to Specialist
        </h3>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>• Failed conservative and pharmacologic management</li>
          <li>• Considering surgical intervention</li>
          <li>• Red flag symptoms (hematuria, pelvic mass, neurologic signs)</li>
          <li>• Complicated cases (neurogenic bladder, recurrent UTIs)</li>
          <li>• Need for advanced testing (urodynamics, cystoscopy)</li>
          <li>• Significant pelvic organ prolapse</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'conservative', label: 'Conservative Management', content: conservativeContent },
    { id: 'pharmacologic', label: 'Pharmacologic Therapy', content: pharmacologicContent },
    { id: 'advanced', label: 'Advanced Interventions', content: advancedContent },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Stepwise Management Framework
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A comprehensive guide to conservative, pharmacologic, and advanced treatment approaches.
        </p>
      </div>

      <TabSection tabs={tabs} />
    </div>
  );
};

export default ManagementModule;
