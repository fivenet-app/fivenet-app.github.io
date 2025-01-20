<script lang="ts" setup>
withDefaults(
    defineProps<{
        src?: string;
    }>(),
    {
        src: '/images/screenshots/overview.png',
    },
);
</script>

<template>
    <div class="rounded-xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:-m-4 dark:bg-white/5 dark:ring-white/10">
        <div class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
            <img class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" :src="src" />
        </div>
    </div>
</template>
