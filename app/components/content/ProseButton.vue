<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
withDefaults(
    defineProps<{
        label?: string;
        color?: string;
        size?: string;
        icon?: string;
    }>(),
    {
        label: undefined,
        color: 'primary',
        size: 'lg',
        icon: undefined,
    },
);
</script>

<template>
    <UButton v-bind="$props" />
</template>
