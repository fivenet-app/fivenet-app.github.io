<script setup lang="ts">
import type { NavItem, ParsedContent } from '@nuxt/content';

const { finalizePendingLocaleChange, setLocale, t, locale } = useI18n();

const { data: navigation } = await useAsyncData<NavItem[]>('navigation', () => fetchContentNavigation(), {
    default: () => [],
});
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
    default: () => [],
    server: false,
});

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png',
        },
    ],
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

locale.value = 'en';
await setLocale('en');

/*
const route = useRoute();
const toast = useToast();

onMounted(() => {
    if (route.query.locale_switched === undefined) {
        return;
    }

    toast.add({
        title: t("notifications.language_switched.title"),
        description: t("notifications.language_switched.content"),
        color: "green",
        timeout: 1750,
    });
});
*/

provide('navigation', navigation);
</script>

<template>
    <div>
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

        <Footer />

        <ClientOnly>
            <LazyUContentSearch :files="files" :navigation="navigation" />
        </ClientOnly>

        <UModals />
        <UNotifications />

        <CookieControl />
    </div>
</template>
