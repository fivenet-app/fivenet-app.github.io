<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
//import LanguageSwitcherModal from "./LanguageSwitcherModal.vue";

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

//const modal = useModal();
const { header } = useAppConfig();
</script>

<template>
    <UHeader to="/">
        <UContentSearchButton label="Search..." variant="outline" class="w-full">
            <template #trailing>
                <div class="ms-auto flex items-center gap-0.5">
                    <UKbd value="meta" />
                    <UKbd value="k" />
                </div>
            </template>
        </UContentSearchButton>

        <template #left>
            <ULink class="inline-flex items-center gap-2" to="/">
                <img src="/images/logo-200x200.png" class="size-10" />

                <span class="text-xl font-semibold text-gray-900 dark:text-white">FiveNet</span>
            </ULink>
        </template>

        <template #right>
            <UContentSearchButton class="lg:hidden" />

            <!--
            <UButton
                :label="$t('common.language')"
                icon="i-mdi-translate"
                color="neutral"
                @click="modal.open(LanguageSwitcherModal, {})"
            />
            -->

            <UColorModeButton />

            <template v-if="header?.links">
                <UButton
                    v-for="(link, index) of header.links"
                    :key="index"
                    v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
                />
            </template>
        </template>

        <template #body>
            <UContentNavigation highlight :navigation="navigation" />
        </template>
    </UHeader>
</template>
