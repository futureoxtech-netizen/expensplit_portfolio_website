import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: '',                  priority: 1.0, freq: 'weekly'  as const },
    { url: '/download',         priority: 0.9, freq: 'monthly' as const },
    { url: '/faq',              priority: 0.7, freq: 'monthly' as const },
    { url: '/support',          priority: 0.7, freq: 'monthly' as const },
    { url: '/contact',          priority: 0.5, freq: 'yearly'  as const },
    { url: '/privacy-policy',   priority: 0.6, freq: 'yearly'  as const },
    { url: '/terms',            priority: 0.6, freq: 'yearly'  as const },
    { url: '/cookies',          priority: 0.4, freq: 'yearly'  as const },
    { url: '/delete-account',   priority: 0.5, freq: 'yearly'  as const },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.url}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
