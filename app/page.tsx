'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  FaOrcid,
  FaXTwitter,
  FaResearchgate,
} from 'react-icons/fa6';
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
  SiJupyter,           // Jupyter (alternative for some tools)
} from 'react-icons/si';
// For MATLAB and Java, use Font Awesome icons as fallback
import { FaJava, FaChartBar } from 'react-icons/fa';

export default function HomePage() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    import('typed.js').then((module) => {
      const Typed = module.default;
      if (typedRef.current) {
        new Typed(typedRef.current, {
          strings: [
            'I build AI systems that listen to clinical audio, sensor, and genomic data ',
            'I detect dementia, tuberculosis, and COVID‑19 from audio ',
            'I bridge AI with real‑world clinical deployment ',
          ],
          typeSpeed: 40,
          backSpeed: 0,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: ' ',
        });
      }
    });
  }, []);

  // Skills with icon components and labels
  const skills = [
    { icon: SiPython, label: 'Python' },
    { icon: SiPytorch, label: 'PyTorch' },
    { icon: SiTensorflow, label: 'TensorFlow' },
    { icon: SiKeras, label: 'Keras' },
    { icon: SiHuggingface, label: 'Hugging Face' },
    { icon: SiScikitlearn, label: 'Scikit-learn' },
    { icon: SiDjango, label: 'Django' },
    { icon: SiFastapi, label: 'FastAPI' },
    { icon: SiOpencv, label: 'OpenCV' },
    { icon: SiNumpy, label: 'NumPy' },
    { icon: SiPandas, label: 'Pandas' },
    { icon: SiDocker, label: 'Docker' },
    { icon: SiKubernetes, label: 'Kubernetes' },
    { icon: SiMysql, label: 'SQL' },
    { icon: SiR, label: 'R' },
    { icon: FaJava, label: 'Java' },        // Using Font Awesome for Java
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiGnubash, label: 'Bash' },
    { icon: SiJupyter, label: 'Jupyter' },
    // MATLAB – using Font Awesome chart icon as a placeholder
    { icon: FaChartBar, label: 'MATLAB' },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
            <img
              src="/photo.jpg"
              alt="Dr. Madhu Pahar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-2">
            Dr. Madhu Pahar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Senior Research Fellow · University of Sheffield
          </p>
          <p className="text-lg leading-relaxed max-w-2xl">
            <span ref={typedRef} className="font-medium text-accent"></span>
            <span className="animate-pulse">_</span>
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mt-4 text-gray-600 dark:text-gray-300">
            Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems using AI. 
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/about"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              About Me
            </Link>
            <Link
              href="/resume"
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>

      {/* ===== MOVING SKILL ICONS ===== */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4 text-center">Tech Stack &amp; Toolkits</h2>
        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="animate-marquee whitespace-nowrap flex gap-6 items-center">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <span
                  key={index}
                  className="inline-flex items-center justify-center text-3xl text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                  title={skill.label}
                >
                  <Icon />
                </span>
              );
            })}
            {/* Duplicate for seamless looping */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <span
                  key={`dup-${index}`}
                  className="inline-flex items-center justify-center text-3xl text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                  title={skill.label}
                >
                  <Icon />
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Selected Research Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h3 className="font-bold text-lg">CognoSpeak</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              AI-driven early detection of dementia from conversational speech.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h3 className="font-bold text-lg">CAGE‑TB</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Cough‑based tuberculosis screening using deep learning.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h3 className="font-bold text-lg">PROCESS‑2</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              A benchmark speech corpus for early cognitive impairment.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h3 className="font-bold text-lg">NanoCNN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Detecting RNA modifications from Oxford Nanopore sequencing.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-center">Connect with me</h2>
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
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
      </section>
    </>
  );
}