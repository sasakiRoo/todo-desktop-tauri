<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "./components/TodoInput.vue";
import ListOfTodos from "./components/ListOfTodos.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";

const todos = ref<string>([]);
const activity = ref<string>("");
const isUpdatingTodo = ref<boolean>(false);
const todoToUpdateIndex = ref<null | number>(null);
const updatedTodo = ref<string>("");

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
</script>

<template>
  <main class="h-screen flex relative">
    <Sidebar />
    <Main />
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
