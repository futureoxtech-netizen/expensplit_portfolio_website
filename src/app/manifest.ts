import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B12',
    theme_color: SITE.themeColor,
    orientation: 'portrait',
    categories: ['finance', 'productivity', 'lifestyle'],
    icons: [
      { src: '/logo-icon.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any' },
      { src: '/favicon.svg',   sizes: 'any',     type: 'image/svg+xml', purpose: 'any' },
      { src: '/logo-mono.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'maskable' },
    ],
  };
}
