export const metadata = { title: 'Projects' };

const projects = [
  {
    title: 'CognoSpeak / CognoMND / CognoStroke',
    period: '2024–Present',
    description: 'Developing AI systems for early detection of dementia, MND, and stroke‑related cognitive decline from conversational speech and video.',
  },
  {
    title: 'CAGE‑TB (Cough Audio triaGE for TB)',
    period: '2021–2024',
    description: 'Building non‑invasive, low‑cost AI screening for tuberculosis using cough audio collected in South Africa and Uganda.',
  },
  {
    title: 'COBRE (NIH) – RNA Modification Detection',
    period: '2023',
    description: 'Using Oxford Nanopore sequencing and deep learning to detect 5mC and m6A modifications in genomic/transcriptomic data.',
  },
  {
    title: 'COVID‑19 Detection in Vocal Audio',
    period: '2020–2023',
    description: 'Machine learning models analysing cough, breath, and speech for rapid COVID‑19 detection and severity prediction.',
  },
  {
    title: 'Long‑term Patient Monitoring',
    period: '2019–2023',
    description: 'Automatic cough detection and bed occupancy monitoring using smartphone accelerometers in a TB research centre.',
  },
  {
    title: 'MEMS/CMOS Microphone',
    period: '2010–2014',
    description: 'Design of a multi‑channel adaptive microphone inspired by human auditory processing (University of Edinburgh / Stirling).',
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Research Projects</h1>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.title} className="border-l-4 border-indigo-500 pl-4 py-2">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{p.period}</p>
            <p className="mt-1">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
