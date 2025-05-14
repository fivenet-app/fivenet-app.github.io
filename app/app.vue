<script setup lang="ts">
const { finalizePendingLocaleChange, t } = useI18n();

const { locale } = useI18n();

const { data: navigation } = await useAsyncData(
    'navigation',
    async () => {
        const collection = ('content_' + locale.value) as keyof Collections;
        try {
            const content = await queryCollectionNavigation(collection).first();
            if (content) {
                return content;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollectionNavigation('content_en');
    },
    {
        watch: [locale],
    },
);

const { data: files } = useLazyAsyncData(
    'search',
    async () => {
        const collection = ('content_' + locale.value) as keyof Collections;
        try {
            const content = await queryCollectionSearchSections(collection).first();
            if (content) {
                return content;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollectionSearchSections('content_en');
    },
    {
        watch: [locale],
        server: false,
    },
);

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    titleTemplate: (title?: string) => {
        if (title?.includes('.')) {
            title = t(title);
        }
        return title ? `${title} - FiveNet` : 'FiveNet';
    },
});

useSeoMeta({
    titleTemplate: (title?: string) => {
        if (title?.includes('.')) {
            title = t(title);
        }
        return title ? `${title} - FiveNet` : 'FiveNet';
    },
    ogSiteName: 'FiveNet',
    ogImage: '/social-card.png',
    twitterImage: '/social-card.png',
    twitterCard: 'summary_large_image',
});

const onBeforeEnter = async () => {
    await finalizePendingLocaleChange();
};

provide('navigation', navigation);
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #55dde0 0%, #34cdfe 50%, #7161ef 100%)" />

        <UMain>
            <NuxtLayout>
                <NuxtPage
                    :transition="{
                        onBeforeEnter,
                    }"
                />
            </NuxtLayout>
        </UMain>

        <ClientOnly>
            <LazyUContentSearch :files="files" :navigation="navigation" />

            <CookieControl />
        </ClientOnly>
    </UApp>
</template>
