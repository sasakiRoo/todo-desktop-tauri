<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  todos: string[];
  isUpdatingTodo: boolean;
  todoToUpdateIndex: number | null;
  updatedTodo: string;
}>();

const emit = defineEmits<{
  (e: "delete-todo", value: string): void;
  (e: "start-update", payload: { index: number; value: string }): void;
  (e: "submit-update"): void;
  (e: "update:updatedTodo", value: string): void;
}>();

const onDelete = (item: string) => {
  emit("delete-todo", item);
};

const onStartUpdate = (item: string, index: number) => {
  emit("start-update", { index, value: item });
};

const onSubmitUpdate = () => {
  emit("submit-update");
};
</script>

<template>
  <div class="mt-5 h-[400px] overflow-auto">
    <h2 class="text-md font-bold text-center">list of todos</h2>
    <ul>
      <li
        class="card mt-5 w-96 bg-accent-content mx-auto card-xs shadow-sm"
        v-for="(item, index) in todos"
        :key="index">
        <div class="card-body">
          <h3
            class="card-title"
            v-if="!(isUpdatingTodo && todoToUpdateIndex === index)">
            {{ item }}
          </h3>
          <div v-else>
            <input
              type="text"
              :placeholder="item"
              :value="updatedTodo"
              @input="$emit('update:updatedTodo', $event.target.value)" />
            <button @click="onSubmitUpdate()">submit update</button>
          </div>
        </div>

        <div
          class="card-actions mt-5"
          v-if="!(isUpdatingTodo && todoToUpdateIndex === index)">
          <button class="btn btn-dash" @click="onDelete(item)">delete</button>
          <button class="btn btn-primary" @click="onStartUpdate(item, index)">
            update todo
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
