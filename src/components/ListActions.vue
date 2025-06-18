<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

interface Actions {
  label: string;
  icon?: string;
  action?: () => void;
}

interface Props {
  statusOpen?: boolean;
}

const props = defineProps<Props>();

const actions = ref<Actions>([
  {
    label: "Add Notes Taking",
    icon: "meteor-icons:book-open",
    action: () => {
      console.log("Add Todo clicked");
    },
  },
  {
    label: "Add Planning",
    icon: "meteor-icons:table-list",
    action: () => {
      console.log("Delete Todo clicked");
    },
  },
]);
</script>

<template>
  <div class="border-2 border-slate-700 rounded-sm p-2 mt-3">
    <h1>choose actions</h1>
    <ul>
      <li class="my-4 rounded-md" v-for="(item, index) in actions" :key="index">
        <button
          class="bg-slate-700 cursor-pointer px-4 py-3 w-full text-sm flex items-center hover:bg-primary transition-colors duration-300 rounded-full">
          <Icon :icon="item.icon" width="24" height="24" />
          <span class="ml-3">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>
