<script lang="ts" setup>
import type { ButtonSize, ButtonColor } from "#ui/types";
import CountUp from "vue-countup-v3";
import "~/assets/css/herofull-pattern.css";

const { data: page } = await useAsyncData("index", () =>
    queryContent("/").findOne()
);

useHead({
    title: "common.home",
});
definePageMeta({
    title: "common.home",
    layout: "landing",
    requiresAuth: false,
    showCookieOptions: true,
});

const { t } = useI18n();

const appVersion = APP_VERSION.split("-")[0];

const links = [
    {
        label: t("common.docs"),
        icon: "i-mdi-book-open-variant-outline",
        size: "lg" as ButtonSize,
        to: "/getting-started",
    },
];

const features = {
    title: t("docs.features.title"),
    description: undefined,
    links: [
        {
            label: t("docs.features.links.explore.label"),
            trailingIcon: "i-mdi-arrow-right",
            color: "gray" as ButtonColor,
            to: "/getting-started",
            size: "lg" as ButtonSize,
        },
    ],
    items: [
        {
            title: t("docs.features.items.citizens.title"),
            description: t("docs.features.items.citizens.description"),
            icon: "i-mdi-account-multiple-outline",
            to: "/user-guides/citizens",
        },
        {
            title: t("docs.features.items.vehicles.title"),
            description: t("docs.features.items.vehicles.description"),
            icon: "i-mdi-car-outline",
            to: "/user-guides/vehicles",
        },
        {
            title: t("docs.features.items.documents.title"),
            description: t("docs.features.items.documents.description"),
            icon: "i-mdi-file-document-box-multiple-outline",
            to: "/user-guides/documents",
        },
        {
            title: t("docs.features.items.jobs.title"),
            description: t("docs.features.items.jobs.description"),
            icon: "i-mdi-briefcase-outline",
            to: "/user-guides/jobs",
        },
        {
            title: t("docs.features.items.calendar.title"),
            description: t("docs.features.items.calendar.description"),
            icon: "i-mdi-calendar-outline",
            to: "/user-guides/calendar",
        },
        {
            title: t("docs.features.items.livemap.title"),
            description: t("docs.features.items.livemap.description"),
            icon: "i-mdi-map-outline",
            to: "/user-guides/livemap",
        },
        {
            title: t("docs.features.items.centrum.title"),
            description: t("docs.features.items.centrum.description"),
            icon: "i-mdi-car-emergency",
            to: "/user-guides/centrum",
        },
        {
            title: t("docs.features.items.i18n.title"),
            description: t("docs.features.items.i18n.description"),
            icon: "i-mdi-language",
            to: "/user-guides/i18n",
        },
        {
            title: t("docs.features.items.nuxt3_ui.title"),
            description: t("docs.features.items.nuxt3_ui.description"),
            icon: "i-simple-icons-nuxtdotjs",
            to: "https://nuxt.com",
        },
        {
            title: t("docs.features.items.open_source.title"),
            description: t("docs.features.items.open_source.description"),
            icon: "i-simple-icons-git",
            to: "https://github.com/fivenet-app/fivenet",
        },
    ],
};

const cta = {
    title: t("docs.features.links.explore.label"),
};
</script>

<template>
    <div>
        <ULandingHero
            :title="$t('pages.index.welcome')"
            :description="$t('pages.index.subtext')"
            :links="links"
        >
            <div
                class="absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] hero"
            />

            <template #headline>
                <UButton
                    color="gray"
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
        </ULandingHero>

        <ULandingSection class="!pt-0">
            <ImagePlaceholder />
        </ULandingSection>

        <ULandingSection
            :title="features.title"
            :description="features.description ?? undefined"
            class="!pt-0"
        >
            <UPageGrid>
                <ULandingCard
                    v-for="(item, index) of features.items"
                    :key="index"
                    v-bind="item"
                />
            </UPageGrid>
        </ULandingSection>

        <ULandingSection :title="$t('pages.index.logos')" class="!pt-0">
            <ULandingLogos align="center">
                <ULink
                    v-for="icon in page.logos.icons"
                    :key="icon"
                    variant="link"
                >
                    <img
                        :src="`/images/communities/${icon.image}`"
                        :alt="icon.alt"
                        class="h-12 w-12 flex-shrink-0 text-gray-900 lg:h-20 lg:w-20 dark:text-white"
                    />
                </ULink>
            </ULandingLogos>
        </ULandingSection>

        <ULandingSection :title="$t('components.stats.title')" class="!pt-0">
            <UPageGrid>
                <ULandingCard
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
                                    fromSecondsToFormattedDuration(
                                        stat.number,
                                        {
                                            seconds: false,
                                            emptyText: "common.none",
                                        }
                                    )
                                }}
                            </template>
                            <template v-else-if="stat.type === 'unit'">
                                {{ stat.number }}
                                {{ $t(stat.unit ?? "common.time_ago.week", 2) }}
                            </template>
                            <ClientOnly v-else>
                                <CountUp
                                    :end-val="stat.number"
                                    :options="{ enableScrollSpy: true }"
                                />
                            </ClientOnly>

                            <span v-if="!stat.hidePlus"> + </span>
                        </p>
                    </template>
                </ULandingCard>
            </UPageGrid>
        </ULandingSection>

        <ULandingSection
            v-for="(section, index) in page.sections"
            :key="index"
            :title="section.title"
            :description="section.description"
            :align="section.align"
            :features="section.features"
        >
            <ImagePlaceholder />
        </ULandingSection>

        <ULandingSection>
            <ULandingCTA
                :title="cta.title"
                :links="features.links"
                class="bg-gray-100/50 dark:bg-gray-800/50"
            />
        </ULandingSection>
    </div>
</template>
