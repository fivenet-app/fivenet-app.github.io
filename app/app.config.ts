export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            gray: 'neutral',
        },

        icons: {
            arrowLeft: 'mdi-arrow-left',
            arrowRight: 'mdi-arrow-right',
            check: 'mdi-check',
            chevronDoubleLeft: 'mdi-chevron-double-left',
            chevronDoubleRight: 'mdi-chevron-double-right',
            chevronDown: 'mdi-chevron-down',
            chevronLeft: 'mdi-chevron-left',
            chevronRight: 'mdi-chevron-right',
            chevronUp: 'mdi-chevron-up',
            close: 'mdi-close',
            drag: 'mdi-drag-vertical',
            ellipsis: 'mdi-dots-horizontal',
            external: 'mdi-arrow-top-right',
            file: 'mdi-file-document',
            folder: 'mdi-folder',
            folderOpen: 'mdi-folder-open',
            loading: 'mdi-loading',
            minus: 'mdi-minus',
            plus: 'mdi-plus',
            search: 'mdi-magnify',
            upload: 'mdi-upload',
            arrowUp: 'mdi-arrow-up',
            arrowDown: 'mdi-arrow-down',
            caution: 'mdi-alert-circle',
            copy: 'mdi-content-copy',
            copyCheck: 'mdi-check-circle-outline',
            dark: 'mdi-moon-waning-crescent',
            error: 'mdi-close-circle',
            eye: 'mdi-eye',
            eyeOff: 'mdi-eye-off',
            hash: 'mdi-pound',
            info: 'mdi-information',
            light: 'mdi-white-balance-sunny',
            menu: 'mdi-menu',
            panelClose: 'mdi-menu-close',
            panelOpen: 'mdi-menu-open',
            reload: 'mdi-reload',
            stop: 'mdi-stop',
            success: 'mdi-check-circle',
            system: 'mdi-monitor',
            tip: 'mdi-lightbulb-variant',
            warning: 'mdi-alert',
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
