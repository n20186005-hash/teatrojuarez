import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teatrojuarez.com',
  output: 'static',
  integrations: [sitemap({filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname), i18n: {defaultLocale: 'es', locales: {es: 'es-MX', en: 'en-US'}}})],
  vite: {
    plugins: [tailwindcss()]
  }
});
