<script setup lang="ts">
import { ref, reactive } from "vue";

interface SidebarList {
  name: string;
  linkTo: string;
  icon: string;
}

const sidebarList = ref<SidebarList>([
  {
    name: "Catatan",
    linkTo: "/notes",
    icon: "",
  },
  {
    name: "Rencana",
    linkTo: "/planning",
    icon: "",
  },
]);
</script>

<template>
  <section class="bg-base-200 fixed top-0 w-1/6 h-screen">
    <h1 class="text-2xl mb-5 font-extrabold uppercase">yoi list!</h1>

    <div>
      <ul>
        <li
          class="mt-2 bg-base-300 cursor-pointer px-2 py-4"
          v-for="(item, index) in sidebarList">
          <span>{{ item.name }}</span>
          <a :href="item.linkTo"></a>
          <Icon :icon="item.icon" />
        </li>
      </ul>
    </div>
  </section>
</template>
