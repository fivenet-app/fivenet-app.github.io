<script lang="ts" setup>
import type { LocaleObject } from 'vue-i18n-routing';

const { locale, locales, setLocale } = useI18n();

const { isOpen } = useModal();

const languages = ref<LocaleObject[]>([]);

onMounted(async () => {
    locales.value.forEach((lang) => {
        if (typeof lang === 'string') {
            return;
        }

        languages.value.push({
            code: lang.code,
            name: lang.name!,
            language: lang.language!,
            icon: lang.icon ?? 'i-mdi-question',
        });
    });
});

const preventClose = ref(false);

async function switchLanguage(lang: LocaleObject): Promise<void> {
    if (locale.value === lang.language) {
        return;
    }

    console.info('Switching language to:', lang.name);
    preventClose.value = true;

    await setLocale(locale.value);

    reloadNuxtApp({
        persistState: false,
        force: true,
        path: useRoute().path + '?locale_switched=1',
    });
}
</script>

<template>
    <UModal :prevent-close="preventClose">
        <UCard
            :ui="{
                ring: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            }"
        >
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-semibold leading-6">
                        {{ $t('components.language_switcher.title') }}
                    </h3>

                    <UButton
                        :disabled="preventClose"
                        color="gray"
                        variant="ghost"
                        icon="i-mdi-window-close"
                        class="-my-1"
                        @click="isOpen = false"
                    />
                </div>
            </template>

            <UPageGrid>
                <UPageCard
                    v-for="item in languages"
                    :key="item.name"
                    :title="item.name"
                    :icon="item.icon"
                    @click="switchLanguage(item)"
                />
            </UPageGrid>

            <template #footer>
                <UButton block class="flex-1" color="black" :disabled="preventClose" @click="isOpen = false">
                    {{ $t('common.close', 1) }}
                </UButton>
            </template>
        </UCard>
    </UModal>
</template>
