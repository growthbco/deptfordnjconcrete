// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://deptfordnjconcrete.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Custom pages configuration for proper priorities
      customPages: [
        // Homepage - highest priority
        {
          url: 'https://deptfordnjconcrete.com/',
          changefreq: 'weekly',
          priority: 1.0,
          lastmod: new Date(),
        },
      ],
    }),
  ],
});
