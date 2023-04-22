<script setup>
import BackButton from '../components/buttons/BackButton.vue';

const props = defineProps({
    craetorId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    likes: {
        type: String,
        required: true
    },
    story: {
        type: Array,
        required: true
    }
})
</script>
<template>
<div class="story-wrapper">
<div><BackButton path="/"/></div>
    </div>
</template>
<style>
.story-wrapper{
}</style>