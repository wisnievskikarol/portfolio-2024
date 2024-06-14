import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config'


export default defineConfig({
  integrations: [react(),tailwind()],
})
