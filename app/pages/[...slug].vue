<script setup lang="ts">
import type { ContentDeCollectionItem, ContentEnCollectionItem, ContentNavigationItem, PageCollections } from '@nuxt/content';
import { findPageHeadline } from '@nuxt/content/utils';
import { withLeadingSlash } from 'ufo';

definePageMeta({
    layout: 'docs',
});

const route = useRoute();
const { t, locale, locales, localeProperties } = useI18n();
const localePath = useLocalePath();
const slug = computed(() => withLeadingSlash(route.path).replace(/^\/en\//, '/'));
const fallbackSlug = computed(() => withLeadingSlash(route.path).replace(/^\/(?:en|de)(?=\/|$)/, '') || '/');

const pageLocale = computed(() => {
    const path = withLeadingSlash(route.path);
    if (/^\/en\//.test(path)) return 'en';

    const l = path.split('/')[1] ?? locale.value;
    if (locales.value.find((loc) => (typeof loc === 'string' ? loc === l : loc.code === l))) {
        return l;
    }

    return 'en';
});

const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const { data: page } = await useAsyncData<ContentEnCollectionItem | ContentDeCollectionItem>(
    `page-${slug.value}`,
    async () => {
        const collection = ('content_' + pageLocale.value) as keyof PageCollections;
        try {
            const content = await queryCollection(collection).path(slug.value).first();
            if (content) {
                return content;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollection('content_en').path(fallbackSlug.value).first();
    },
    {
        watch: [locale],
    },
);
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

if (page.value.redirect) {
    const redirect = page.value.redirect;
    const isExternalRedirect = /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(redirect);

    if (isExternalRedirect) {
        await navigateTo(redirect, { external: true, redirectCode: 301 });
    } else {
        // Redirects are stored in frontmatter and may use either a locale-prefixed
        // path (for example, `/de/...`) or a locale-neutral path. Normalize both
        // forms through Nuxt i18n so the destination matches the current page.
        const localeNeutralRedirect = withLeadingSlash(redirect).replace(/^\/(?:en|de)(?=\/|$)/, '') || '/';
        const localizedRedirect = localePath(localeNeutralRedirect, pageLocale.value as 'en' | 'de');

        if (localizedRedirect !== route.path) {
            await navigateTo(localizedRedirect, { redirectCode: 301 });
        }
    }
}

const { data: surround } = await useAsyncData(
    `${route.path}-surround`,
    async () => {
        const collection = ('content_' + pageLocale.value) as keyof PageCollections;
        try {
            const content = await queryCollectionItemSurroundings(collection, route.path, {
                fields: ['description'],
            });
            if (content) {
                return content;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollectionItemSurroundings('content_en', fallbackSlug.value, {
            fields: ['description'],
        });
    },
    {
        watch: [locale],
    },
);

useSeoMeta({
    title: page.value.title,
    ogTitle: `${page.value.title} - FiveNet`,
    description: page.value.description,
    ogDescription: page.value.description,
});

const headline = computed(() => findPageHeadline(navigation.value, page.value.title));

const links = computed(() =>
    [
        toc?.bottom?.edit && {
            icon: 'i-mdi-pencil-box',
            label: t('docs.toc.bottom.edit'),
            to: `${toc.bottom.edit}/${pageLocale.value === 'en' ? pageLocale.value + '/' : ''}${page?.value?.stem}.${page?.value?.extension}`,
            target: '_blank',
        },
        {
            icon: 'i-mdi-star',
            label: t('docs.toc.bottom.star'),
            to: 'https://github.com/fivenet-app/fivenet',
            target: '_blank',
        },
    ].filter(Boolean),
);
</script>

<template>
    <UPage v-if="page" :ui="{ center: 'lg:col-span-7', right: 'lg:col-span-3' }">
        <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

        <UPageBody>
            <ContentRenderer v-if="page" ref="contentRendererRef" :dir="localeProperties?.dir ?? 'ltr'" :value="page" />

            <USeparator v-if="surround?.length" />

            <UContentSurround :surround="surround" />
        </UPageBody>

        <template v-if="page?.body?.toc?.links?.length" #right>
            <UContentToc :title="$t('common.toc')" :links="page.body?.toc?.links">
                <template v-if="toc?.bottom" #bottom>
                    <div class="hidden space-y-6 lg:block" :class="{ '!mt-6': page.body?.toc?.links?.length }">
                        <USeparator v-if="page.body?.toc?.links?.length" type="dashed" />

                        <UPageLinks :title="$t('common.community')" :links="links" />
                    </div>
                </template>
            </UContentToc>
        </template>
    </UPage>
</template>
