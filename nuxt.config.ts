import { STRATEGIES } from 'vue-i18n-routing';

const appVersion: string = process.env.COMMIT_REF || 'COMMIT_REF';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxthq/studio',
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-07-11',

    hooks: {
        // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
        'components:extend': (components) => {
            const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName));

            globals.forEach((c) => (c.global = true));
        },
    },

    ui: {
        safelistColors: ['primary'],
    },
    icon: {
        collections: ['ph', 'mdi', 'simple-icons', 'flagpack'],
        serverBundle: 'local',
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
            APP_VERSION: `"${appVersion}"`,
        },
    },

    app: {
        baseURL: '/',
    },

    nitro: {
        preset: 'github_pages',
    },

    i18n: {
        strategy: STRATEGIES.PREFIX_EXCEPT_DEFAULT,
        detectBrowserLanguage: {
            useCookie: false,
            fallbackLocale: 'en',
        },
        skipSettingLocaleOnNavigate: true,
        locales: [
            {
                name: 'English',
                dir: 'ltr',
                isCatchallLocale: true,
                code: 'en',
                language: 'en',
                files: ['en.json'],
                icon: 'i-flagpack-gb-ukm',
            },
            {
                name: 'German',
                code: 'de',
                language: 'de',
                files: ['de.json'],
                icon: 'i-flagpack-de',
            },
        ],
        lazy: true,
        defaultLocale: 'en',
        defaultDirection: 'ltr',
        baseUrl: '',
        trailingSlash: false,
        compilation: {
            strictMessage: false,
        },
        parallelPlugin: true,
    },

    piniaPluginPersistedstate: {
        storage: 'localStorage',
        debug: false,
    },

    build: {
        transpile: ['vue-countup-v3'],
    },

    content: {
        highlight: {
            langs: [
                'js',
                'jsx',
                'json',
                'ts',
                'tsx',
                'vue',
                'css',
                'html',
                'vue',
                'bash',
                'md',
                'mdc',
                'yaml',
                'sql',
                'go',
                'yml',
                'console',
            ],
        },
    },
});
