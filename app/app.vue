<script setup lang="ts">
const { finalizePendingLocaleChange, t } = useI18n();

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'));

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
    server: false,
});

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
        color: "success",
        timeout: 1750,
    });
});
*/

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
