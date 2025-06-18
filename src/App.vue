<script setup lang="ts">
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import TodoInput from "./components/TodoInput.vue";
import ListOfTodos from "./components/ListOfTodos.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";

const todos = ref<string>([]);
const activity = ref<string>("");
const isUpdatingTodo = ref<boolean>(false);
const todoToUpdateIndex = ref<null | number>(null);
const updatedTodo = ref<string>("");
const toggleSidebar = ref<boolean>(true);

const handleDeleteTodo = (itemToRemove: string) => {
  todos.value = todos.value.filter((item) => item !== itemToRemove);
};

const handleStartUpdate = (payload: { index: number; value: string }) => {
  isUpdatingTodo.value = true;
  todoToUpdateIndex.value = payload.index;
  updatedTodo.value = payload.value;
};

const handleSubmitUpdateTodo = () => {
  if (todoToUpdateIndex.value !== null && updatedTodo.value.trim()) {
    todos.value[todoToUpdateIndex.value] = updatedTodo.value;
    isUpdatingTodo.value = false;
    todoToUpdateIndex.value = null;
    updatedTodo.value = "";
  }
};

const toggleSidebarVisibility = () => {
  toggleSidebar.value = !toggleSidebar.value;
};

const dynamicIcon = computed(() => {
  return toggleSidebar.value
    ? "meteor-icons:chevrons-left"
    : "meteor-icons:chevrons-right";
});
</script>

<template>
  <main class="h-screen flex relative">
    <div class="absolute top-0 left-0 z-10">
      <button
        @click="toggleSidebarVisibility"
        class="rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300 mt-3 ml-3 cursor-pointer p-1 flex items-center justify-center">
        <Icon :icon="dynamicIcon" width="24" height="24" />
      </button>
    </div>
    <Sidebar v-if="toggleSidebar" />
    <Main :is-open-list-actions="toggleSidebar" />
    <!-- <TodoInput
        v-model="activity"
        :todos="todos"
        @add-todo="(todo) => todos.push(todo)" />

      <div class="divider"></div>

      <ListOfTodos
        :todos="todos"
        :isUpdatingTodo="isUpdatingTodo"
        :todoToUpdateIndex="todoToUpdateIndex"
        :updatedTodo="updatedTodo"
        @delete-todo="handleDeleteTodo"
        @start-update="handleStartUpdate"
        @submit-update="handleSubmitUpdateTodo"
        @update:updatedTodo="(val) => (updatedTodo = val)" /> -->
  </main>
</template>
