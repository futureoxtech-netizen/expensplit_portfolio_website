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
      { src: '/expensplit_witthour_backround.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/expensplit_witthour_backround.png', sizes: 'any',     type: 'image/png', purpose: 'any' },
      { src: '/expensplit_witthour_backround.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
