<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ListActions from "./ListActions.vue";
import { ref } from "vue";

import { actionList } from "../../utils/Actions";

const isOpenListActions = ref<boolean>(false);
const isSidebarCollapsed = ref<boolean>(false);

const toggleListActions = () => {
  isOpenListActions.value = !isOpenListActions.value;
};

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};
</script>

<template>
  <div class="w-1/4 bg-slate-950 h-full">
    <!-- <div>
      <button
        @click="toggleSidebar"
        class="rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300 mt-3 ml-3 cursor-pointer p-1 flex items-center justify-center">
        <Icon icon="meteor-icons:chevrons-left" width="24" height="24" />
      </button>
    </div> -->
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl text-white mb-4 mt-3">yoiflow!</h1>
    </div>
    <div class="p-4">
      <h1 class="mb-3">Actions</h1>
      <div class="border-2 border-slate-700 rounded-lg p-4 mb-4">
        <button
          @click="toggleListActions"
          class="rounded-full cursor-pointer bg-primary hover:bg-slate-700 transition-colors duration-300 text-white px-4 py-2 flex items-center justify-center w-full">
          <Icon icon="meteor-icons:plus" width="24" height="24" />
        </button>

        <Transition name="scale" mode="out-in">
          <ListActions
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
            data-theme="aqua"
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
