import { STRATEGIES } from 'vue-i18n-routing';

const appVersion: string = process.env.COMMIT_REF || 'COMMIT_REF';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    telemetry: false,

    modules: [
        '@nuxt/ui-pro',
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-07-11',

    app: {
        baseURL: '/',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            meta: [{ name: 'darkreader-lock', content: '' }],
        },
    },
    css: ['~/assets/css/main.css'],

    icon: {
        collections: ['ph', 'lucide', 'mdi', 'simple-icons', 'flagpack'],
        serverBundle: 'local',
    },

    fonts: {
        families: [{ name: 'DM Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], global: true }],
    },

    devtools: {
        enabled: true,
    },

    typescript: {
        strict: false,
    },

    vite: {
        define: {
            APP_VERSION: `"${appVersion}"`,
        },
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
        build: {
            markdown: {
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
                        'templ',
                        'diff',
                        'lua',
                    ],
                },
            },
        },
        preview: {
            api: 'https://api.nuxt.studio',
        },
    },

    image: {
        provider: 'none',
    },

    routeRules: {
        '/getting-started/installation/hosted': {
            redirect: {
                to: '/getting-started/installation/cloud',
                statusCode: 301,
            },
        },
    },
});
