<script setup lang="ts">
withDefaults(
    defineProps<{
        phoneSrc: string;
        tabletSrc: string;
        phoneAlt?: string;
        tabletAlt?: string;
        phoneLabel?: string;
        tabletLabel?: string;
    }>(),
    {
        phoneAlt: 'Phone screenshot',
        tabletAlt: 'Tablet screenshot',
        phoneLabel: 'Phone',
        tabletLabel: 'Tablet',
    },
);
</script>

<template>
    <div class="grid items-end gap-4 py-4 md:grid-cols-[minmax(8rem,15rem)_minmax(0,1fr)] md:gap-6">
        <!-- Phone -->
        <figure class="mx-auto w-full max-w-52">
            <div
                class="relative aspect-[9/19] rounded-[2.25rem] border-[0.25rem] border-neutral-700 bg-gradient-to-br from-neutral-300 via-neutral-700 to-neutral-950 p-1 shadow-2xl ring-1 ring-white/30 dark:border-neutral-500"
            >
                <!-- Buttons -->
                <span
                    class="absolute -start-[0.5rem] top-[16%] z-10 h-7 w-0.5 rounded-s-full border border-neutral-950/30 bg-neutral-800 shadow-sm dark:border-white/20 dark:bg-neutral-400"
                    aria-hidden="true"
                />

                <span
                    class="absolute -start-[0.5rem] top-[23%] z-10 h-11 w-0.5 rounded-s-full border border-neutral-950/30 bg-neutral-800 shadow-sm dark:border-white/20 dark:bg-neutral-400"
                    aria-hidden="true"
                />

                <span
                    class="absolute -start-[0.5rem] top-[30%] z-10 h-11 w-0.5 rounded-s-full border border-neutral-950/30 bg-neutral-800 shadow-sm dark:border-white/20 dark:bg-neutral-400"
                    aria-hidden="true"
                />

                <span
                    class="absolute -end-[0.5rem] top-[25%] z-10 h-14 w-0.5 rounded-e-full border border-neutral-950/30 bg-neutral-800 shadow-sm dark:border-white/20 dark:bg-neutral-400"
                    aria-hidden="true"
                />

                <div
                    class="relative h-full w-full overflow-hidden rounded-[1.85rem] border-2 border-neutral-800 bg-black p-0.5 dark:border-neutral-300"
                >
                    <!-- Camera -->
                    <span
                        class="absolute inset-x-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black shadow-inner"
                        aria-hidden="true"
                    />

                    <ProseImg
                        class="block h-full w-full rounded-[1.6rem] object-cover"
                        :src="phoneSrc"
                        :alt="phoneAlt"
                        loading="lazy"
                    />
                </div>
            </div>
            <figcaption class="mt-3 text-center text-sm font-medium text-muted">{{ phoneLabel }}</figcaption>
        </figure>

        <!-- Tablet -->
        <figure class="mx-auto w-full max-w-2xl">
            <div class="relative">
                <div
                    class="relative aspect-[3/2] rounded-[1.35rem] border-[0.55rem] border-neutral-950 bg-neutral-950 p-1 shadow-xl dark:border-neutral-700 dark:bg-neutral-700"
                >
                    <ProseImg
                        class="block h-full w-full rounded-[0.85rem] object-contain"
                        :src="tabletSrc"
                        :alt="tabletAlt"
                        loading="lazy"
                    />
                </div>

                <span
                    class="absolute start-1/2 top-0 z-10 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-neutral-700 dark:bg-neutral-900"
                    aria-hidden="true"
                />
            </div>
            <figcaption class="mt-3 text-center text-sm font-medium text-muted">{{ tabletLabel }}</figcaption>
        </figure>
    </div>
</template>
