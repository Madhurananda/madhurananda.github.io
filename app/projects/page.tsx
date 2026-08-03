import Link from 'next/link';

export const metadata = { title: 'Projects' };

const projects = [
  {
    title: 'Automatic early detection of cognitive and mental health disorders',
    period: 'Jan 2024 – Present',
    institution: 'University of Sheffield, UK',
    links: [
      { label: 'CognoSpeak', url: 'https://fundingawards.nihr.ac.uk/award/NIHR202911' },
      { label: 'CognoMND', url: 'https://player.sheffield.ac.uk/series/cognomnd-using-ai-speech-detect-thinking-changes-mnd' },
      { label: 'CognoStroke', url: 'https://sheffield.ac.uk/giving/fundraise/big-walk/big-walk-stories-neurological-disease-research-sheffield' },
      { label: 'University of Sheffield', url: 'https://www.sheffield.ac.uk/news/ai-tool-could-speed-dementia-diagnosis' },
    ],
    description: [
      'Develop scalable AI systems to enable early identification of dementia, mild cognitive impairment, depression, anxiety, motor neuron disease, and post-stroke cognitive decline (CognoSpeak, CognoMND and CognoStroke).',
      'Establish clinically interpretable speech and behavioural biomarkers supporting objective cognitive assessment and clinical decision-making.',
      'Curate and quality-control longitudinal multimodal datasets from 5,000+ NHS participants in collaboration with clinicians to enable real-world clinical AI research.',
      'Investigate relationships between attention, memory, and executive function measures and speech-derived behavioural markers of cognitive decline.',
    ],
    skills: [
      'Python',
      'PyTorch',
      'Multimodal AI',
      'Speech Processing',
      'Django/FastAPI',
      'MLOps',
      'Clinical AI',
      'Fairness in AI',
    ],
  },
  {
    title: 'CAGE-TB (Cough Audio triaGE for TB)',
    period: '2021 – 2024',
    institution: 'Stellenbosch University, South Africa',
    links: [
      { label: 'Project Page', url: 'http://www.sun.ac.za/english/Lists/news/DispForm.aspx?ID=8557' },
      { label: 'Stellenbosch University', url: 'http://www.sun.ac.za' },
    ],
    description: [
      'Develop non-invasive, low-cost AI screening approaches for tuberculosis and respiratory diseases using cough audio collected in real clinical environments across South Africa and Uganda.',
      'Build large-scale cough datasets supporting robust machine learning model development for global health diagnostics.',
      'Contribute to public release of rare clinical audio datasets to accelerate research in AI-based respiratory disease detection at the end of the CAGE-TB project.',
    ],
    skills: [
      'Python',
      'TensorFlow',
      'Keras',
      'Signal Processing',
      'Audio Analysis',
      'Deep Learning',
      'Clinical Data',
    ],
  },
  {
    title: 'COBRE – RNA Modification Detection (NIH)',
    period: '2023',
    institution: 'UNLV, USA',
    links: [
      { label: 'COBRE', url: 'https://nigms.nih.gov/Research/DRCB/IDeA/Pages/COBRE.aspx' },
      { label: 'UNLV', url: 'https://www.unlv.edu/cobre' },
    ],
    description: [
      'Modification detection: Study the relationship of base modifications to disease pathology at the genomic/transcriptomic scale using Oxford Nanopore sequencing and deep learning.',
      'Long-read data analysis: Develop computational tools via machine learning especially deep learning for genomic and transcriptomic data analysis on long-read sequencing data.',
    ],
    skills: [
      'Python',
      'PyTorch',
      'Deep Learning',
      'Bioinformatics',
      'Oxford Nanopore',
      'Genomics',
      'RNA Sequencing',
    ],
  },
  {
    title: 'Detecting COVID-19 in Vocal Audio',
    period: '2020 – 2023',
    institution: 'Stellenbosch University, South Africa',
    links: [
      { label: 'Stellenbosch University', url: 'http://www.sun.ac.za' },
    ],
    description: [
      'Develop machine learning systems analysing cough, breath, and speech signals for rapid remote COVID-19 detection.',
      'Model disease severity and hospitalisation risk using large-scale international clinical audio datasets.',
    ],
    skills: [
      'Python',
      'PyTorch',
      'Transfer Learning',
      'Audio Analysis',
      'Machine Learning',
      'Clinical Data',
    ],
  },
  {
    title: 'Long-term Patient Monitoring',
    period: '2019 – 2023',
    institution: 'Stellenbosch University, South Africa',
    links: [
      { label: 'TASK', url: 'https://www.task.org.za/' },
      { label: 'Stellenbosch University', url: 'http://www.sun.ac.za' },
    ],
    description: [
      'Automatic detection of coughs among other environmental noises in a multi-bed ward at TASK (a 24h TB research centre).',
      'Enable automated cough detection and bed occupancy monitoring in hospital wards to support longitudinal healthcare analytics using a non-invasive smartphone-inbuilt accelerometer.',
    ],
    skills: [
      'Python',
      'Sensor Data',
      'Accelerometer',
      'Signal Processing',
      'Machine Learning',
      'Android',
    ],
  },
  {
    title: 'TB Cough Classification',
    period: '2019 – 2021',
    institution: 'Stellenbosch University, South Africa',
    links: [
      { label: 'Stellenbosch University', url: 'http://www.sun.ac.za' },
    ],
    description: [
      'Develop robust machine learning models distinguishing TB coughs from other respiratory conditions under noisy real-world recording conditions.',
    ],
    skills: [
      'Python',
      'Machine Learning',
      'Audio Analysis',
      'Signal Processing',
      'Clinical Data',
    ],
  },
  {
    title: 'A MEMS/CMOS Microphone',
    period: '2010 – 2014',
    institution: 'University of Edinburgh & Stirling, UK',
    links: [
      { label: 'Project Page', url: 'https://www.research.ed.ac.uk/en/projects/a-multi-channel-adaptive-integrated-memscmos-microphone' },
      { label: 'University of Edinburgh', url: 'https://www.research.ed.ac.uk/en/' },
    ],
    description: [
      'Design and develop a multi-channel adaptive MEMS/CMOS microphone system inspired by human auditory processing.',
    ],
    skills: [
      'MATLAB',
      'Signal Processing',
      'Acoustics',
      'Hardware Design',
      'Human Auditory System',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Research and Innovation Projects</h1>

      <div className="space-y-8 mt-6">
        {projects.map((project) => (
          <div key={project.title} className="border-l-4 border-accent pl-4 py-2">
            {/* Title + Period on same row */}
            <div className="flex justify-between items-baseline">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">{project.title}</h2>
              <span className="text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">{project.period}</span>
            </div>

            {/* Institution */}
            <p className="text-base text-gray-700 dark:text-gray-400 mt-0">
              {project.institution}
            </p>

            {/* Links */}
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-1">
                {project.links.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-accent hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Description - now as bullet points */}
            <ul className="mt-2 space-y-1">
              {project.description.map((item, index) => (
                <li key={index} className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
                  {item}
                </li>
              ))}
            </ul>

            {/* Skills */}
            {project.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-base bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}