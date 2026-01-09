// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    adapter: netlify(),
    site: "https://www.ex-fiscal-anticorrupcion-martin-salas.pe",
    vite: {
        plugins: [tailwindcss()],
    },
    redirects: {
        "https://www.el-9-app.pe/": "https://www.ex-fiscal-anticorrupcion-martin-salas.pe",
    },
});
