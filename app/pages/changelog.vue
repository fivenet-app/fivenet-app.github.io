<script setup lang="ts">
import type { ChangelogRelease } from '~/../server/api/changelog.get';

definePageMeta({
    layout: 'docs',
});

const { t } = useI18n();

const { data: releases } = await useAsyncData<ChangelogRelease[]>('changelog', () => $fetch('/api/changelog'));

const latestReleaseUrl = computed(() => releases.value?.find((release) => !release.prerelease)?.url);

if (!releases.value?.length) {
    throw createError({ statusCode: 404, statusMessage: 'No changelog entries found', fatal: true });
}

useSeoMeta({
    title: () => t('pages.changelog.title'),
    description: () => t('pages.changelog.description'),
    ogTitle: () => `${t('pages.changelog.title')} - FiveNet`,
    ogDescription: () => t('pages.changelog.description'),
});
</script>

<template>
    <UPage v-if="releases?.length">
        <UPageHeader :title="$t('pages.changelog.title')" :description="$t('pages.changelog.description')" />

        <UPageBody>
            <UChangelogVersions>
                <UChangelogVersion
                    v-for="release in releases"
                    :id="release.title"
                    :key="release.url"
                    :title="release.title"
                    :date="release.date"
                    :badge="
                        release.prerelease
                            ? $t('pages.changelog.prerelease')
                            : release.url === latestReleaseUrl
                              ? {
                                    label: $t('pages.changelog.latest'),
                                    color: 'primary',
                                    variant: 'outline',
                                }
                              : undefined
                    "
                    :to="release.url"
                    target="_blank"
                    :ui="{ title: 'text-3xl' }"
                >
                    <template #body>
                        <MDC :value="release.body" />
                    </template>
                </UChangelogVersion>
            </UChangelogVersions>

            <div class="mt-12 flex justify-center">
                <UButton
                    to="https://github.com/fivenet-app/fivenet/releases"
                    target="_blank"
                    color="neutral"
                    variant="outline"
                    trailing-icon="i-mdi-arrow-top-right"
                    :label="$t('pages.changelog.view_all')"
                />
            </div>
        </UPageBody>
    </UPage>
</template>
