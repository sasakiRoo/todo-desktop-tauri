<script setup lang="ts">
interface Props {
  isOpenListActions?: boolean;
  currentComponent: string | null;
}

const props = defineProps<Props>();
</script>

<template>
  <main
    :class="`${props.isOpenListActions ? 'w-3/4!' : 'w-full!'}`"
    class="h-full flex flex-col justify-center bg-slate-900">
    <component :is="props.currentComponent" />
  </main>
</template>
