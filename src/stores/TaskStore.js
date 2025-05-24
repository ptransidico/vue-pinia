import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
    }),

    getters: {
        completedTasks: (state) => state.tasks.filter((task) => task.completed),
        favouriteTasks: (state) => state.tasks.filter((task) => task.favourite),
        allTasks: (state) => state.tasks,
        taskCount: (state) => state.tasks.length,
        favouriteCount: (state) =>
            state.tasks.filter((task) => task.favourite).length,
        completedCount: (state) =>
            state.tasks.filter((task) => task.completed).length,
    },

    actions: {
        init() {
            const saved = localStorage.getItem("tasks");
            this.tasks = saved ? JSON.parse(saved) : [
                    { id: 1, name: "Task 1", completed: false, favourite: true },
                    { id: 2, name: "Task 2", completed: false, favourite: false },
                    { id: 3, name: "Task 3", completed: false, favourite: false },
                ];
        },

        save() {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },

        addTask(task) {
            this.tasks.push(task);
            this.save();
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
            this.save();
        },
        toggleTaskCompletion(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
                this.save();
            }
        },
        getlastTaskId() {
            if (this.tasks.length === 0) {
                return 0;
            }
            return Math.max(...this.tasks.map((task) => task.id));
        },
        toggleTaskFavourite(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.favourite = !task.favourite;
                this.save();
            }
        },
    },
});
