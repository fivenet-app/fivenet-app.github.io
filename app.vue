<script setup lang="ts">
import type { NavItem, ParsedContent } from "@nuxt/content";

const { finalizePendingLocaleChange, t } = useI18n();

const toast = useToast();

const { data: navigation } = await useAsyncData<NavItem[]>(
    "navigation",
    () => fetchContentNavigation(),
    {
        default: () => [],
    }
);
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
    default: () => [],
    server: false,
});

useHead({
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", href: "/favicon.ico" }],
    htmlAttrs: {
        lang: "en",
    },
    titleTemplate: (title?: string) => {
        if (title?.includes(".")) {
            title = t(title);
        }
        return title ? `${title} - FiveNet` : "FiveNet";
    },
});

useSeoMeta({
    titleTemplate: (title?: string) => {
        if (title?.includes(".")) {
            title = t(title);
        }
        return title ? `${title} - FiveNet` : "FiveNet";
    },
    ogSiteName: "FiveNet",
    ogImage: "/images/social-card.png",
    twitterImage: "/images/social-card.png",
    twitterCard: "summary_large_image",
});

const onBeforeEnter = async () => {
    await finalizePendingLocaleChange();
};

const route = useRoute();

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

provide("navigation", navigation);
</script>

<template>
    <div>
        <NuxtLoadingIndicator
            color="repeating-linear-gradient(to right, #55dde0 0%, #34cdfe 50%, #7161ef 100%)"
        />

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
