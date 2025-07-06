export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            gray: 'neutral',
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
                to: 'https://github.com/fivenet-app/fivenet-app.github.io/tree/main',
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
