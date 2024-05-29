<script lang="ts" setup>
import mermaid from 'mermaid';

withDefaults(defineProps<{
    init?: string;
}>(), {
    init: '%%{init: {\'theme\': \'dark\' } }%%',
});

const diagramRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
    if (diagramRef.value) {
        diagramRef.value.innerHTML = diagramRef.value.innerHTML.replace(/<\!--.*?-->/g, "");
    }

    mermaid.initialize({
        startOnLoad: true

    });
    mermaid.init();
});
</script>

<template>
    <div ref="diagramRef" class="mermaid">
        {{ init }}
        <slot></slot>
    </div>
</template>
