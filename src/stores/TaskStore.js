import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            { id: 1, name: "Task 1", completed: false, favourite: true },
            { id: 2, name: "Task 2", completed: false, favourite: false },
            { id: 3, name: "Task 3", completed: false, favourite: false },
        
        ]
    }),

    getters: {
        completedTasks: (state) => state.tasks.filter(task => task.completed),
        favouriteTasks: (state) => state.tasks.filter(task => task.favourite),
        allTasks: (state) => state.tasks,
        taskCount: (state) => state.tasks.length,
        favouriteCount: (state) => state.tasks.filter(task => task.favourite).length,
        completedCount: (state) => state.tasks.filter(task => task.completed).length,
    },

    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        toggleTaskCompletion(taskId) {
            const task = this.tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
            }
        },
        toggleTaskFavourite(taskId) {
            const task = this.tasks.find(task => task.id === taskId);
            if (task) {
                task.favourite = !task.favourite;
            }
        },
    }
});
