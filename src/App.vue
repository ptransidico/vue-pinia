<script setup> 
import Tasks from './components/tasks/Tasks.vue';
import TaskForm from './components/tasks/TaskForm.vue';
</script>

<template>
  <div class="flex flex-col bg-green-300 w-full mx-auto justify-center items-center rounded-md">
    <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" width="50">
    <p class="text-xl text-center mt-4 font-bold">
      Pinia - Store Manager (Local Storage)
    </p>
    <TaskForm></TaskForm>
  </div>
  <Tasks></Tasks>
</template>

<style scoped></style>
