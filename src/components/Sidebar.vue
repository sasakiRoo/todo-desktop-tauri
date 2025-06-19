<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ListActions from "./ListActions.vue";
import { ref, computed } from "vue";

import { actionList } from "../../utils/Actions";

const isOpenListActions = ref<boolean>(false);
const isSidebarCollapsed = ref<boolean>(false);

const toggleListActions = () => {
  isOpenListActions.value = !isOpenListActions.value;
};

const dynamicIcon = computed(() => {
  return isOpenListActions.value ? "meteor-icons:minus" : "meteor-icons:plus";
});
</script>

<template>
  <div class="w-1/4 bg-slate-950 h-full">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl text-white mb-4 mt-3">yoiflow!</h1>
    </div>
    <div class="p-4">
      <h1 class="mb-3">Actions</h1>
      <div class="border-1 rounded-lg p-4 mb-4">
        <button
          @click="toggleListActions"
          class="rounded-full cursor-pointer bg-slate-800 hover:bg-accent transition-colors duration-300 px-4 py-2 flex items-center justify-center w-full">
          <Icon :icon="dynamicIcon" width="24" height="24" />
        </button>

        <Transition name="scale" mode="out-in">
          <ListActions
            @actionSelected="$emit('actionSelected', $event)"
            :statusOpen="isOpenListActions"
            v-show="isOpenListActions" />
        </Transition>
      </div>
    </div>

    <div class="p-4">
      <h1 class="mb-3">Your Works</h1>
      <div class="flex gap-3">
        <div v-for="(item, index) in actionList" :key="index">
          <div
            :class="`${index !== 1 ? 'badge-primary' : 'badge-secondary'}`"
            class="badge font-bold">
            <h1>{{ item.label }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 300ms ease, transform 300ms ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.75);
  opacity: 0;
}
.scale-enter-to,
.scale-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
