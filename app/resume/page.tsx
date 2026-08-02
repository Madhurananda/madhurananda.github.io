export const metadata = { title: 'Resume' };

export default function ResumePage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Resume</h1>

      <h2>Education</h2>
      <ul>
        <li><strong>Ph.D. in Computational Neuroscience</strong> – University of Stirling (2010–2016)</li>
        <li><strong>MSc in Computing for Financial Markets</strong> – University of Stirling (2009–2010)</li>
        <li><strong>BSc in Mathematics</strong> – University of Calcutta (2005–2009)</li>
      </ul>

      <h2>Experience</h2>
      <h3>Research Fellow</h3>
      <p><em>University of Sheffield (2024–Present)</em></p>
      <ul>
        <li>Lead multimodal ML for clinical speech/video analysis (CognoSpeak, CognoMND, CognoStroke).</li>
        <li>Design MLOps pipelines, REST APIs, and real‑time deployment.</li>
        <li>Develop audio‑processing pipelines (VAD, diarization, ASR) for 5,000+ NHS participants.</li>
        <li>Investigate bias and fairness in clinical AI across diverse populations.</li>
      </ul>

      <h3>Research Scholar</h3>
      <p><em>UNLV, USA (2023)</em></p>
      <ul>
        <li>Built deep learning tools for RNA modification detection (5mC, m6A) with Oxford Nanopore data.</li>
        <li>Developed variant‑calling and transcriptomic analysis pipelines.</li>
      </ul>

      <h3>Postdoctoral Fellow</h3>
      <p><em>Stellenbosch University, South Africa (2019–2023)</em></p>
      <ul>
        <li>Led AI‑based TB and COVID‑19 detection from cough/breath/speech in clinical settings.</li>
        <li>Designed DNNs (attention, transfer learning) for respiratory disease classification.</li>
        <li>Built end‑to‑end patient monitoring systems with accelerometer data.</li>
        <li>Managed large‑scale biomedical audio datasets and co‑supervised students.</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li><strong>AI/ML:</strong> Deep Learning, LLMs, NLP, Signal Processing, Multimodal AI, Explainable AI</li>
        <li><strong>Healthcare:</strong> Clinical AI, Fairness, Team Collaboration</li>
        <li><strong>Software:</strong> Python (PyTorch, TensorFlow, HuggingFace), Django/FastAPI, Docker, Kubernetes</li>
        <li><strong>Research:</strong> Project Management, Supervision, Grant Writing</li>
      </ul>

      <h2>Selected Publications</h2>
      <ul>
        <li>Pahar, M. et al. (2026) PROCESS‑2: A Benchmark Speech Corpus… <em>arXiv:2605.14888</em></li>
        <li>Pahar, M. et al. (2025) Automatic detection of early cognitive decline… <em>IEEE JBHI 29(12)</em></li>
        <li>Pahar, M. et al. (2023) Accelerometer‑based Bed Occupancy Detection… <em>IEEE Access 11</em></li>
        <li>Pahar, M. et al. (2022) COVID‑19 detection in cough, breath and speech… <em>Comp. Biol. Med. 141</em></li>
        <li>Pahar, M. et al. (2021) COVID‑19 cough classification… <em>Comp. Biol. Med. 135</em></li>
      </ul>
      <p><a href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en">Full list on Google Scholar</a></p>
    </div>
  );
}
