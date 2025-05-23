<template>
    <button :class="classe">{{ title }}</button>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    classe: {
        type: String,
        default: "",
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
});


</script>



<style>

</style>
