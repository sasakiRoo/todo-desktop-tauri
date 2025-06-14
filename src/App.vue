<script setup lang="ts">
import { ref } from "vue";

const todos = ref([]);
const activity = ref("");
const isUpdatingTodo = ref(false);
const todoToUpdateIndex = ref(null);
const updatedTodo = ref("");

const submitTodo = () => {
  todos.value.push(activity.value);
  activity.value = "";
};

const deleteTodo = (itemToRemove) => {
  todos.value = todos.value.filter((item) => item !== itemToRemove);
};

const updateTodo = (item, index) => {
  isUpdatingTodo.value = true;
  todoToUpdateIndex.value = index;
  updatedTodo.value = item;
};

const submitUpdateTodo = () => {
  if (todoToUpdateIndex.value !== null && updatedTodo.value.trim()) {
    todos.value[todoToUpdateIndex.value] = updatedTodo.value;
    isUpdatingTodo.value = false;
    todoToUpdateIndex.value = null;
    updatedTodo.value = "";
  }
};
</script>

<template>
  <main class="container">
    <h1>todo list!</h1>

    <div>
      <h2>what will you do today?</h2>

      <input v-model="activity" type="text" placeholder="todo here" />
      <button @click="submitTodo()">submit</button>

      <div>
        <h2>list of todos</h2>
        <ul>
          <li v-for="(item, index) in todos" :key="index">
            <h3 v-if="!(isUpdatingTodo && todoToUpdateIndex === index)">
              {{ item }}
            </h3>
            <div v-else>
              <input type="text" v-model="updatedTodo" :placeholder="item" />
              <button @click="submitUpdateTodo()">submit update</button>
            </div>
            <div v-if="!(isUpdatingTodo && todoToUpdateIndex === index)">
              <button @click="deleteTodo(item)">delete</button>
              <button @click="updateTodo(item, index)">update todo</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
