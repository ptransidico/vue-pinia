<template>
    <div class="mb-4">
        <h2>Task Form</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
            <input type="text" v-model="newTask.name" placeholder="Task" required class="p-2 border rounded bg-white" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
        </form>
    </div>
    <p v-if="message" class="text-green-600">{{ message }}</p>
</template>

<script setup>
import { useTaskStore } from "../../stores/TaskStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const taskStore = useTaskStore();
const newTask = ref({
    name: "",
});

const message = ref("");

const { allTasks, taskCount, favouriteCount, favouriteTasks, completedTasks } = storeToRefs(taskStore)


const handleSubmit = () => {
    if (newTask.value.name) {
        taskStore.addTask({
            id: taskStore.getlastTaskId() + 1, // increment last task id
            name: newTask.value.name,
            completed: false,
            favourite: false,
        });
        message.value = "Task added!"
        newTask.value.name = "";
        setTimeout(() => message.value = "", 2000) // reset messaggio dopo 2s
    }
};


</script>

<style lang="scss" scoped></style>