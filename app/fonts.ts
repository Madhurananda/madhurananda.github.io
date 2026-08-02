import localFont from 'next/font/local';

export const bricolage = localFont({
  src: '../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2',
  variable: '--font-bricolage',
  weight: '200 800',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial'],
});

export const newsreader = localFont({
  src: '../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2',
  variable: '--font-newsreader',
  weight: '200 800',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman'],
});

export const jetbrainsMono = localFont({
  src: '../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
  variable: '--font-jetbrains',
  weight: '100 800',
  display: 'swap',
  fallback: ['SFMono-Regular', 'Consolas'],
});
