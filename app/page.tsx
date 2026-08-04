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
  SiJupyter,
} from 'react-icons/si';
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
    { icon: FaJava, label: 'Java' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiGnubash, label: 'Bash' },
    { icon: SiJupyter, label: 'Jupyter' },
    { icon: FaChartBar, label: 'MATLAB' },
  ];

  // News items from LinkedIn posts
  const newsItems = [
    {
      title: '6 Papers Accepted to Interspeech 2026',
      description:
        'We are thrilled to share that 6 of our papers have been accepted to Interspeech 2026, including work on speech biomarkers for dementia detection.',
      date: '2026',
      link: 'https://lnkd.in/p/eg8-8vaE',
      tags: ['#Interspeech2026', '#SpeechBiomarkers', '#DementiaDetection'],
    },
    {
      title: 'PROCESS-2: New Benchmark Speech Dataset Released',
      description:
        'PROCESS-2 is a new large-scale speech dataset with 400 participants across the UK, designed for cognitive assessment and dementia detection research. Available now under controlled access.',
      date: '2026',
      link: 'https://lnkd.in/p/eR_UPH_r',
      tags: ['#PROCESS2', '#SpeechDataset', '#CognitiveAssessment'],
    },
    {
      title: 'Neural Audio Codec Models for Dementia Detection',
      description:
        'Research visit at the University of Sheffield exploring neural audio codec models for dementia detection – a unified speech representation approach without requiring separate transcription.',
      date: '2026',
      link: 'https://lnkd.in/p/eF8ibb3t',
      tags: ['#NeuralAudioCodec', '#DementiaDetection', '#SpeechTechnology'],
    },
  ];

  return (
    <main className="homepage-main">
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
          {/* ===== TYPED TEXT WITH MIN-HEIGHT ===== */}
          <p className="text-lg leading-relaxed max-w-2xl min-h-[3.5rem]">
            <span ref={typedRef} className="font-medium text-accent"></span>
            <span className="animate-pulse">_</span>
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mt-4 text-gray-600 dark:text-gray-300">
            Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems using AI.
          </p>
          {/* ===== BUTTONS: Both identical and outlined ===== */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/resume"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:underline transition"
            >
              View Resume
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:underline transition"
            >
              About Me
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

      {/* ===== NEWS SECTION ===== */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow hover:border-accent group"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-block mt-3 text-sm text-accent font-medium group-hover:underline">
                Read on LinkedIn →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== PROFESSIONAL BANNER ===== */}
      <section className="mt-12">
        <div className="bg-gradient-to-r from-[var(--color-card)] to-[var(--color-bg)] dark:from-[var(--color-card)] dark:to-[var(--color-bg)] rounded-xl border border-[var(--color-border)] p-6 md:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[var(--color-text)] text-lg leading-relaxed opacity-80 whitespace-nowrap">
              Like this design?{' '}
              <span className="font-semibold text-accent">Fork the source code</span>{' '}
              and create your own personal website in minutes.
            </p>
            <a
              href="https://github.com/Madhurananda/madhurananda.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 border border-accent text-accent rounded-lg hover:underline transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View on GitHub
            </a>
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
    </main>
  );
}