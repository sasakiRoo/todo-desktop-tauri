<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

import { Icon } from "@iconify/vue";

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
  <div class="card mx-auto border-1 w-3/5 shadow-sm">
    <div class="card-body">
      <h2 class="uppercase card-title mb-5">Your simple notes</h2>

      <div class="title-todo mb-3">
        <input
          class="input input-bordered input-primary w-4/5"
          :value="modelValue"
          type="text"
          @input="updateActivity"
          placeholder="title"
          required />
      </div>

      <div class="short-desc-todo mb-3">
        <input
          type="text"
          class="input input-primary w-4/5"
          placeholder="description"
          required />
      </div>

      <div>
        <textarea
          class="textarea textarea-primary w-4/5"
          name="long description"
          id="long-desc"
          placeholder="long description"></textarea>
      </div>

      <div class="card-actions mt-5">
        <button class="btn btn-primary" @click="submitTodo()">
          <Icon icon="meteor-icons:file-plus" width="18" height="18" />
          Save
        </button>
        <button class="btn btn-outline btn-primary">
          <Icon icon="meteor-icons:newspaper" width="18" height="18" />
          Export
        </button>
      </div>
    </div>
  </div>
</template>
