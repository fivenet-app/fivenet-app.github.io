import { STRATEGIES } from 'vue-i18n-routing';

const appVersion: string = process.env.COMMIT_REF || 'COMMIT_REF';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/fonts',
        '@nuxtjs/fontaine',
        '@nuxthq/studio',
        'nuxt-og-image',
        '@nuxtjs/fontaine',
        "@nuxt/image"
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-07-05',

    hooks: {
        // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
        'components:extend': (components) => {
            const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName));

            globals.forEach((c) => (c.global = true));
        },
    },

    ui: {
        icons: ['mdi', 'simple-icons', 'flagpack'],
        safelistColors: ['primary', 'malibu'],
    },

    fonts: {
        families: [{ name: 'DM Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], global: true }],
    },

    routeRules: {
        '/api/search.json': { prerender: true },
    },

    devtools: {
        enabled: true,
    },

    typescript: {
        strict: false,
    },

    vue: {
        compilerOptions: {
            comments: false,
        },
    },

    vite: {
        define: {
            __APP_VERSION__: `"${appVersion}"`,
        },
    },

    i18n: {
        strategy: STRATEGIES.PREFIX_EXCEPT_DEFAULT,
        detectBrowserLanguage: {
            useCookie: false,
        },
        skipSettingLocaleOnNavigate: true,
        locales: [
            {
                name: 'English',
                dir: 'ltr',
                isCatchallLocale: true,
                code: 'en',
                iso: 'en',
                files: ['en.json'],
                icon: 'i-flagpack-gb-ukm',
            },
            {
                name: 'German',
                code: 'de',
                iso: 'de',
                files: ['de.json'],
                icon: 'i-flagpack-de',
            },
        ],
        debug: false,
        lazy: true,
        langDir: './lang',
        defaultLocale: 'en',
        defaultDirection: 'ltr',
        baseUrl: '',
        trailingSlash: false,
        compilation: {
            strictMessage: false,
        },
        parallelPlugin: true,
    },

    piniaPersistedstate: {
        storage: 'localStorage',
        debug: false,
    },

    build: {
        transpile: ['vue-countup-v3'],
    },
});
