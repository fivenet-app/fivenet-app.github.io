export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            secondary: 'neutral',
            gray: 'gray',
            neutral: 'neutral',
        },

        icons: {
            arrowDown: 'i-mdi-arrow-down',
            arrowLeft: 'i-mdi-arrow-left',
            arrowRight: 'i-mdi-arrow-right',
            arrowUp: 'i-mdi-arrow-up',
            caution: 'i-mdi-alert-circle',
            check: 'i-mdi-check',
            chevronDoubleLeft: 'i-mdi-chevron-double-left',
            chevronDoubleRight: 'i-mdi-chevron-double-right',
            chevronDown: 'i-mdi-chevron-down',
            chevronLeft: 'i-mdi-chevron-left',
            chevronRight: 'i-mdi-chevron-right',
            chevronUp: 'i-mdi-chevron-up',
            close: 'i-mdi-close',
            copy: 'i-mdi-content-copy',
            copyCheck: 'i-mdi-check-circle-outline',
            dark: 'i-mdi-moon-waning-crescent',
            drag: 'i-mdi-drag-vertical',
            ellipsis: 'i-mdi-dots-horizontal',
            error: 'i-mdi-close-circle',
            external: 'i-mdi-arrow-top-right',
            eye: 'i-mdi-eye',
            eyeOff: 'i-mdi-eye-off',
            file: 'i-mdi-file-document',
            folder: 'i-mdi-folder',
            folderOpen: 'i-mdi-folder-open',
            hash: 'i-mdi-pound',
            info: 'i-mdi-information',
            light: 'i-mdi-white-balance-sunny',
            loading: 'i-mdi-loading',
            menu: 'i-mdi-menu',
            minus: 'i-mdi-minus',
            panelClose: 'i-mdi-menu-close',
            panelOpen: 'i-mdi-menu-open',
            plus: 'i-mdi-plus',
            reload: 'i-mdi-reload',
            search: 'i-mdi-magnify',
            star: 'i-mdi-star-outline',
            stop: 'i-mdi-stop',
            success: 'i-mdi-check-circle',
            system: 'i-mdi-monitor',
            tip: 'i-mdi-lightbulb-variant',
            upload: 'i-mdi-upload',
            warning: 'i-mdi-alert',
        },
    },

    toc: {
        bottom: {
            edit: 'https://github.com/fivenet-app/fivenet-app.github.io/edit/main/content',
        },
    },

    links: {
        imprint: '',
        privacyPolicy: '',
    },

    header: {
        links: [
            {
                icon: 'i-simple-icons-github',
                to: 'https://github.com/fivenet-app/fivenet',
                target: '_blank',
                'aria-label': 'GitHub',
            },
        ],
    },

    footer: {
        colorMode: false,
    },
    socials: [
        {
            title: 'GitHub',
            icon: 'i-simple-icons-github',
            to: 'https://github.com/fivenet-app',
            target: '_blank',
        },
        {
            title: 'Discord',
            icon: 'i-simple-icons-discord',
            to: 'https://discord.gg/ASRPPr8CeT',
            target: '_blank',
        },
    ],
});
