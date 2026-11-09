import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // This must match the domain in your site.ts config!
  site: 'https://realestatecousin.com', 
  
  integrations: [sitemap()],
});