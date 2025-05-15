<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
withDefaults(
    defineProps<{
        label?: string;
        color?: string;
        size?: string;
        icon?: string;
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
