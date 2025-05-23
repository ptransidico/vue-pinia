<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex flex-row gap-2 justify-end my-2">
            <UiButton class="btn btn-success" title="All Tasks" @click="filter = 'all'"></UiButton>
            <UiButton class="btn btn-default" title="Favourite Tasks" @click="filter = 'favourite'"></UiButton>
        </div>

        <div v-if="totalCount === 0" class="text-center text-gray-500">
            No tasks available
        </div>
        <div v-else>
            <template v-if="filter === 'all'">
                <h1 class="text-1xl font-bold">Tasks: {{ taskCount }}</h1>
                <Task v-for="(t, idx) in allTasks" :key="idx" :task="t"></Task>
            </template>
            <template v-else>
                <h1 class="text-1xl font-bold">favourite: {{ favouriteCount }}</h1>
                <Task v-for="(t, idx) in favouriteTasks" :key="idx" :task="t"></Task>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../stores/TaskStore";
import UiButton from "../UiButton.vue";
import Task from "./Task.vue";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { allTasks, taskCount, favouriteCount, favouriteTasks,completedTasks } = storeToRefs(taskStore)

const filter = ref("all");

</script>

<style scoped></style>
