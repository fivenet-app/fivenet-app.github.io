<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { NuxtError } from '#app';
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

const collection = ('content_' + locale.value) as keyof Collections;

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation(collection));
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections(collection), {
    server: false,
});

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
