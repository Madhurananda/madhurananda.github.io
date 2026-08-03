'use client';   // needed for client-side effects

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  FaOrcid,
} from 'react-icons/fa6';

export default function HomePage() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // dynamic import to avoid SSR issues
    import('typed.js').then((module) => {
      const Typed = module.default;
      if (typedRef.current) {
        new Typed(typedRef.current, {
          strings: [
            'I build AI systems that listen to clincial audio, sensor, and genomic data.',
            'I detect dementia, tuberculosis, and COVID‑19 from audio.',
            'I bridge AI with real‑world clinical deployment.',
          ],
          typeSpeed: 40,
          backSpeed: 0,           // no backspace animation
          backDelay: 2000,        // pause 1s before clearing (optional)
          loop: true,
          showCursor: true,
          cursorChar: '_',
        });
      }
    });
  }, []);

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
            Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems using AI. 
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

      {/* Research Highlights (same as before) */}
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
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Madhurananda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
            aria-label="Google Scholar"
          >
            <FaGoogleScholar />
          </a>
          <a
            href="https://orcid.org/0000-0002-5926-0144"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
            aria-label="ORCID"
          >
            <FaOrcid />
          </a>
          <a
            href="mailto:mad hupahar@gmail.com"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
            aria-label="Email"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </div>
      </section>
    </>
  );
}