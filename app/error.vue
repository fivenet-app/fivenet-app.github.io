<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { NuxtError } from '#app';
import type { PageCollections } from '@nuxt/content';
import AppHeader from './components/AppHeader.vue';
import CookieControl from './components/CookieControl.vue';

defineProps<{
    error: NuxtError;
}>();

useHead({
    htmlAttrs: {
        lang: 'en',
    },
});

useSeoMeta({
    title: 'Page not found',
    description: 'We are sorry but this page could not be found.',
});

const { locale } = useI18n();

const { data: navigation } = await useAsyncData(
    'navigation',
    async () => {
        const collection = ('content_' + locale.value) as keyof PageCollections;
        try {
            const content = await queryCollectionNavigation(collection);
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

provide('navigation', navigation);
</script>

<template>
    <UApp>
        <AppHeader />

        <UError :error="error" />

        <AppFooter />

        <ClientOnly>
            <LazyUContentSearch :files="files" :navigation="navigation" />

            <CookieControl />
        </ClientOnly>
    </UApp>
</template>
