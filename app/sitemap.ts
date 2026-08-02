import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://madhurananda.github.io/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://madhurananda.github.io/about/', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://madhurananda.github.io/resume/', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://madhurananda.github.io/projects/', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://madhurananda.github.io/contact/', changeFrequency: 'yearly', priority: 0.5 },
  ];
}
