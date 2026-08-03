import Link from 'next/link';

export const metadata = { title: 'Research' };

export default function ResearchPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">

      <h2>Selected First-Author Publications</h2>
      <ul>
        <li><Link href="https://arxiv.org/abs/2605.14888" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2026. PROCESS-2: A Benchmark Speech Corpus for Early Cognitive Impairment Detection. <em>arXiv:2605.14888</em> (Under review: Nature Scientific Data)</Link></li>
        <li><Link href="https://doi.org/10.1109/JBHI.2025.3624043" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2025. Automatic detection of early cognitive decline using multimodal feature fusion and transfer learning on real-world conversational speech. <em>IEEE Journal of Biomedical and Health Informatics, 29(12)</em>. pp.8727-8734. IEEE</Link> <span className="text-sm text-gray-500 dark:text-gray-400">(Best-paper award)</span></li>
        <li><Link href="https://doi.org/10.1109/CIHM64979.2025.10969487" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2025. CognoSpeak: an automatic, remote assessment of early cognitive decline in real-world conversational speech. In <em>2025 IEEE Symposium on Computational Intelligence in Health and Medicine (CIHM)</em>. (pp 1-7). IEEE</Link></li>
        <li><Link href="https://doi.org/10.1109/ICECCME62383.2024.10796109" target="_blank" rel="noopener noreferrer">Pahar, M. and Liu, Q., 2024. NanoCNN: A CNN-Based Tool to Detect RNA m<sup>6</sup>A Methylations Using Oxford Nanopore Sequencing. In <em>2024 4th International Conference on Electrical, Computer, Communications and Mechatronics Engineering (ICECCME)</em> (pp. 1-6). IEEE</Link></li>
        <li><Link href="https://doi.org/10.1109/ACCESS.2023.3261557" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2023. Accelerometer-based Bed Occupancy Detection for Automatic, Non-invasive Long-term Cough Monitoring. <em>IEEE Access, vol. 11,</em> pp. 30739-30752. IEEE</Link></li>
        <li><Link href="https://doi.org/10.1109/ICEET56468.2022.10007261" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2022. Automatic Tuberculosis detection in cough patterns using NLP-style cough embeddings. In <em>2022 International Conference on Engineering and Emerging Technologies (ICEET)</em> (pp. 1-6). IEEE</Link></li>
        <li><Link href="https://doi.org/10.1016/j.compbiomed.2021.105153" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2022. COVID-19 detection in cough, breath and speech using deep transfer learning and bottleneck features. <em>Computers in Biology and Medicine, 141,</em> p. 105153. Elsevier</Link></li>
        <li><Link href="https://doi.org/10.1007/s11265-022-01748-5" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2022. Automatic non-invasive Cough Detection based on Accelerometer and Audio Signals. <em>Journal of Signal Processing Systems.</em> Springer</Link></li>
        <li><Link href="https://doi.org/10.23919/EUSIPCO55093.2022.9909522" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2022. Wake-Cough: cough spotting and cougher identification for personalised long-term cough monitoring. In <em>2022 30th European Signal Processing Conference (EUSIPCO)</em> (pp. 185-189). IEEE</Link></li>
        <li><Link href="https://doi.org/10.1109/ICASSP39728.2021.9414744" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2021. Deep Neural Network based Cough Detection using Bed-mounted Accelerometer Measurements. In <em>ICASSP 2021</em> (pp. 8002-8006). IEEE</Link></li>
        <li><Link href="https://doi.org/10.1016/j.compbiomed.2021.104572" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2021. COVID-19 cough classification using machine learning and global smartphone recordings. <em>Computers in Biology and Medicine, 135,</em> p.104572, Elsevier</Link></li>
        <li><Link href="https://doi.org/10.1088/1361-6579/ac2fb8" target="_blank" rel="noopener noreferrer">Pahar, M. et al., 2021. Automatic Cough Classification for Tuberculosis Screening in a Real-World Environment. <em>Physiological Measurement, 42(10)</em>, p.105014. IOPscience</Link></li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>Awards</h2>
      <ul>
        <li><strong>2025</strong> – <Link href="https://drive.google.com/file/d/1BYAbVFZUzXhAxKJCXvlJrPjynnJk9VKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Best-paper award at JBHI</Link></li>
        <li><strong>2021</strong> – <Link href="https://drive.google.com/file/d/1pFk3o8PgUwnbDr7SEFnuKe7SntmrWsFV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Top-20 postdoctoral award</Link> in Stellenbosch University.</li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>Funding Applications</h2>
      <ul>
        <li><strong>Successful (senior investigator):</strong> <Link href="https://www.edctp.org/news/world-tb-day-2024-funding-innovative-research-to-end-tb/" target="_blank" rel="noopener noreferrer">EDCTP</Link>, <Link href="https://www.aighd.org/project/cage-tb/" target="_blank" rel="noopener noreferrer">CAGE-TB</Link> collaborative project between Stellenbosch University (South Africa), Germany, Netherlands and Uganda, <Link href="http://www.edctp.org/projects-2/edctp2-projects/innovative-approaches-to-enhance-poverty-related-diseases-research-2020/" target="_blank" rel="noopener noreferrer">€3m</Link></li>
        <li><strong>Unsuccessful (co-PI), re-applying:</strong> NIHR i4i (invention for innovation), developing and implementing CognoMemory into Memory assessment pathways, collaboration with <Link href="https://www.sheffield.ac.uk/sitran" target="_blank" rel="noopener noreferrer">Sheffield Institute for Translational Neuroscience (SITraN)</Link>, £1.5m</li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>Editorial Board Member</h2>
      <ul>
        <li><Link href="http://www.cbbjournal.org/editorialboard" target="_blank" rel="noopener noreferrer">Computational Biology and Bioinformatics</Link></li>
        <li><Link href="https://www.innovationforever.com/aboutjournal/JAIMM/EditorialBoardMembers" target="_blank" rel="noopener noreferrer">Journal of Artificial Intelligence in Modern Medicine</Link></li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>Peer Review Team Member</h2>
      <ul>
        <li><Link href="https://www.embs.org/jbhi/" target="_blank" rel="noopener noreferrer">IEEE Journal of Biomedical and Health Informatics</Link></li>
        <li><Link href="https://ieee-cas.org/publication/TBioCAS" target="_blank" rel="noopener noreferrer">IEEE Transactions on Biomedical Circuits and Systems</Link></li>
        <li><Link href="https://drive.google.com/file/d/1PAQ4S7luFlpg24mLQw1wi7a9sKgVRlrX/view?usp=sharing" target="_blank" rel="noopener noreferrer">Journal of Biomedical Informatics</Link></li>
        <li><Link href="https://drive.google.com/file/d/1BffyvIhWNXSyGFE2_0z4aJPaynoPGguu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Biomedical Signal Processing and Control</Link></li>
        <li><Link href="https://drive.google.com/file/d/1UheOSQWQqfaaG2MByyHDKob5uuunNqDY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Computers in Biology and Medicine</Link></li>
        <li><Link href="https://drive.google.com/file/d/10aWr8R3b1nWVsbMuO7O31CEWVs3ZaQN_/view?usp=sharing" target="_blank" rel="noopener noreferrer">ICASSP</Link></li>
        <li><Link href="https://drive.google.com/file/d/1QDNcR67lFcz-bzK6UPknfcmSW0MX6mc0/view?usp=sharing" target="_blank" rel="noopener noreferrer">Interspeech</Link></li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>Invited Talks, Keynote Addresses, and Session Chairs</h2>
      <ul>
        <li><strong>26 Feb 2026</strong> – <Link href="https://su.sheffield.ac.uk/events/id/13878-edi-focused-research-showcase-23-27th-feb/15544" target="_blank" rel="noopener noreferrer">EDI Focused Research Showcase</Link></li>
        <li><strong>2024–2026</strong> – <Link href="https://sheffield.ac.uk/machine-intelligence/events/cmi-town-hall" target="_blank" rel="noopener noreferrer">CMI Townhall</Link></li>
        <li><strong>4 July 2025</strong> – <Link href="https://sheffield.ac.uk/insigneo/overview/events/insigneo-showcase-2025" target="_blank" rel="noopener noreferrer">Insigneo Showcase 2025</Link></li>
        <li><strong>23 June 2025</strong> – <Link href="https://sltcdt.sites.sheffield.ac.uk/annual-conference-2025" target="_blank" rel="noopener noreferrer">SLT-CDT</Link></li>
        <li><strong>13 May 2024</strong> – <Link href="https://pintofscience.co.uk/event/artificial-brains-diagnosing-drains-and-disease" target="_blank" rel="noopener noreferrer">Pint of Science: Artificial brains diagnosing drains (and disease!)</Link></li>
        <li><strong>11 May 2023</strong> – <Link href="https://infotech.report/past-conferences/2nd-global-webinar-on-artificial-intelligence-machine-learning-and-data-science/" target="_blank" rel="noopener noreferrer">2nd Global Webinar on AI, Machine Learning & Data Science</Link></li>
        <li><strong>7-9 Oct 2022</strong> – <Link href="https://drive.google.com/file/d/1PExMlZvcuPdx68r3tB6EPRCtBTo6VrzB/view?usp=sharing" target="_blank" rel="noopener noreferrer">4th International Conference on AI (AIAM2022)</Link>, IEEE, Germany</li>
        <li><strong>29 Aug – 2 Sep 2022</strong> – <Link href="https://drive.google.com/file/d/1V8XS8IciYuI36j4KcFvNFpADDuDwhsDw/view?usp=sharing" target="_blank" rel="noopener noreferrer">Session chair</Link> of <Link href="https://2022.eusipco.org/" target="_blank" rel="noopener noreferrer">EUSIPCO 2022</Link> at Belgrade, Serbia</li>
        <li><strong>20-22 July 2022</strong> – <Link href="https://drive.google.com/file/d/1USL2RZdnql0PT31X1GuhwiSgoAAgJJGb/view?usp=sharing" target="_blank" rel="noopener noreferrer">Session chair</Link> of <Link href="http://www.icecet.com/" target="_blank" rel="noopener noreferrer">ICECET 2022</Link> at Prague, Czech Republic</li>
        <li><strong>18 July 2022</strong> – <Link href="https://drive.google.com/file/d/11t-EXSWSIwK4OURH9byoRvSdkWSHjKPS/view?usp=sharing" target="_blank" rel="noopener noreferrer">AI Expo</Link>, Belgium</li>
        <li><strong>1-3 Dec 2021</strong> – <Link href="https://chpcconf.co.za/" target="_blank" rel="noopener noreferrer">CHPC National Conference 2021</Link>, South Africa</li>
        <li><strong>10-12 Nov 2021</strong> – <Link href="https://drive.google.com/file/d/1ksWDgSxX-p3a8lBXsCxMBiIXG9LSulLA/view?usp=sharing" target="_blank" rel="noopener noreferrer">Organizer and session chair</Link> of 2021 Postdoctoral Conference <Link href="https://postdocsa.co.za/" target="_blank" rel="noopener noreferrer">"Beyond The Pandemic: Research Now And In The Future"</Link>, South Africa</li>
        <li><strong>28-29 Oct 2021</strong> – <Link href="https://drive.google.com/file/d/1xCoN-K1O0slTCniXzbGlp57DtS0ly0Ff/view?usp=sharing" target="_blank" rel="noopener noreferrer">National Seminar</Link> cum <Link href="https://drive.google.com/file/d/1bTp0fwWQDIWl9vM6hxUoLRuL5OhzzL_z/view?usp=sharing" target="_blank" rel="noopener noreferrer">Workshop</Link> at BIT, Mesra, India</li>
        <li><strong>2020, 2021</strong> – <Link href="https://chpcconf.co.za/" target="_blank" rel="noopener noreferrer">CHPC (Advancing high-performance computing in South Africa)</Link></li>
        <li><strong>17-18 July 2020</strong> – <Link href="https://drive.google.com/file/d/19_DPxMTFx4vUxml4DDYZhJmSraj7oU9P/view?usp=sharing" target="_blank" rel="noopener noreferrer">ELECTROSYMP-20</Link>, VIT Bhopal University, India</li>
      </ul>

      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

      <h2>International Collaborations, and Academic Responsibilities</h2>
      <ul>
        <li><strong>2024</strong> – Successfully established collaborations with the <Link href="https://www.sheffield.ac.uk/sitran" target="_blank" rel="noopener noreferrer">Sheffield Institute for Translational Neuroscience (SITraN)</Link> and <Link href="https://www.brunel.ac.uk/people/annalena-venneri" target="_blank" rel="noopener noreferrer">Professor Annalena Venneri</Link> and her group for investigating data cohorts consisting attention, memory and executive functions to detect early signs of cognitive decline.</li>
        <li><strong>2024</strong> – Successfully embarked on a collaboration with <Link href="https://www.sheffield.ac.uk/cs/people/academic/chaona-chen" target="_blank" rel="noopener noreferrer">Dr Chaona Chen</Link> to use facial cues collected from the CognoSpeak video interview to analyse dementia, mood disorder and depression.</li>
        <li><strong>2024</strong> – Actively teaching <Link href="mailto:j.santos@sheffield.ac.uk">COM4520 Darwin Project</Link> and co-supervising undergraduate and PhD students at the School of Computer Science at the University of Sheffield.</li>
        <li><strong>2024-2027</strong> – Member of <strong>Senate Appeals and Discipline Panels</strong> at the University of Sheffield.</li>
        <li><strong>2023</strong> – Co-supervised and supported a PhD student in bioinformatics and genetic data analysis for RNA sequencing at UNLV.</li>
        <li><strong>2021-2023</strong> – Monitoring the long-term recovery of TB patients with the biomedical team at <Link href="https://uu.se/" target="_blank" rel="noopener noreferrer">UPPSALA university</Link> (Sweden) & <Link href="https://www.task.org.za/" target="_blank" rel="noopener noreferrer">TASK</Link> (South Africa).</li>
        <li><strong>2019-2023</strong> – Successful co-supervision of 2 masters and 2 skripsie (short-term undergraduate project) students at Stellenbosch University.</li>
        <li><strong>2022</strong> – <Link href="https://drive.google.com/file/d/14qP4bpL8TN1GBBZ7ThieAfKy1ZuAHmhf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Mentored students</Link> from four different continents in UN's <Link href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">Future 17 Sustainable Development Goals Programme</Link>.</li>
        <li><strong>2022</strong> – Executive committee member of postdoc society (<Link href="http://www.sun.ac.za/english/research-innovation/Research-Development/postdocs/postdoctoral-society" target="_blank" rel="noopener noreferrer">PDS Exec 2022</Link>).</li>
        <li><strong>2021</strong> – <Link href="https://drive.google.com/file/d/13-sL6FO6fwLWLSLR42RmnPlxezdn-gqE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Regional judge</Link> at <Link href="https://exposcience.co.za/" target="_blank" rel="noopener noreferrer">Eskom Expo</Link> for young scientists.</li>
      </ul>
    </div>
  );
}