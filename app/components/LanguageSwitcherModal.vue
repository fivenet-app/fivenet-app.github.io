<script lang="ts" setup>
import type { LocaleObject } from 'vue-i18n-routing';

const emit = defineEmits<{ close: [boolean] }>();

const { setLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
</script>

<template>
    <UModal :title="$t('components.language_switcher.title')" :close="{ onClick: () => emit('close', false) }">
        <template #body>
            <UPageGrid>
                <UPageCard
                    v-for="item in languages"
                    :key="item.name"
                    :title="item.name"
                    :icon="item.icon"
                    @click="
                        async () => {
                            setLocale(item.code);
                            emit('close', false);
                            await navigateTo(switchLocalePath(item.code));
                        }
                    "
                />
            </UPageGrid>
        </template>

        <template #footer>
            <UButton block class="flex-1" color="neutral" @click="emit('close', false)">
                {{ $t('common.close', 1) }}
            </UButton>
        </template>
    </UModal>
</template>
