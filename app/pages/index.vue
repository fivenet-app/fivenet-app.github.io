<script lang="ts" setup>
import type { Collections, IndexDeCollectionItem, IndexEnCollectionItem } from '@nuxt/content';
import type { ButtonProps } from '@nuxt/ui';
import CountUp from 'vue-countup-v3';
import '~/assets/css/herofull-pattern.css';

const { t, locale } = useI18n();

const localePath = useLocalePath();

const { data: page } = await useAsyncData<IndexEnCollectionItem | IndexDeCollectionItem>(
    'index',
    async () => {
        const collection = ('index_' + locale.value) as keyof Collections;
        try {
            const content = await queryCollection(collection).first();
            if (content) {
                return content as IndexEnCollectionItem | IndexDeCollectionItem;
            }
        } catch {
            // No need to handle the error
        }

        // Fallback to default locale if content is missing in non-default locale
        return await queryCollection('index_en').first();
    },
    {
        watch: [locale],
    },
);
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

definePageMeta({
    layout: 'landing',
    showCookieOptions: true,
});

useSeoMeta({
    ogTitle: 'FiveNet',
    description: 'FiveNet project website and documentation.',
    ogDescription: 'FiveNet project website and documentation.',
});

const appVersion = APP_VERSION.split('-')[0];

const links = computed<ButtonProps[]>(() => [
    {
        label: t('common.demo'),
        icon: 'i-mdi-lightning-bolt',
        size: 'lg',
        color: 'neutral',
        to: localePath('/getting-started/demo'),
    },
    {
        label: t('common.docs'),
        icon: 'i-mdi-book-open-variant-outline',
        size: 'lg',
        to: localePath('/getting-started'),
    },
]);

const features = computed(() => ({
    title: t('docs.features.title'),
    description: undefined,
    items: [
        {
            title: t('docs.features.items.citizens.title'),
            description: t('docs.features.items.citizens.description'),
            icon: 'i-mdi-account-multiple-outline',
            to: localePath('/user-guides/citizens'),
        },
        {
            title: t('docs.features.items.vehicles.title'),
            description: t('docs.features.items.vehicles.description'),
            icon: 'i-mdi-car-outline',
            to: localePath('/user-guides/vehicles'),
        },
        {
            title: t('docs.features.items.documents.title'),
            description: t('docs.features.items.documents.description'),
            icon: 'i-mdi-file-document-box-multiple-outline',
            to: localePath('/user-guides/documents'),
        },
        {
            title: t('docs.features.items.jobs.title'),
            description: t('docs.features.items.jobs.description'),
            icon: 'i-mdi-briefcase-outline',
            to: localePath('/user-guides/jobs'),
        },
        {
            title: t('docs.features.items.calendar.title'),
            description: t('docs.features.items.calendar.description'),
            icon: 'i-mdi-calendar-outline',
            to: localePath('/user-guides/calendar'),
        },
        {
            title: t('docs.features.items.mailer.title'),
            description: t('docs.features.items.mailer.description'),
            icon: 'i-mdi-email',
            to: localePath('/user-guides/mailer'),
        },
        {
            title: t('docs.features.items.livemap.title'),
            description: t('docs.features.items.livemap.description'),
            icon: 'i-mdi-map-outline',
            to: localePath('/user-guides/livemap'),
        },
        {
            title: t('docs.features.items.centrum.title'),
            description: t('docs.features.items.centrum.description'),
            icon: 'i-mdi-car-emergency',
            to: localePath('/user-guides/centrum'),
        },
        {
            title: t('docs.features.items.i18n.title'),
            description: t('docs.features.items.i18n.description'),
            icon: 'i-mdi-language',
            to: localePath('/user-guides/i18n'),
        },
        {
            title: t('docs.features.items.nuxt3_ui.title'),
            description: t('docs.features.items.nuxt3_ui.description'),
            icon: 'i-simple-icons-nuxtdotjs',
            to: 'https://nuxt.com',
        },
        {
            title: t('docs.features.items.open_source.title'),
            description: t('docs.features.items.open_source.description'),
            icon: 'i-simple-icons-git',
            to: 'https://github.com/fivenet-app/fivenet',
        },
    ],
}));
</script>

<template>
    <div>
        <UPageHero
            :title="$t('pages.index.welcome')"
            :description="$t('pages.index.description')"
            :links="links"
            :ui="{ description: 'text-(--ui-text-highlighted)' }"
        >
            <template #headline>
                <UBadge color="neutral" :label="$t('pages.index.headline')" />
            </template>

            <template #top>
                <div
                    class="dark:bg-(--ui-primary) absolute left-1/2 size-60 -translate-x-1/2 -translate-y-80 transform rounded-full blur-[300px] sm:size-80"
                />

                <StarsBg />
            </template>

            <div class="hero absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]"></div>

            <div class="relative">
                <UPageCard variant="subtle" class="rounded-2xl">
                    <img src="/images/screenshots/overview.png" alt="FiveNet App Overview" />
                </UPageCard>
            </div>
        </UPageHero>

        <UPageSection
            :title="$t('pages.index.what_is.title')"
            :description="$t('pages.index.what_is.description')"
            orientation="horizontal"
            :ui="{ headline: 'flex' }"
        >
            <template #headline>
                <UButton
                    color="neutral"
                    :to="`https://github.com/fivenet-app/fivenet/releases/tag/${appVersion}`"
                    :external="true"
                    :label="
                        $t('pages.index.whats_new_in', {
                            version: appVersion,
                        })
                    "
                    trailing-icon="i-mdi-arrow-right"
                    size="xs"
                    class="rounded-full"
                />
            </template>

            <ImagePlaceholder src="/images/screenshots/ingame-tablet.png" alt="FiveNet FiveM in-game Tablet" />
        </UPageSection>

        <UPageSection :title="features.title" :description="features.description ?? undefined" class="!pt-0">
            <UPageGrid>
                <UPageCard v-for="(item, index) of features.items" :key="index" v-bind="item" />
            </UPageGrid>
        </UPageSection>

        <UPageSection
            v-for="(section, index) in page.sections"
            :key="index"
            :title="section.title"
            :description="section.description"
            :orientation="section.orientation"
            :reverse="section.reverse"
            :features="section.features"
        >
            <template #title>
                <MDC :value="section.title" class="sm:*:leading-11" />
            </template>

            <ImagePlaceholder v-if="section?.image" :src="section?.image?.src" :alt="section?.image?.alt" />

            <UPageCTA
                v-if="section?.cta"
                v-bind="section.cta"
                :ui="{ root: 'mx-auto max-w-2xl', container: 'px-2 py-6 sm:px-4 sm:py-6 lg:px-4 lg:py-6 gap-4 sm:gap-4' }"
            />
        </UPageSection>

        <UPageSection
            v-if="page.testimonials"
            id="testimonials"
            :headline="page.testimonials.headline"
            :description="page.testimonials.description"
        >
            <template #title>
                <MDC :value="page.testimonials.title" />
            </template>

            <UPageColumns :class="page.testimonials.items.length <= 2 ? 'md:columns-2 lg:columns-2' : 'xl:columns-4'">
                <UPageCard
                    v-for="(testimonial, index) in page.testimonials.items"
                    :key="index"
                    variant="subtle"
                    :description="testimonial.quote"
                    :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]', footer: 'mt-0' }"
                >
                    <template #footer>
                        <UUser v-bind="testimonial.user" size="lg" />
                    </template>
                </UPageCard>
            </UPageColumns>
        </UPageSection>

        <UPageSection :title="$t('components.stats.title')" :description="$t('components.stats.description')" class="!pt-0">
            <UPageGrid>
                <UPageCard
                    v-for="stat in page.stats"
                    :key="stat.key"
                    :title="$t(`components.stats.stats.${stat.key}`)"
                    :icon="stat.icon"
                >
                    <template #description>
                        <p
                            class="mt-2 flex w-full items-center gap-x-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                        >
                            <template v-if="stat.type === 'seconds'">
                                {{
                                    fromSecondsToFormattedDuration(stat.number, {
                                        seconds: false,
                                        emptyText: 'common.none',
                                    })
                                }}
                            </template>
                            <template v-else-if="stat.type === 'unit'">
                                {{ $n(stat.number) }}
                                {{ $t(stat.unit ?? 'common.time_ago.week', 2) }}
                            </template>
                            <ClientOnly v-else>
                                <CountUp :end-val="stat.number" :options="{ enableScrollSpy: true }" />
                            </ClientOnly>
                        </p>
                    </template>
                </UPageCard>
            </UPageGrid>
        </UPageSection>

        <UPageSection
            id="faq"
            :title="page.faq.title"
            :description="page.faq.description"
            class="scroll-mt-[var(--header-height)]"
        >
            <UPageAccordion multiple :items="page.faq.items" class="mx-auto max-w-4xl" />
        </UPageSection>

        <USeparator />

        <UPageCTA v-if="page.cta" v-bind="page.cta" variant="naked" class="overflow-hidden">
            <template #title>
                <MDC :value="page.cta.title" />
            </template>

            <div
                class="dark:bg-(--ui-primary) sm:size-50 absolute left-1/2 size-40 -translate-x-1/2 -translate-y-80 transform rounded-full blur-[250px]"
            />

            <StarsBg />
        </UPageCTA>
    </div>
</template>
