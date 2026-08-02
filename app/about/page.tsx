export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>About Me</h1>
      <p>
        I am an experienced ML and AI engineer & researcher, specialising in
        multimodal analysis of speech, audio, and biological data for real‑world
        clinical applications.
      </p>
      <p>
        Previously, I led the development of AI systems for detecting TB and
        COVID‑19 from respiratory audio in South Africa, and developed deep
        learning methods for genomic analysis using Oxford Nanopore sequencing.
      </p>
      <p>
        Currently, I work on multimodal speech and video analysis to detect early
        signs of cognitive decline (MCI and dementia) using large‑scale NHS
        datasets at the University of Sheffield.
      </p>
      <p>
        My research focuses on building interpretable, robust, and deployable ML
        systems in close collaboration with clinicians.
      </p>
      <h2>Contact</h2>
      <ul>
        <li>📧 <a href="mailto:mad hupahar@gmail.com">mad hupahar@gmail.com</a></li>
        <li>📞 +44 7397 145850</li>
        <li>🔗 <a href="https://www.linkedin.com/in/madhurananda/">LinkedIn</a></li>
        <li>🐙 <a href="https://github.com/Madhurananda">GitHub</a></li>
        <li>📚 <a href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en">Google Scholar</a></li>
      </ul>
    </div>
  );
}
