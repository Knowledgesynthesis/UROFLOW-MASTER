import React, { useState } from 'react';
import { GraduationCap, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const Assessment: React.FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: 'A 45-year-old woman reports leaking urine when she coughs or sneezes. She denies urgency. What is the most likely diagnosis?',
      options: [
        'Stress incontinence',
        'Urge incontinence',
        'Overflow incontinence',
        'Functional incontinence'
      ],
      correctAnswer: 0,
      explanation: 'Leakage with increased intra-abdominal pressure (coughing, sneezing) without urgency is classic for stress incontinence, caused by urethral hypermobility or sphincter deficiency.',
      category: 'Incontinence'
    },
    {
      id: 2,
      question: 'What is the first-line treatment for stress incontinence in women?',
      options: [
        'Antimuscarinics',
        'Pelvic floor physical therapy',
        'Mid-urethral sling surgery',
        'Alpha-blockers'
      ],
      correctAnswer: 1,
      explanation: 'Pelvic floor physical therapy (including Kegel exercises) is the first-line conservative treatment for stress incontinence, with 50-80% improvement rates.',
      category: 'Management'
    },
    {
      id: 3,
      question: 'A patient has a post-void residual (PVR) of 250 mL. How should this be interpreted?',
      options: [
        'Normal emptying',
        'Borderline - requires repeat measurement',
        'Elevated - significant retention',
        'Critical - immediate catheterization needed'
      ],
      correctAnswer: 2,
      explanation: 'PVR >200 mL is considered elevated and indicates significant retention. This warrants evaluation for obstruction or detrusor underactivity.',
      category: 'Diagnostics'
    },
    {
      id: 4,
      question: 'Which symptom is considered an "irritative" (storage) LUTS?',
      options: [
        'Hesitancy',
        'Weak stream',
        'Urgency',
        'Straining to void'
      ],
      correctAnswer: 2,
      explanation: 'Urgency is an irritative/storage symptom. Hesitancy, weak stream, and straining are obstructive/voiding symptoms.',
      category: 'LUTS'
    },
    {
      id: 5,
      question: 'A 70-year-old man with BPH complains of frequency and nocturia despite lifestyle modifications. What is the most appropriate first-line medication?',
      options: [
        'Finasteride',
        'Tamsulosin',
        'Oxybutynin',
        'Mirabegron'
      ],
      correctAnswer: 1,
      explanation: 'Alpha-blockers like tamsulosin are first-line for symptomatic BPH. They provide rapid symptom relief by relaxing the bladder neck and prostate smooth muscle.',
      category: 'Management'
    },
    {
      id: 6,
      question: 'Which mnemonic is used to remember transient causes of incontinence?',
      options: [
        'MUDPILES',
        'DIAPPERS',
        'CHADS-VASC',
        'OLDCARTS'
      ],
      correctAnswer: 1,
      explanation: 'DIAPPERS: Delirium, Infection, Atrophic urethritis, Pharmaceuticals, Psychological, Excess fluids, Restricted mobility, Stool impaction.',
      category: 'Incontinence'
    },
    {
      id: 7,
      question: 'A patient with spinal cord injury above T12 is most likely to have which bladder pattern?',
      options: [
        'Detrusor overactivity with dyssynergia',
        'Detrusor areflexia',
        'Stress incontinence',
        'Normal bladder function'
      ],
      correctAnswer: 0,
      explanation: 'Suprasacral spinal cord injury causes detrusor hyperreflexia (overactivity) with detrusor-sphincter dyssynergia (DSD) - an upper motor neuron pattern.',
      category: 'Neurogenic Bladder'
    },
    {
      id: 8,
      question: 'What is the primary mechanism of antimuscarinics in treating overactive bladder?',
      options: [
        'Relax bladder neck',
        'Block involuntary detrusor contractions',
        'Increase bladder capacity directly',
        'Reduce prostate size'
      ],
      correctAnswer: 1,
      explanation: 'Antimuscarinics block muscarinic receptors on the detrusor muscle, reducing involuntary contractions and treating the detrusor overactivity that causes OAB symptoms.',
      category: 'Pharmacology'
    },
    {
      id: 9,
      question: 'A postmenopausal woman with recurrent UTIs and dysuria without infection on urinalysis most likely has:',
      options: [
        'Interstitial cystitis',
        'Overactive bladder',
        'Genitourinary syndrome of menopause (GSM)',
        'Bladder cancer'
      ],
      correctAnswer: 2,
      explanation: 'GSM (previously atrophic vaginitis) from estrogen loss causes urethral/vaginal atrophy, leading to dysuria and recurrent UTIs. Topical estrogen is first-line treatment.',
      category: 'Female Interface'
    },
    {
      id: 10,
      question: 'Which type of pelvic organ prolapse involves the bladder descending into the vagina?',
      options: [
        'Rectocele',
        'Cystocele',
        'Enterocele',
        'Uterine prolapse'
      ],
      correctAnswer: 1,
      explanation: 'Cystocele is anterior wall prolapse where the bladder herniates into the vaginal wall. It can contribute to both stress incontinence and overflow incontinence.',
      category: 'Pelvic Floor'
    },
    {
      id: 11,
      question: 'A patient reports constant dribbling, weak stream, and feeling of incomplete emptying. PVR is 350 mL. What type of incontinence is this?',
      options: [
        'Stress incontinence',
        'Urge incontinence',
        'Overflow incontinence',
        'Mixed incontinence'
      ],
      correctAnswer: 2,
      explanation: 'Constant dribbling with high PVR and obstructive symptoms indicates overflow incontinence from incomplete bladder emptying due to obstruction or detrusor underactivity.',
      category: 'Incontinence'
    },
    {
      id: 12,
      question: 'What is the gold standard surgical treatment for symptomatic BPH with failed medical management?',
      options: [
        'Prostatic urethral lift (UroLift)',
        'Transurethral resection of prostate (TURP)',
        'Finasteride therapy',
        'Botox injection'
      ],
      correctAnswer: 1,
      explanation: 'TURP remains the gold standard surgical treatment for BPH. It involves endoscopic removal of obstructing prostate tissue.',
      category: 'Procedures'
    },
    {
      id: 13,
      question: 'Which finding on urinalysis suggests UTI?',
      options: [
        'Proteinuria',
        'Glucosuria',
        'Positive leukocyte esterase',
        'Ketones'
      ],
      correctAnswer: 2,
      explanation: 'Positive leukocyte esterase or nitrites suggest UTI. Leukocyte esterase indicates white blood cells (pyuria), and nitrites suggest bacteria that convert nitrates.',
      category: 'Diagnostics'
    },
    {
      id: 14,
      question: 'What is the primary difference between overactive bladder (OAB) and interstitial cystitis (IC)?',
      options: [
        'OAB has urgency, IC does not',
        'IC has pain, OAB typically does not',
        'OAB requires surgery, IC does not',
        'They are the same condition'
      ],
      correctAnswer: 1,
      explanation: 'The key difference is pain. IC/painful bladder syndrome presents with suprapubic pain (often relieved by voiding) along with urgency/frequency. OAB has urgency/frequency but typically minimal pain.',
      category: 'Differential Diagnosis'
    },
    {
      id: 15,
      question: 'When should a patient with LUTS be referred to a urologist?',
      options: [
        'After first-line lifestyle modifications fail',
        'Immediately at first visit',
        'When red flags present (hematuria, neurologic symptoms)',
        'Only if surgery is planned'
      ],
      correctAnswer: 2,
      explanation: 'Referral is indicated for red flag symptoms (hematuria, pelvic mass, neurologic signs, recurrent UTIs), failed conservative/pharmacologic management, or when specialized testing/procedures are needed.',
      category: 'Management'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => (prev - 1 + questions.length) % questions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
          <GraduationCap className="mr-3" size={36} />
          Assessment Center
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Test your knowledge with interactive clinical scenarios and questions
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full font-medium">
            {currentQ.category}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === currentQ.correctAnswer;
            const showResult = showExplanation;

            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';

            if (!showResult) {
              buttonClass += 'border-gray-300 dark:border-gray-600 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20';
            } else if (isSelected && isCorrect) {
              buttonClass += 'border-green-500 bg-green-50 dark:bg-green-900/30';
            } else if (isSelected && !isCorrect) {
              buttonClass += 'border-red-500 bg-red-50 dark:bg-red-900/30';
            } else if (isCorrectAnswer) {
              buttonClass += 'border-green-500 bg-green-50 dark:bg-green-900/30';
            } else {
              buttonClass += 'border-gray-300 dark:border-gray-600 opacity-50';
            }

            return (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswerSelect(index)}
                disabled={showExplanation}
                className={buttonClass}
              >
                <div className="flex items-start justify-between">
                  <span className="text-gray-900 dark:text-gray-100">{option}</span>
                  {showResult && (
                    <>
                      {isSelected && isCorrect && (
                        <CheckCircle className="text-green-600 flex-shrink-0 ml-2" size={24} />
                      )}
                      {isSelected && !isCorrect && (
                        <XCircle className="text-red-600 flex-shrink-0 ml-2" size={24} />
                      )}
                      {!isSelected && isCorrectAnswer && (
                        <CheckCircle className="text-green-600 flex-shrink-0 ml-2" size={24} />
                      )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
          }`}>
            <div className="flex items-start space-x-3">
              {isCorrect ? (
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              ) : (
                <XCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              )}
              <div>
                <p className={`font-bold mb-2 ${
                  isCorrect ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'
                }`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className={
                  isCorrect
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                }>
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handlePrevious}
          className="btn-secondary flex-1"
        >
          Previous Question
        </button>
        <button
          onClick={handleNext}
          className="btn-primary flex-1"
        >
          Next Question
        </button>
        <button
          onClick={handleReset}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <RotateCcw size={18} />
          <span>Reset</span>
        </button>
      </div>

      {/* Info Box */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mt-8">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> This assessment is for educational purposes only. Questions are designed
          to reinforce learning and test clinical reasoning. Take your time and review the explanations
          to deepen your understanding of urologic concepts.
        </p>
      </div>
    </div>
  );
};

export default Assessment;
