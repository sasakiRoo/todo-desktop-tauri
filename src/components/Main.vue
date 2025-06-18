<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "./notes_taking/TodoInput.vue";

interface Props {
  isOpenListActions?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <main
    :class="`${isOpenListActions ? 'w-3/4!' : 'w-full!'}`"
    class="h-full bg-slate-900">
    <TodoInput />
  </main>
</template>
