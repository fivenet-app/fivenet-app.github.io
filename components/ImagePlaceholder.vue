<script lang="ts" setup>
withDefaults(
    defineProps<{
        src?: string;
    }>(),
    {
        src: "/images/screenshots/overview.png",
    }
);
</script>

<template>
    <div
        class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"
    >
        <div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden">
            <img
                class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
                :src="src"
            />
        </div>
    </div>
</template>
