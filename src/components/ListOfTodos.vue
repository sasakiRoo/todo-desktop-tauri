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
          <div class="card shadow-sm" v-else>
            <input
              type="text"
              class="input"
              :placeholder="item"
              :value="updatedTodo"
              @input="$emit('update:updatedTodo', $event.target.value)" />
            <div class="card-actions mt-5">
              <button class="btn btn-primary" @click="onSubmitUpdate()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5.5 14q-.213 0-.356-.144T5 13.499t.144-.356T5.5 13h6q.213 0 .356.144t.144.357t-.144.356T11.5 14zm0-4q-.213 0-.356-.144T5 9.499t.144-.356T5.5 9h10q.213 0 .356.144t.144.357t-.144.356T15.5 10zm0-4q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5h10q.213 0 .356.144t.144.357t-.144.356T15.5 6zm7.73 12.192V17.12q0-.153.057-.296q.055-.144.186-.275l5.09-5.065q.149-.13.306-.19t.315-.062q.172 0 .338.064q.166.065.301.194l.925.944q.123.148.188.308q.064.159.064.319t-.052.322t-.2.31l-5.065 5.066q-.131.13-.275.186q-.143.056-.297.056h-1.073q-.343 0-.575-.232t-.232-.576m5.96-4.177l.925-.956l-.925-.944l-.95.95zm-5.075 4.1h.95l3.467-3.473l-.47-.475l-.455-.488l-3.492 3.486zm0 0v-.95l3.492-3.486l.925.963l-3.467 3.473z" />
                </svg>
                submit update
              </button>
            </div>
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
