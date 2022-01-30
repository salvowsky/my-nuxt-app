import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
buildModules: [
        '@inkline/nuxt'
    ],
    css: [
        '~/main.scss'
    ],
    inkline: {
        // Plugin options (optional)
    }
});
