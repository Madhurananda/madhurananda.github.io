import Link from 'next/link';
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
  SiScikitlearn,
  SiDjango,
  SiFastapi,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiR,
  SiJavascript,
  SiGnubash,
  SiJupyter,
} from 'react-icons/si';
import { FaJava, FaChartBar } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import {
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  FaOrcid,
  FaXTwitter,
  FaResearchgate,
} from 'react-icons/fa6';

export const metadata = { title: 'Work Experience' };

// Toolkit icons mapping
const toolkitIcons: Record<string, React.ElementType> = {
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  'Hugging Face Transformers': SiHuggingface,
  'Scikit-learn': SiScikitlearn,
  Django: SiDjango,
  FastAPI: SiFastapi,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  SQL: SiMysql,
  MATLAB: FaChartBar,
  R: SiR,
  Java: FaJava,
  JavaScript: SiJavascript,
  Bash: SiGnubash,
  Jupyter: SiJupyter,
};

const toolkits = [
  'Python',
  'Django',
  'FastAPI',
  'MATLAB',
  'R',
  'Java',
  'JavaScript',
  'Bash',
  'PyTorch',
  'TensorFlow',
  'Keras',
  'Hugging Face Transformers',
  'Scikit-learn',
  'Whisper',
  'Wav2Vec2',
  'NeMo',
  'HuBERT',
  'Kaldi',
  'openSMILE',
  'Librosa',
  'TorchAudio',
  'FFmpeg',
  'OpenCV',
  'NumPy',
  'Pandas',
  'SciPy',
  'Docker',
  'Kubernetes',
  'SQL',
  'Guppy basecaller',
  'SAMtools',
  'Minimap2',
  'Tombo',
];

export default function WorkPage() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold font-bricolage mb-6">Resume</h1>

      {/* ===== SOCIAL LINKS AT TOP ===== */}
      <div className="mb-8 pt-4 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-center">Connect with me</h2>
        <div className="flex flex-wrap justify-center gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/madhurananda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Madhurananda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="Google Scholar"
          >
            <FaGoogleScholar />
          </a>
          <a
            href="https://orcid.org/0000-0002-5926-0144"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="ORCID"
          >
            <FaOrcid />
          </a>
          <a
            href="https://twitter.com/MadhuPahar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="Twitter (X)"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.researchgate.net/profile/Madhurananda-Pahar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="ResearchGate"
          >
            <FaResearchgate />
          </a>
          <a
            href="mailto:madhuranandapahar@gmail.com"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="Email"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* ===== Education ===== */}
      <h2 className="text-3xl font-bold font-bricolage mb-4">Education</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Ph.D. in Computational Neuroscience</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2010 – 2016</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
            <Link href="https://www.stir.ac.uk/subjects/computer-science-and-software-engineering/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              University of Stirling, Scotland, UK
            </Link>
          </p>
          <p className="text-lg">
            <em>
              Thesis:{' '}
              <Link href="http://hdl.handle.net/1893/23025" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                A Novel Sound Reconstruction Technique based on a Spike Code (event) Representation
              </Link>
            </em>
          </p>
          <p className="text-lg">
            <Link href="https://drive.google.com/file/d/10HameGRkKhP8UItjbZ39VDuXdXqpNpdw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              [View Certificate]
            </Link>
          </p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">MSc in Computing for Financial Markets</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2009 – 2010</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
            <Link href="https://www.stir.ac.uk/subjects/computer-science-and-software-engineering/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              University of Stirling, Scotland, UK
            </Link>
          </p>
          <p className="text-lg">
            <em>
              Thesis:{' '}
              <Link href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.718.3964&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Implementation of VaR and Option Strategies
              </Link>
            </em>
          </p>
          <p className="text-lg">
            <Link href="https://drive.google.com/file/d/1ApsLJKgFkKtHe9j7j2weRLHj3LWyfWgt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              [View Certificate]
            </Link>
          </p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">BSc in Mathematics</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2005 – 2009</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
            <Link href="https://www.caluniv.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              University of Calcutta, INDIA
            </Link>
          </p>
          <p className="text-lg">
            <em>Mathematics (major), Statistics, Physics</em>
          </p>
          <p className="text-lg">
            <Link href="https://drive.google.com/file/d/1mYgR27qfMJENDiNAVDUg2YOo2SWxth9f/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              [View Certificate]
            </Link>
          </p>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      <h1 className="text-4xl font-bold font-bricolage mb-6">Skills &amp; Toolkits</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">AI &amp; Machine Learning</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Deep Learning, LLMs, NLP, Signal Processing,<br />
            Multimodal AI (Audio + Video + Text),<br />
            Explainable AI, AI Fairness in Health
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Healthcare &amp; Clinical AI</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Application of AI to Health, Clinical Team Collaboration,<br />
            Industry Collaboration
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Software &amp; Data Engineering</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            End-to-End Production ML Pipelines,<br />
            Large-scale Data Engineering, Cloud &amp; Parallel Computing,<br />
            Project Management
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Research &amp; Leadership</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Research Team Lead &amp; Supervision,<br />
            Strategic Decision Making, Teaching &amp; Academic,<br />
            Communication and Team Working
          </p>
        </div>
      </div>

      {/* ===== TOOLKITS WITH ICONS ===== */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Toolkits &amp; Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {toolkits.map((toolkit) => {
          const Icon = toolkitIcons[toolkit];
          return (
            <span
              key={toolkit}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
            >
              {Icon && <Icon className="text-xl" />}
              <span className="text-base">{toolkit}</span>
            </span>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-2">Languages</h2>
      <div className="flex flex-wrap gap-4">
        <span className="text-lg text-gray-700 dark:text-gray-300"><strong>Bengali</strong> — mother tongue</span>
        <span className="text-lg text-gray-700 dark:text-gray-300"><strong>English</strong> — fluent</span>
        <span className="text-lg text-gray-700 dark:text-gray-300"><strong>Hindi</strong> — conversational</span>
      </div>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      <h1 className="text-4xl font-bold font-bricolage mb-6">Research and Professional Experience</h1>

      {/* ===== Research Fellow ===== */}
      <div className="mt-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Research Fellow in Speech Processing and Machine Learning</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Jan 2024 – Present</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="https://www.sheffield.ac.uk/cs/people/research-staff/madhurananda-pahar" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            University of Sheffield, UK
          </Link>
        </p>

        {/* ===== NESTED BULLET POINTS ===== */}
        <div className="mt-2 space-y-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Research Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Led development of multimodal ML systems for large-scale clinical conversational speech and video analysis within the{' '}
                <Link href="https://cognospeak.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CognoSpeak, CognoMND, and CognoStroke</Link>{' '}
                programmes, supporting early detection of dementia, motor neuron disease, and stroke-related cognitive impairment in a real-world environment.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Designed and maintained end-to-end multimodal MLOps pipelines spanning data ingestion, feature extraction, model development, evaluation, deployment, and experiment tracking, enabling reproducible and scalable clinical AI research using Python-based frameworks (Django/FastAPI), exposing trained models through RESTful APIs for real-time version-controlled clinical decision-support experiments, automated preprocessing, and model benchmarking for continuous model improvement and comparison.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Designed and implemented real-world audio-processing pipelines, including VAD, speaker identification, diarization, speaker separation, speech enhancement, noise filtering, and ASR fine-tuning for large-scale conversational speech datasets.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Investigated recording quality, background noise, and speech enhancement on ASR accuracy and downstream ML performance, establishing robust audio quality-control procedures.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Developed multimodal feature extraction frameworks combining acoustic, prosodic, linguistic, and semantic information from spontaneous speech and transcripts to support behavioural, cognitive, and clinical AI applications.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Built and maintained structured multimodal data pipelines for large-scale clinical datasets (from 5,000+ NHS participants in collaboration with clinicians, integrating cognitive and mental health assessments (MoCA, PHQ-9, GAD-7)), enabling automated preprocessing, data governance, quality monitoring, and scalable clinically grounded AI model experimentation.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Applied advanced ML methods for classification and regression modelling of heterogeneous clinical datasets.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Integrated and identified stratified cognitive domain knowledge (attention, memory, and executive function) into data curation and model development to improve robustness and clinical interpretability of mild cognitive impairment (MCI).
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Developed interpretable biomarker-driven machine learning models characterising speech and behavioural markers associated with neurological and cognitive decline.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Investigated algorithmic bias and fairness in clinical AI systems across multilingual and ethnically diverse UK populations.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Disseminated and led research outcomes through peer-reviewed journal publications, conference presentations, interdisciplinary collaborations such as public dataset releases (<Link href="https://github.com/Madhurananda/PROCESS-2" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PROCESS-2</Link>), and academic workshops, such as{' '}
                <Link href="https://www.sheffield.ac.uk/machine-intelligence" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CMI</Link>,{' '}
                <Link href="https://ukis2024.eng.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UKIS 2024</Link>, and{' '}
                <Link href="https://multimodalai.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MultiModalAI'24</Link>.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Team Lead and Supervision</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Led research activities contributing to peer-reviewed publications and public dataset releases (<Link href="https://github.com/Madhurananda/PROCESS-2" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PROCESS-2</Link>).
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Supervised <Link href="https://www.dcs.shef.ac.uk/intranet/teaching/public/modules/level4/com4520.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">COM4520 Darwin project</Link> group.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Supervised undergraduate, MSc, and PhD researchers working on pathological speech analysis and clinical AI.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Research Project Management</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Coordinated research milestones and deliverables across interdisciplinary academic, clinical, and industry partners.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Provided technical leadership and data governance support within a multidisciplinary research environment.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Research Dissemination and Engagement</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Promoted CognoSpeak research through academic workshops and invited presentations at{' '}
                <Link href="https://www.sheffield.ac.uk/machine-intelligence" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CMI</Link>,{' '}
                <Link href="https://ukis2024.eng.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UKIS 2024</Link>, and{' '}
                <Link href="https://multimodalai.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MultiModalAI'24</Link>.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Engaged public audiences through outreach activities including the{' '}
                <Link href="https://digitalmedia.shef.ac.uk/media/Bright+Minds+-+Cognospeak/1_qfu6804l" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">BrightMinds Webinar</Link> and{' '}
                <Link href="https://pintofscience.co.uk/event/tech-futures-hacking-the-brain/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Pint of Science</Link>, communicating advances in AI-driven cognitive health assessment to the general public.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Interdisciplinary Collaboration and Engagement</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                <strong>As an event organiser:</strong> Organised interdisciplinary workshops promoting AI applications in{' '}
                <Link href="https://drive.google.com/file/d/1FDgyQS8xYnuKizD1LMdvJc4QHRnR11VZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">mental health and digital healthcare</Link>.
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                <strong>With academic partners:</strong>{' '}
                <Link href="https://www.sheffield.ac.uk/sitran" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SITraN</Link> (Neurology),{' '}
                <Link href="https://www.brunel.ac.uk/people/annalena-venneri" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Annalena Venneri</Link> (Psychology),{' '}
                <Link href="https://www.sheffield.ac.uk/cs/people/academic/chaona-chen" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Dr. Chaona Chen</Link> (Robotics),{' '}
                <Link href="https://www.sheffield.ac.uk/smph/people/population-health/pamela-mary-enderby" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Pamela Enderby</Link> (Speech and Language Therapy).
              </li>
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                <strong>With industry partners:</strong>{' '}
                <Link href="https://www.therapybox.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">TherapyBox</Link>.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Decision Making and Academic Support</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                Member of the <strong>Senate Appeals and Discipline Panels</strong> at the University of Sheffield (2024–2027).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Research Scholar ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Research Scholar</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Feb 2023 – Dec 2023</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="https://www.unlv.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            University of Nevada, Las Vegas (UNLV), USA
          </Link>
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Developed deep learning methodologies for the detection of RNA modifications including 5-methylcytosine (5mC) and N6-methyladenine (m6A), using Oxford Nanopore long-read sequencing data.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Designed machine learning frameworks for variant detection and transcriptomic analysis from RNA sequencing data.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Investigated isoform-level genomic variation, including gene fusions and alternative splicing, using deep learning approaches.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Processed and analysed large-scale ONT sequencing data (human and yeast) to support model training and benchmarking.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Developed bioinformatics pipelines converting raw FAST5 signals into FASTQ/BAM representations for downstream analysis.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Applied computational modelling towards biomarker discovery in neuropsychiatric disorders, including schizophrenia.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Collaborated with multidisciplinary genomics researchers and supervised graduate and undergraduate students contributing to computational genomics projects.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Post Doctoral Fellow ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Post Doctoral Fellow</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Aug 2019 – Jan 2023</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="http://www.sun.ac.za" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Stellenbosch University, South Africa
          </Link>
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Developed machine learning systems for detection of <Link href="http://www.sun.ac.za/english/Lists/news/DispForm.aspx?ID=8557" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">tuberculosis (TB)</Link> and <Link href="https://coughtest.online/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">COVID-19</Link> from cough, breath, and speech recordings collected in real-world clinical environments.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Designed deep neural network architectures incorporating autoencoders, attention mechanisms, transfer learning, and generative models for respiratory disease classification.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Designed signal-processing workflows for noise-robust analysis of real-world speech, cough, and respiratory audio, evaluating how environmental noise, recording-device variability, and signal quality influence model performance.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Modelled cough frequency and recovery trajectories using acoustic analysis, language-model-based temporal modelling.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Built AI-driven patient monitoring solutions integrating audio sensing and accelerometer data through custom Android applications in real-world environments.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Conducted longitudinal monitoring of patient recovery and clinic activity through multimodal sensor analysis.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Managed large-scale biomedical audio datasets and optimised deep learning workflows using parallel computing.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Participated in international biomedical imaging challenges applying machine learning models for disease classification from chest X-ray images.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Investigated transfer learning using pre-trained speech representations (x-vectors, i-vectors, and bottleneck features) for cougher identification in under-resourced languages under noisy and real-world recording conditions.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Senior Investigator in the international (<Link href="https://www.matiemedia.org/tuberculosis/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CAGE-TB</Link>) study.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Architected and deployed an end-to-end clinical data acquisition and processing pipeline, integrating microphones, servers, and mobile sensing platforms, and developing scalable Python workflows for preprocessing, annotation management, storage, and model-ready dataset generation.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Developed standard operating procedures (SOP) and trained healthcare workers in the deployment of AI-enabled sensing technologies within TB clinics.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Co-supervised honours and MSc students working on pathological speech and cough analysis using reinforcement learning, transformers, and NLP methods.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Delivered deep learning training materials covering CNN, LSTM, and ResNet architectures using PyTorch and TensorFlow.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Self-employed Writer ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Self-employed Writer, Teacher &amp; Translator</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">July 2017 – July 2019</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">Kolkata, India</p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Worked as a programmer (Java, C++, PHP, JavaScript, Python), <Link href="https://www.writerbay.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">academic content writer</Link>, <Link href="https://www.ivoryresearch.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">statistical data analyser</Link> and proof-reader; trained and supervised other employees while working within strict client deadlines.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Taught Mathematics, Computer Science, and Economics to undergraduate and postgraduate students.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Translated English to Bengali for a <Link href="https://www.jw.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">non-profit organisation</Link>.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Teaching Assistant ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Economics, CS and Mathematics Teaching Assistant; Study Skills Tutor</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Oct 2010 – Dec 2016</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="https://www.stir.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">University of Stirling</Link> &amp; <Link href="https://www.intostudy.com/en/universities/university-of-stirling" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">INTO Stirling</Link>, Scotland, UK
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Taught and demonstrated classes of over 25 international students, including disabled students, as a personal tutor.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Marked examination papers and invigilated examinations.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Provided administrative support across various university departments.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Held Professional Membership (1206019138570383): Disclosure Scotland Protecting Vulnerable Group (PVG) Scheme.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Private Tutor ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Self-employed Private Tutor</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Mar 2016 – Feb 2017</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="https://tutorful.co.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Tutorful</Link>, <Link href="https://athenatuition.co.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Athena Tuition</Link>, UK
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Taught higher mathematics, computer science, and statistics to high-school students.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Part-time Waiter ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Part-time Waiter, &amp; Delivery Driver</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Dec 2009 – Dec 2016</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0 text-lg">
          <Link href="https://mrsinghsdunblane.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">INDIA GATE, Dunblane, UK</Link>
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Explained menu items, ingredients, and food preparation; handled cash, debit, and credit card transactions; delivered takeaways across Stirlingshire.</li>
          <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Trained new staff and worked as manager for the last two years of employment.</li>
        </ul>
      </div>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      {/* ===== TEACHING ===== */}
      <h1 className="text-4xl font-bold font-bricolage mb-6">Teaching &amp; Supervision</h1>
      <ul className="list-disc list-inside space-y-1">
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Lead in academic writing</li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">PhD Supervision</li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Group Supervision</li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Lecturing, Seminars, Tutorials</li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Preparing Teaching Content</li>
      </ul>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      {/* ===== OTHER ===== */}
      <h1 className="text-4xl font-bold font-bricolage mb-6">Certifications &amp; Activities</h1>
      <ul className="list-disc list-inside space-y-1">
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1TwgkHugTXuF40LVw-GmcWSBNPc0aY2sj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            First Aid for Mental Health
          </Link>, Sheffield, UK
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/12yj2M65uum4GuHO0ZIHMKCv9z6Tap62v/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Action Counters Terrorism Awareness
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1SX3GaJ8D3GtmzUiyoAtPmZhgbAS5ozKW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Trauma-informed Training for Panel members
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1FJ1iC1rlmvmiIM7DJOaEBEIUbpsUTIen/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Good Clinical Practice
          </Link> certificate
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1Yz5oinDJqU1lmM9cOjlBzyCHIj2SAXFQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            QA Level 2 Award in Emergency First Aid at Work
          </Link> by Highland First Aid Training, Ross-shire, UK
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1TTtct7O-SHkGo2L85VtF9otqzQ4SXhyW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Level 2 NVQ Certificate in Spectator Safety
          </Link> (UK)
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/1WnAr4flyXL2BiXMF_fZfDUhoyZbUi3x-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            A passionate interest in Music
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://drive.google.com/file/d/14fx6Kut0_vGM9Nblu6u1l1PA-89Th5gf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Red Cross Social worker
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Advertising COVID research in the media:&nbsp;
          <Link href="https://www.news24.com/life/wellness/body/condition-centres/infectious-diseases/coronavirus/is-your-cough-covid-related-stellenbosch-university-researchers-say-theres-a-way-to-tell-20210930" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            News24
          </Link>,&nbsp;
          <Link href="https://www.youtube.com/watch?v=fPIIHTmwb7M" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            YouTube
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://festivals.oxfam.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Oxfam festival volunteer
          </Link>
        </li>
      </ul>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      {/* ===== HOBBIES ===== */}
      <h1 className="text-4xl font-bold font-bricolage mb-6">Hobbies &amp; Interests</h1>
      <ul className="list-disc list-inside space-y-1">
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://goo.gl/maps/qhUKBcjfeprtRgu36" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Level 8 Local Guide (Google)
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://www.matiesdance.co.za/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Latin American ballroom dancer
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="http://konservatorium.co.za/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Violin player
          </Link> (beginner level)
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://www.virginactive.co.uk/clubs/sheffield-broadfield-park" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Les Mills Bodypump
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <Link href="https://blogs.sun.ac.za/btk/join-us/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Mountain hiker
          </Link>
        </li>
        <li className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Active in sports (badminton, football)</li>
      </ul>
    </div>
  );
}