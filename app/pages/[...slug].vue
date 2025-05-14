<script setup lang="ts">
import { findPageHeadline } from '#ui-pro/utils/content';
import type { Collections, ContentNavigationItem } from '@nuxt/content';
import { withLeadingSlash } from 'ufo';

definePageMeta({
    layout: 'docs',
});

const route = useRoute();
const { t, locale, localeProperties } = useI18n();
const slug = computed(() => withLeadingSlash(String(route.path)));

const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const { data: page } = await useAsyncData(
    route.path,
    async () => {
        const collection = ('content_' + locale.value) as keyof Collections;
        try {
            const content = await queryCollection(collection).path(slug.value).first();
            if (content) {
                return content;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollection('content_en').path(slug.value).first();
    },
    {
        watch: [locale],
    },
);
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    return queryCollectionItemSurroundings(collection, route.path, {
        fields: ['description'],
    });
});

useSeoMeta({
    title: page.value.title,
    ogTitle: `${page.value.title} - FiveNet`,
    description: page.value.description,
    ogDescription: page.value.description,
});

const headline = computed(() => findPageHeadline(navigation.value, page.value));

const links = computed(() =>
    [
        toc?.bottom?.edit && {
            icon: 'i-mdi-pencil-box',
            label: t('docs.toc.bottom.edit'),
            to: `${toc.bottom.edit}/${page?.value?.stem}.${page?.value?.extension}`,
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
            <ContentRenderer v-if="page" :dir="localeProperties?.dir ?? 'ltr'" :value="page" />

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
