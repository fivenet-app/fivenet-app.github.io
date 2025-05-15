<script setup lang="ts">
import type { PageCollections } from '@nuxt/content';

const { finalizePendingLocaleChange, t, locale, locales } = useI18n();

const localePath = useLocalePath();

const { data: navigation } = await useAsyncData(
    'navigation',
    async () => {
        const collection = ('content_' + locale.value) as keyof PageCollections;
        try {
            const content = await queryCollectionNavigation(collection);
            if (content) {
                if (locale.value !== 'en') {
                    return content[0].children ?? content;
                }
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
        const collection = ('content_' + locale.value) as keyof PageCollections;
        try {
            const content = await queryCollectionSearchSections(collection);
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

async function clickListener(event: MouseEvent): Promise<void> {
    if (!event.srcElement) {
        return;
    }

    const element = event.srcElement as HTMLElement;
    if (element.tagName.toLowerCase() !== 'a' && !element.hasAttribute('href')) {
        return;
    }
    const href = element.getAttribute('href');
    if (!href?.startsWith('/')) {
        return;
    }

    event.preventDefault();
    await navigateTo(localePath(href));
}

onMounted(async () => {
    if (!import.meta.client) {
        return;
    }

    window.addEventListener('click', clickListener);
});

onBeforeUnmount(async () => {
    if (!import.meta.client) {
        return;
    }

    window.removeEventListener('click', clickListener);
});

provide('navigation', navigation);
</script>

<template>
    <UApp :locale="locales[locale]">
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
