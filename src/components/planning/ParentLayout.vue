<template>
  <section class="bg-base-300 flex w-[1000px] translate-x-60 h-screen">
    <!-- rencana 1,2,3 | todo | doing | done -->
    <div
      class="card bg-base-200 w-[300px] h-[200px]"
      v-for="(item, index) in 3">
      <div class="card-title">{{ item }}</div>
    </div>
  </section>
</template>
