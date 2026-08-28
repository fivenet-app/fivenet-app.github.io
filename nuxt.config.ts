import { STRATEGIES } from 'vue-i18n-routing';

const appVersion: string = process.env.COMMIT_REF || 'COMMIT_REF';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    telemetry: false,

    modules: [
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxtjs/mdc',
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

    compatibilityDate: '2025-12-20',

    experimental: {
        payloadExtraction: true,
    },

    /*
    hub: {
        db: {
            dialect: 'sqlite',
            driver: 'd1',
            connection: {
                database: 'fivenet-app-github-io',
                databaseId: '881bf0ec-c4c3-48c3-a46c-adf5a752a7fc',
            },
        },
    },
    */

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

    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN,
    },

    css: ['~/assets/css/main.css'],

    icon: {
        collections: ['mdi', 'simple-icons', 'flagpack'],
        provider: 'iconify',
        clientBundle: {
            scan: true,
            icons: [
                // Nuxt UI Icons (from app.config.ts)
                'mdi:arrow-down',
                'mdi:arrow-left',
                'mdi:arrow-right',
                'mdi:arrow-up',
                'mdi:alert-circle',
                'mdi:check',
                'mdi:chevron-double-left',
                'mdi:chevron-double-right',
                'mdi:chevron-down',
                'mdi:chevron-left',
                'mdi:chevron-right',
                'mdi:chevron-up',
                'mdi:close',
                'mdi:content-copy',
                'mdi:check-circle-outline',
                'mdi:moon-waning-crescent',
                'mdi:drag-vertical',
                'mdi:dots-horizontal',
                'mdi:close-circle',
                'mdi:arrow-top-right',
                'mdi:eye',
                'mdi:eye-off',
                'mdi:file-document',
                'mdi:folder',
                'mdi:folder-open',
                'mdi:pound',
                'mdi:information',
                'mdi:white-balance-sunny',
                'mdi:loading',
                'mdi:menu',
                'mdi:minus',
                'mdi:menu-close',
                'mdi:menu-open',
                'mdi:plus',
                'mdi:reload',
                'mdi:magnify',
                'mdi:star-outline',
                'mdi:stop',
                'mdi:check-circle',
                'mdi:monitor',
                'mdi:lightbulb-variant',
                'mdi:upload',
                'mdi:alert',
            ],
        },
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
        optimizeDeps: {
            include: ['@vue/devtools-core', '@vue/devtools-kit', 'emoji-blast', 'mermaid', '@mermaid-js/layout-elk'],
        },
    },

    nitro: {
        preset: 'github_pages',
        prerender: {
            routes: ['/', '/changelog', '/de/changelog'],
        },

        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
            wrangler: {
                routes: [
                    //{
                    //    "pattern": "fivenet.app",
                    //    "custom_domain": true
                    //},
                ],
            },
        },
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

    ui: {
        theme: {
            colors: ['blue', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
        },
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
                        'powershell',
                    ],
                },
            },
        },
    },

    mdc: {
        highlight: false,
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
