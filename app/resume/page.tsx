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
import { FaJava, FaChartBar } from 'react-icons/fa'; // Fallback for MATLAB and Java

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
  MATLAB: FaChartBar,    // Font Awesome fallback
  R: SiR,
  Java: FaJava,          // Font Awesome fallback
  JavaScript: SiJavascript,
  Bash: SiGnubash,
  Jupyter: SiJupyter,
  // For tools without icons, they'll fall back to text-only badges
};

// Toolkit list (same as before)
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
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Education</h1>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="mb-0 font-bold text-gray-900 dark:text-white">Ph.D. in Computational Neuroscience</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2010 – 2016</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0">
            <Link href="https://www.stir.ac.uk/subjects/computer-science-and-software-engineering/" target="_blank" rel="noopener noreferrer">
              University of Stirling, Scotland, UK
            </Link>
          </p>
          <p className="text-base">
            <em>
              Thesis:{' '}
              <Link href="http://hdl.handle.net/1893/23025" target="_blank" rel="noopener noreferrer">
                A Novel Sound Reconstruction Technique based on a Spike Code (event) Representation
              </Link>
            </em>
          </p>
          <p className="text-base">
            <Link href="https://drive.google.com/file/d/10HameGRkKhP8UItjbZ39VDuXdXqpNpdw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              [View Certificate]
            </Link>
          </p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="mb-0 font-bold text-gray-900 dark:text-white">MSc in Computing for Financial Markets</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2009 – 2010</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0">
            <Link href="https://www.stir.ac.uk/subjects/computer-science-and-software-engineering/" target="_blank" rel="noopener noreferrer">
              University of Stirling, Scotland, UK
            </Link>
          </p>
          <p className="text-base">
            <em>
              Thesis:{' '}
              <Link href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.718.3964&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer">
                Implementation of VaR and Option Strategies
              </Link>
            </em>
          </p>
          <p className="text-base">
            <Link href="https://drive.google.com/file/d/1ApsLJKgFkKtHe9j7j2weRLHj3LWyfWgt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              [View Certificate]
            </Link>
          </p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="mb-0 font-bold text-gray-900 dark:text-white">BSc in Mathematics</h3>
            <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">2005 – 2009</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-0">
            <Link href="https://www.caluniv.ac.in/" target="_blank" rel="noopener noreferrer">
              University of Calcutta, INDIA
            </Link>
          </p>
          <p className="text-base">
            <em>Mathematics (major), Statistics, Physics</em>
          </p>
          <p className="text-base">
            <Link href="https://drive.google.com/file/d/1mYgR27qfMJENDiNAVDUg2YOo2SWxth9f/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              [View Certificate]
            </Link>
          </p>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      <h1>Skills &amp; Toolkits</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="text-lg font-bold mb-2">AI &amp; Machine Learning</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Deep Learning, LLMs, NLP, Signal Processing,<br />
            Multimodal AI (Audio + Video + Text),<br />
            Explainable AI, AI Fairness in Health
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Healthcare &amp; Clinical AI</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Application of AI to Health, Clinical Team Collaboration,<br />
            Industry Collaboration
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Software &amp; Data Engineering</h2>
          <p className="text-gray-700 dark:text-gray-300">
            End-to-End Production ML Pipelines,<br />
            Large-scale Data Engineering, Cloud &amp; Parallel Computing,<br />
            Project Management
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Research &amp; Leadership</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Research Team Lead &amp; Supervision,<br />
            Strategic Decision Making, Teaching &amp; Academic,<br />
            Communication and Team Working
          </p>
        </div>
      </div>

      {/* ===== TOOLKITS WITH ICONS ===== */}
      <h2 className="text-lg font-bold mt-6 mb-2">Toolkits &amp; Technologies</h2>
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

      <h2 className="text-lg font-bold mt-6 mb-2">Languages</h2>
      <div className="flex flex-wrap gap-4">
        <span className="text-gray-700 dark:text-gray-300"><strong>Bengali</strong> — mother tongue</span>
        <span className="text-gray-700 dark:text-gray-300"><strong>English</strong> — fluent</span>
        <span className="text-gray-700 dark:text-gray-300"><strong>Hindi</strong> — conversational</span>
      </div>

      {/* ===== DIVIDER ===== */}
      <hr className="my-12 border-t-4 border-gray-300 dark:border-gray-600" />

      <h1>Research and Professional Experience</h1>

      {/* ===== Research Fellow ===== */}
      <div className="mt-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Research Fellow in Speech Processing and Machine Learning</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Jan 2024 – Present</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="https://www.sheffield.ac.uk/cs/people/research-staff/madhurananda-pahar" target="_blank" rel="noopener noreferrer">
            University of Sheffield, UK
          </Link>
        </p>
        <ul className="mt-2">
          <li>Led development of multimodal ML systems for large-scale clinical conversational speech and video analysis within the <Link href="https://cognospeak.co.uk/" target="_blank" rel="noopener noreferrer">CognoSpeak, CognoMND, and CognoStroke</Link> programmes, supporting early detection of dementia, motor neuron disease, and stroke-related cognitive impairment in a real-world environment.</li>
          <li>Designed and maintained end-to-end multimodal MLOps pipelines spanning data ingestion, feature extraction, model development, evaluation, deployment, and experiment tracking, enabling reproducible and scalable clinical AI research using Python-based frameworks (Django/FastAPI), exposing trained models through RESTful APIs for real-time version-controlled clinical decision-support experiments, automated preprocessing, and model benchmarking for continuous model improvement and comparison.</li>
          <li>Designed and implemented real-world audio-processing pipelines, including VAD, speaker identification, diarization, speaker separation, speech enhancement, noise filtering, and ASR fine-tuning for large-scale conversational speech datasets.</li>
          <li>Investigated recording quality, background noise, and speech enhancement on ASR accuracy and downstream ML performance, establishing robust audio quality-control procedures.</li>
          <li>Developed multimodal feature extraction frameworks combining acoustic, prosodic, linguistic, and semantic information from spontaneous speech and transcripts to support behavioural, cognitive, and clinical AI applications.</li>
          <li>Built and maintained structured multimodal data pipelines for large-scale clinical datasets (from 5,000+ NHS participants in collaboration with clinicians, integrating cognitive and mental health assessments (MoCA, PHQ-9, GAD-7)), enabling automated preprocessing, data governance, quality monitoring, and scalable clinically grounded AI model experimentation.</li>
          <li>Applied advanced ML methods for classification and regression modelling of heterogeneous clinical datasets.</li>
          <li>Integrated and identified stratified cognitive domain knowledge (attention, memory, and executive function) into data curation and model development to improve robustness and clinical interpretability of mild cognitive impairment (MCI).</li>
          <li>Developed interpretable biomarker-driven machine learning models characterising speech and behavioural markers associated with neurological and cognitive decline.</li>
          <li>Investigated algorithmic bias and fairness in clinical AI systems across multilingual and ethnically diverse UK populations.</li>
          <li>Disseminated and led research outcomes through peer-reviewed journal publications, conference presentations, interdisciplinary collaborations such as public dataset releases (<Link href="https://github.com/Madhurananda/PROCESS-2" target="_blank" rel="noopener noreferrer">PROCESS-2</Link>), and academic workshops, such as <Link href="https://www.sheffield.ac.uk/machine-intelligence" target="_blank" rel="noopener noreferrer">CMI</Link>, <Link href="https://ukis2024.eng.cam.ac.uk/" target="_blank" rel="noopener noreferrer">UKIS 2024</Link>, and <Link href="https://multimodalai.github.io/" target="_blank" rel="noopener noreferrer">MultiModalAI'24</Link>.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Research Scholar ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Research Scholar</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Feb 2023 – Dec 2023</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="https://www.unlv.edu/" target="_blank" rel="noopener noreferrer">
            University of Nevada, Las Vegas (UNLV), USA
          </Link>
        </p>
        <ul className="mt-2">
          <li>Developed deep learning methodologies for the detection of RNA modifications including 5-methylcytosine (5mC) and N6-methyladenine (m6A), using Oxford Nanopore long-read sequencing data.</li>
          <li>Designed machine learning frameworks for variant detection and transcriptomic analysis from RNA sequencing data.</li>
          <li>Investigated isoform-level genomic variation, including gene fusions and alternative splicing, using deep learning approaches.</li>
          <li>Processed and analysed large-scale ONT sequencing data (human and yeast) to support model training and benchmarking.</li>
          <li>Developed bioinformatics pipelines converting raw FAST5 signals into FASTQ/BAM representations for downstream analysis.</li>
          <li>Applied computational modelling towards biomarker discovery in neuropsychiatric disorders, including schizophrenia.</li>
          <li>Collaborated with multidisciplinary genomics researchers and supervised graduate and undergraduate students contributing to computational genomics projects.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Post Doctoral Fellow ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Post Doctoral Fellow</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Aug 2019 – Jan 2023</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="http://www.sun.ac.za" target="_blank" rel="noopener noreferrer">
            Stellenbosch University, South Africa
          </Link>
        </p>
        <ul className="mt-2">
          <li>Developed machine learning systems for detection of <Link href="http://www.sun.ac.za/english/Lists/news/DispForm.aspx?ID=8557" target="_blank" rel="noopener noreferrer">tuberculosis (TB)</Link> and <Link href="https://coughtest.online/" target="_blank" rel="noopener noreferrer">COVID-19</Link> from cough, breath, and speech recordings collected in real-world clinical environments.</li>
          <li>Designed deep neural network architectures incorporating autoencoders, attention mechanisms, transfer learning, and generative models for respiratory disease classification.</li>
          <li>Designed signal-processing workflows for noise-robust analysis of real-world speech, cough, and respiratory audio, evaluating how environmental noise, recording-device variability, and signal quality influence model performance.</li>
          <li>Modelled cough frequency and recovery trajectories using acoustic analysis, language-model-based temporal modelling.</li>
          <li>Built AI-driven patient monitoring solutions integrating audio sensing and accelerometer data through custom Android applications in real-world environments.</li>
          <li>Conducted longitudinal monitoring of patient recovery and clinic activity through multimodal sensor analysis.</li>
          <li>Managed large-scale biomedical audio datasets and optimised deep learning workflows using parallel computing.</li>
          <li>Participated in international biomedical imaging challenges applying machine learning models for disease classification from chest X-ray images.</li>
          <li>Investigated transfer learning using pre-trained speech representations (x-vectors, i-vectors, and bottleneck features) for cougher identification in under-resourced languages under noisy and real-world recording conditions.</li>
          <li>Senior Investigator in the international (<Link href="https://www.matiemedia.org/tuberculosis/" target="_blank" rel="noopener noreferrer">CAGE-TB</Link>) study.</li>
          <li>Architected and deployed an end-to-end clinical data acquisition and processing pipeline, integrating microphones, servers, and mobile sensing platforms, and developing scalable Python workflows for preprocessing, annotation management, storage, and model-ready dataset generation.</li>
          <li>Developed standard operating procedures (SOP) and trained healthcare workers in the deployment of AI-enabled sensing technologies within TB clinics.</li>
          <li>Co-supervised honours and MSc students working on pathological speech and cough analysis using reinforcement learning, transformers, and NLP methods.</li>
          <li>Delivered deep learning training materials covering CNN, LSTM, and ResNet architectures using PyTorch and TensorFlow.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Self-employed Writer ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Self-employed Writer, Teacher &amp; Translator</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">July 2017 – July 2019</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">Kolkata, India</p>
        <ul className="mt-2">
          <li>Worked as a programmer (Java, C++, PHP, JavaScript, Python), <Link href="https://www.writerbay.com/" target="_blank" rel="noopener noreferrer">academic content writer</Link>, <Link href="https://www.ivoryresearch.com/" target="_blank" rel="noopener noreferrer">statistical data analyser</Link> and proof-reader; trained and supervised other employees while working within strict client deadlines.</li>
          <li>Taught Mathematics, Computer Science, and Economics to undergraduate and postgraduate students.</li>
          <li>Translated English to Bengali for a <Link href="https://www.jw.org/" target="_blank" rel="noopener noreferrer">non-profit organisation</Link>.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Teaching Assistant ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Economics, CS and Mathematics Teaching Assistant; Study Skills Tutor</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Oct 2010 – Dec 2016</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="https://www.stir.ac.uk/" target="_blank" rel="noopener noreferrer">University of Stirling</Link> &amp; <Link href="https://www.intostudy.com/en/universities/university-of-stirling" target="_blank" rel="noopener noreferrer">INTO Stirling</Link>, Scotland, UK
        </p>
        <ul className="mt-2">
          <li>Taught and demonstrated classes of over 25 international students, including disabled students, as a personal tutor.</li>
          <li>Marked examination papers and invigilated examinations.</li>
          <li>Provided administrative support across various university departments.</li>
          <li>Held Professional Membership (1206019138570383): Disclosure Scotland Protecting Vulnerable Group (PVG) Scheme.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Private Tutor ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Self-employed Private Tutor</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Mar 2016 – Feb 2017</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="https://tutorful.co.uk" target="_blank" rel="noopener noreferrer">Tutorful</Link>, <Link href="https://athenatuition.co.uk" target="_blank" rel="noopener noreferrer">Athena Tuition</Link>, UK
        </p>
        <ul className="mt-2">
          <li>Taught higher mathematics, computer science, and statistics to high-school students.</li>
        </ul>
      </div>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      {/* ===== Part-time Waiter ===== */}
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">Part-time Waiter, &amp; Delivery Driver</h2>
          <span className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">Dec 2009 – Dec 2016</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-0">
          <Link href="https://mrsinghsdunblane.co.uk/" target="_blank" rel="noopener noreferrer">INDIA GATE, Dunblane, UK</Link>
        </p>
        <ul className="mt-2">
          <li>Explained menu items, ingredients, and food preparation; handled cash, debit, and credit card transactions; delivered takeaways across Stirlingshire.</li>
          <li>Trained new staff and worked as manager for the last two years of employment.</li>
        </ul>
      </div>
    </div>
  );
}