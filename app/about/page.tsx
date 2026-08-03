import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaOrcid, FaGoogleScholar } from 'react-icons/fa6';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-bricolage mb-6">About Me</h1>

      <p className="text-lg leading-relaxed mb-4">
        Hi, I'm <strong>Dr. Madhurananda (Madhu) Pahar</strong>, an Applied AI Scientist and Senior Research Fellow working at the intersection of machine learning, speech AI, multimodal AI, and healthcare. I enjoy building AI systems that solve real-world problems—from early dementia detection to full-stack AI applications.
      </p>

      {/* Image: Journey map */}
      <div className="my-6">
        <Image
          src="/journey-map.png"
          alt="Map of Dr. Madhu Pahar's worldwide journey"
          width={800}
          height={400}
          className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-full"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          India → Scotland → South Africa → USA → United Kingdom
        </p>
      </div>

      <h2 className="text-2xl font-bold font-bricolage mt-8 mb-4">Early Life & Education</h2>
      <p className="text-lg leading-relaxed mb-4">
        I was born and raised in a historic village of{' '}
        <a href="https://indianvagabond.com/2021/02/15/dhanyakuria-castle-village-of-bengal/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Dhanyakuria
        </a>
        , near Kolkata, India. After doing my primary school there, my family moved to{' '}
        <a href="https://en.wikipedia.org/wiki/Madhyamgram" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Madhyamgram
        </a>
        , closer to Kolkata, where I did my secondary school.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        After completing my BSc in Mathematics at{' '}
        <a href="https://presiuniv.ac.in/web/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Presidency College
        </a>
        , under the University of Calcutta, I moved to the{' '}
        <a href="https://www.stir.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          University of Stirling
        </a>
        , Scotland, where I completed my MSc in Computing for Financial Markets and PhD in Computational Neuroscience.
      </p>

      <h2 className="text-2xl font-bold font-bricolage mt-8 mb-4">Research Journey</h2>
      <p className="text-lg leading-relaxed mb-4">
        I moved to{' '}
        <a href="https://www.su.ac.za/en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Stellenbosch University
        </a>
        {' '} in South Africa, where I did my first postdoc on identifying tuberculosis (TB) and COVID-19 from vocal audio (cough, breath, and speech), and long-term monitoring of patients using accelerometer (sensor) data, under{' '}
        <a href="https://dsp.sun.ac.za/~trn/index.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Professor Thomas Niesler
        </a>
        . During this time, I developed AI systems for detecting tuberculosis (TB) and COVID-19 from cough, breath, and speech recordings, while also working on the long-term monitoring of patients using wearable accelerometer data.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        My next journey took me to the{' '}
        <a href="https://www.unlv.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          University of Nevada, Las Vegas (UNLV)
        </a>
        , where I was a research scholar at the{' '}
        <a href="https://qgenlab.github.io/index.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          QGen Lab
        </a>
        , analysing long-read third-generation Oxford Nanopore Technology (ONT) Sequencing using deep learning, under{' '}
        <a href="https://qgenlab.github.io/team.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Dr. Q. Chris Liu
        </a>
        . There, I applied deep learning to third-generation sequencing data, expanding my experience beyond speech AI into genomics.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        I am currently based in Sheffield, working as a Senior Research Fellow and Applied AI Scientist at the{' '}
        <a href="https://sheffield.ac.uk/cs/research/groups/spandh" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          University of Sheffield
        </a>
        , focusing on identifying cognitive decline such as dementia and mild cognitive impairment (MCI) using speech audio, under{' '}
        <a href="https://sheffield.ac.uk/cs/people/academic/heidi-christensen" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Professor Heidi Christensen
        </a>
        .
      </p>
      <p className="text-lg leading-relaxed mb-4">
        In this role, I have also mastered an end-to-end ML pipeline using multimodal AI on audio, text, and image (facial cues from captured video) from the{' '}
        <a href="https://www.cognospeak.co.uk/cognomemory" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          CognoSpeak
        </a>
        platform.
      </p>

      <h2 className="text-2xl font-bold font-bricolage mt-8 mb-4">Side Projects & Interests</h2>
      <p className="text-lg leading-relaxed mb-4">
        Beyond research, I enjoy solving real-world problems through AI. For example, I developed a{' '}
        <a href="https://github.com/Madhurananda/territory-map-management" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          map distribution system
        </a>
        {' '} for the local congregation as a full-stack web developer.
      </p>

      {/* Image: Madhu giving a talk */}
      <div className="my-6">
        <Image
          src="/madhu-talk.jpg"
          alt="Dr. Madhu Pahar giving a talk"
          width={800}
          height={450}
          className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-full"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          Presenting research at the{' '}
          <a href="https://pintofscience.co.uk/event/tech-futures-hacking-the-brain/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Pint of Science festival
          </a>
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-4">
        I also enjoy travelling, exploring different cultures, teaching the general public about AI, and cooking.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        I'm passionate about building AI that has a measurable real-world impact. Whether through healthcare research, open-source software, or modern AI applications, I enjoy transforming complex ideas into practical systems that people can use.
      </p>

      <h2 className="text-2xl font-bold font-bricolage mt-8 mb-4">Contact</h2>
      
      {/* Social Links */}
      <div className="mt-6 pt-8 border-t border-gray-200 dark:border-gray-800">
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
            href="mailto:madhuranandapahar@gmail.com"
            className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition"
            aria-label="Email"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </div>
      </div>

    </div>
  );
}