'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) setTheme(stored);
    else if (window.matchMedia('(prefers-color-scheme:dark)').matches) setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-border)] transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
