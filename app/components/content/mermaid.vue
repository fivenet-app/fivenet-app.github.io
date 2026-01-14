<!-- eslint-disable vue/multi-word-component-names -->
<!-- Taken from https://gitlab.com/dokos/documentation/-/blob/main/components/content/Mermaid.vue -->
<template>
    <!-- Keep this to fetch `default` slot in metadata -->
    <slot v-if="false" />
    <pre ref="el" :style="{ display: rendered ? 'block' : 'none' }" class="not-prose">
      {{ mermaidSyntax }}
    </pre>
</template>

<script setup>
import { nodeTextContent } from '@nuxtjs/mdc/runtime/utils/node';

const el = ref(null);
const rendered = ref(false);
const rerenderCounter = ref(1);
const slots = useSlots();

const mermaidSyntax = computed(() => {
    // Trick to force re-render when the slot content changes (for preview inside studio)
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    rerenderCounter.value++;

    const defaultSlot = slots.default?.()[0];
    if (!defaultSlot) {
        return '';
    }

    // Old syntax with text node
    if (typeof defaultSlot.children === 'string') {
        return defaultSlot.children;
    }

    // New syntax with code node
    const codeChild = defaultSlot.children?.default()[0];
    if (codeChild.type !== 'code') {
        return '';
    }

    // New syntax without highlight
    if (typeof codeChild.children === 'string') {
        return codeChild.children;
    }

    // New syntax with highlight
    return nodeTextContent(codeChild.children);
});

// watch(mermaidSyntax, () => {
//   render()
// })

async function render() {
    if (!el.value) {
        return;
    }

    if (el.value.querySelector('svg')) {
        // Already rendered
        return;
    }

    // Iterate children to remove comments
    for (const child of el.value.childNodes) {
        if (child.nodeType === Node.COMMENT_NODE) {
            el.value.removeChild(child);
        }
    }

    const { default: mermaid } = await import('mermaid');
    const { default: elkLayouts } = await import('@mermaid-js/layout-elk');

    mermaid.registerLayoutLoaders(elkLayouts);

    el.value.classList.add('mermaid');
    rendered.value = true;
    mermaid.initialize({
        theme: 'neutral',
        startOnLoad: false,
        themeVariables: {
            darkMode: true,
        },
    });
    await mermaid.run({ nodes: [el.value] });
}

onBeforeUpdate(() => {
    rerenderCounter.value++;
});

onMounted(() => render());
</script>
