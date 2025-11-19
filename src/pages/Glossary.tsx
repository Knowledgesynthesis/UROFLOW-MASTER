import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: 'Anticholinergic',
      definition: 'Medication that blocks muscarinic receptors, used to treat overactive bladder by reducing detrusor contractions.',
      category: 'Pharmacology'
    },
    {
      term: 'BPH (Benign Prostatic Hyperplasia)',
      definition: 'Non-cancerous enlargement of the prostate gland that can cause bladder outlet obstruction and LUTS in men.',
      category: 'Conditions'
    },
    {
      term: 'Bladder Training',
      definition: 'Behavioral technique to increase time between voids, helping to increase bladder capacity and reduce urgency.',
      category: 'Management'
    },
    {
      term: 'Clean Intermittent Catheterization (CIC)',
      definition: 'Self-catheterization performed multiple times daily to empty the bladder, typically for neurogenic bladder or retention.',
      category: 'Procedures'
    },
    {
      term: 'Cystocele',
      definition: 'Prolapse of the bladder into the vaginal wall (anterior wall prolapse).',
      category: 'Anatomy'
    },
    {
      term: 'Detrusor',
      definition: 'The smooth muscle of the bladder wall responsible for bladder contraction during voiding.',
      category: 'Anatomy'
    },
    {
      term: 'Detrusor Overactivity (DO)',
      definition: 'Involuntary bladder contractions during filling phase, causing urgency and frequency.',
      category: 'Physiology'
    },
    {
      term: 'Detrusor Underactivity (DU)',
      definition: 'Weak or absent bladder contractions leading to incomplete emptying and retention.',
      category: 'Physiology'
    },
    {
      term: 'Detrusor-Sphincter Dyssynergia (DSD)',
      definition: 'Uncoordinated contraction of the external sphincter during detrusor contraction, seen in neurogenic bladder.',
      category: 'Conditions'
    },
    {
      term: 'Dysuria',
      definition: 'Painful or burning sensation during urination, often indicating infection or inflammation.',
      category: 'Symptoms'
    },
    {
      term: 'Functional Incontinence',
      definition: 'Urine leakage due to inability to reach toilet in time, caused by physical or cognitive impairments rather than bladder dysfunction.',
      category: 'Conditions'
    },
    {
      term: 'GSM (Genitourinary Syndrome of Menopause)',
      definition: 'Collection of symptoms and signs associated with estrogen deficiency affecting the genital and urinary systems.',
      category: 'Conditions'
    },
    {
      term: 'Hematuria',
      definition: 'Presence of blood in urine, can be gross (visible) or microscopic.',
      category: 'Symptoms'
    },
    {
      term: 'Hesitancy',
      definition: 'Difficulty initiating urination, often a sign of bladder outlet obstruction.',
      category: 'Symptoms'
    },
    {
      term: 'Interstitial Cystitis (IC)',
      definition: 'Chronic bladder condition causing pelvic pain, urgency, and frequency; also called painful bladder syndrome.',
      category: 'Conditions'
    },
    {
      term: 'Kegel Exercises',
      definition: 'Pelvic floor muscle exercises involving repeated contraction and relaxation to strengthen pelvic support.',
      category: 'Management'
    },
    {
      term: 'LUTS (Lower Urinary Tract Symptoms)',
      definition: 'Umbrella term for urinary symptoms including both storage (irritative) and voiding (obstructive) symptoms.',
      category: 'Symptoms'
    },
    {
      term: 'Mixed Incontinence',
      definition: 'Combination of both stress and urgency incontinence symptoms.',
      category: 'Conditions'
    },
    {
      term: 'Neurogenic Bladder',
      definition: 'Bladder dysfunction resulting from neurologic disease or injury affecting bladder control.',
      category: 'Conditions'
    },
    {
      term: 'Nocturia',
      definition: 'Waking at night to void; ≥2 episodes per night is considered significant.',
      category: 'Symptoms'
    },
    {
      term: 'OAB (Overactive Bladder)',
      definition: 'Syndrome characterized by urgency with or without urgency incontinence, usually with frequency and nocturia.',
      category: 'Conditions'
    },
    {
      term: 'Overflow Incontinence',
      definition: 'Leakage from an overdistended bladder due to incomplete emptying, often from obstruction or detrusor underactivity.',
      category: 'Conditions'
    },
    {
      term: 'Pelvic Floor Physical Therapy (PFPT)',
      definition: 'Specialized therapy focusing on strengthening and coordinating pelvic floor muscles to treat incontinence and pelvic floor dysfunction.',
      category: 'Management'
    },
    {
      term: 'Pessary',
      definition: 'Vaginal device used to support pelvic organs in cases of prolapse or to manage stress incontinence.',
      category: 'Devices'
    },
    {
      term: 'POP (Pelvic Organ Prolapse)',
      definition: 'Descent of pelvic organs (bladder, uterus, rectum) from their normal position, often bulging into the vagina.',
      category: 'Conditions'
    },
    {
      term: 'Post-Void Residual (PVR)',
      definition: 'Volume of urine remaining in bladder immediately after voiding; elevated PVR suggests incomplete emptying.',
      category: 'Diagnostics'
    },
    {
      term: 'Rectocele',
      definition: 'Prolapse of the rectum into the posterior vaginal wall.',
      category: 'Anatomy'
    },
    {
      term: 'Stress Incontinence',
      definition: 'Involuntary urine leakage with increased intra-abdominal pressure (coughing, sneezing, exercise).',
      category: 'Conditions'
    },
    {
      term: 'TURP (Transurethral Resection of Prostate)',
      definition: 'Surgical procedure to remove obstructing prostate tissue through the urethra, gold standard for BPH surgery.',
      category: 'Procedures'
    },
    {
      term: 'Urgency',
      definition: 'Sudden, compelling desire to void that is difficult to defer.',
      category: 'Symptoms'
    },
    {
      term: 'Urgency Incontinence',
      definition: 'Involuntary urine leakage accompanied or immediately preceded by urgency.',
      category: 'Conditions'
    },
    {
      term: 'Urge Incontinence',
      definition: 'See Urgency Incontinence.',
      category: 'Conditions'
    },
    {
      term: 'Urodynamics',
      definition: 'Series of tests that assess bladder and urethral function during filling and voiding.',
      category: 'Diagnostics'
    },
  ];

  const filteredTerms = terms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(terms.map(t => t.category))).sort();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
          <BookOpen className="mr-3" size={36} />
          Medical Glossary
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Quick reference for urologic and urogynecologic terminology
        </p>
      </div>

      {/* Search Bar */}
      <div className="card mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search terms, definitions, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => {
          const count = terms.filter(t => t.category === category).length;
          return (
            <span
              key={category}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
            >
              {category} ({count})
            </span>
          );
        })}
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {item.term}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {item.definition}
                  </p>
                  <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No terms found matching "{searchTerm}"
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              Try a different search term
            </p>
          </div>
        )}
      </div>

      {/* Total Count */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Showing {filteredTerms.length} of {terms.length} terms
      </div>
    </div>
  );
};

export default Glossary;
