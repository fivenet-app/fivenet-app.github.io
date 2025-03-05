<script lang="ts" setup>
const year = new Date().getFullYear();

const { t } = useI18n();

const smallLinks = [
    {
        label: t('common.privacy_policy'),
        to: '/privacy',
    },
    {
        label: t('common.imprint'),
        to: '/imprint',
    },
];

const appConfig = useAppConfig();
const socials = appConfig.socials;
</script>

<template>
    <UFooter>
        <template #left>
            <I18nT keypath="copyright">
                <template #year>
                    {{ year }}
                </template>
            </I18nT>
        </template>

        <UNavigationMenu :items="smallLinks" variant="link" />

        <template #right>
            <UButton v-for="social in socials" :key="social.title" square color="neutral" variant="ghost" v-bind="social" />
        </template>
    </UFooter>
</template>
