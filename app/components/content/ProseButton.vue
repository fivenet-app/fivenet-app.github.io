<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

withDefaults(
    defineProps<{
        label?: ButtonProps['label'];
        color?: ButtonProps['color'];
        size?: ButtonProps['size'];
        icon?: ButtonProps['icon'];
        external?: boolean | string;
        to?: string;
    }>(),
    {
        label: undefined,
        color: 'primary',
        size: 'lg',
        icon: undefined,
        external: false,
        to: undefined,
    },
);

const localePath = useLocalePath();
</script>

<template>
    <UButton v-bind="$props" :external="!!external" :to="!external ? localePath(to ?? '/') : to" />
</template>
