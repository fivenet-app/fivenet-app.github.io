<script lang="ts" setup>
import { emojiBlast } from 'emoji-blast';
import { useCookiesStore } from '~/stores/cookies';

const cookiesStore = useCookiesStore();
const { cookiesState } = storeToRefs(cookiesStore);

const open = ref(cookiesState.value === null);
</script>

<template>
    <div>
        <UCard
            v-if="open"
            class="fixed inset-x-0 bottom-8 z-20 mx-auto w-full max-w-lg bg-white/75 backdrop-blur dark:bg-white/5"
        >
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-semibold leading-6">
                        We use cookies!

                        <span
                            class="select-none"
                            @click="
                                emojiBlast({
                                    emojis: ['🍪'],
                                })
                            "
                            >🍪</span
                        >
                    </h3>

                    <UButton color="neutral" variant="ghost" icon="i-mdi-window-close" class="-my-1" @click="open = false" />
                </div>
            </template>

            <div class="flex w-full flex-col gap-2">
                <p>The main purpose of our cookies is to have a basic user tracking for analytical purposes.</p>

                <UButtonGroup class="inline-flex w-full flex-1">
                    <UButton variant="link" block class="flex-1" to="/legal/privacy" :external="true"> Privacy Policy </UButton>

                    <UButton variant="link" block class="flex-1" to="/legal/imprint" :external="true"> Imprint </UButton>
                </UButtonGroup>

                <p class="text-xs">
                    The best way to remove this websites data is to use the clear website data function of your browser.
                </p>
            </div>

            <template #footer>
                <UButtonGroup class="inline-flex w-full">
                    <UButton color="neutral" block class="flex-1" @click="open = false"> Close </UButton>

                    <UButton
                        block
                        color="error"
                        class="flex-1"
                        :variant="cookiesState === false ? 'soft' : 'solid'"
                        @click="
                            cookiesState = false;
                            open = false;
                        "
                    >
                        Reject
                    </UButton>

                    <UButton
                        block
                        color="success"
                        class="flex-1"
                        :variant="cookiesState === true ? 'soft' : 'solid'"
                        @click="
                            cookiesState = true;
                            open = false;
                        "
                    >
                        Accept
                    </UButton>
                </UButtonGroup>
            </template>
        </UCard>

        <UButton icon="i-mdi-cookie-cog" size="xl" class="fixed bottom-32 right-6" @click="open = true" />
    </div>
</template>
