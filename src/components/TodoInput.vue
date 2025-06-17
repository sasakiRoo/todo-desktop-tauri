<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue: string;
  todos: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "add-todo", value: string): void;
}>();

const updateActivity = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const submitTodo = () => {
  if (props.modelValue.trim()) {
    emit("add-todo", props.modelValue);
    emit("update:modelValue", "");
  }
};
</script>

<template>
  <div data-theme="sunset" class="card mx-auto bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="uppercase card-title mb-5">what will you do today?</h2>

      <div class="title-todo mb-3">
        <input
          class="input"
          :value="modelValue"
          type="text"
          @input="updateActivity"
          placeholder="Judul"
          required />
      </div>

      <div class="short-desc-todo">
        <input class="input" required type="text" placeholder="Tentang apa?" />
      </div>

      <div class="card-actions mt-5">
        <button class="btn btn-primary" @click="submitTodo()">submit</button>
      </div>
    </div>
  </div>
</template>
