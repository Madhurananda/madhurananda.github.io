import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Template/Navigation';
import Footer from '@/components/Template/Footer';
import { bricolage, newsreader, jetbrainsMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dr. Madhu Pahar',
    template: '%s | Dr. Madhu Pahar',
  },
  description: 'Senior Research Fellow | AI/ML Engineer | University of Sheffield',
  keywords: [
    'Dr. Madhu Pahar',
    'AI in healthcare',
    'speech processing',
    'machine learning',
    'multimodal AI',
    'clinical AI',
    'dementia detection',
    'cough analysis',
    'Oxford Nanopore',
  ],
  authors: [{ name: 'Dr. Madhu Pahar' }],
  creator: 'Dr. Madhu Pahar',
  metadataBase: new URL('https://madhurananda.github.io'),
  openGraph: {
    title: 'Dr. Madhu Pahar',
    description: 'Senior Research Fellow | AI/ML Engineer | University of Sheffield',
    url: 'https://madhurananda.github.io',
    siteName: 'Dr. Madhu Pahar',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Madhu Pahar',
    description: 'Senior Research Fellow | AI/ML Engineer | University of Sheffield',
  },
  robots: {
    googleBot: {
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`}
        </Script>
      </head>
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-text)]" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1 max-w-4xl mx-auto px-4 md:px-8 py-8 w-full">
            <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 md:p-10 shadow-sm transition-colors">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}