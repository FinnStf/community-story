<script setup>
import BackButton from '@/components/buttons/BackButton.vue'
import { computed } from 'vue'
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
const story = 'test'
</script>
<template>
  <div class="story-view-wrapper">
    <div><BackButton path="/" /></div>
    <div class="story-wrapper">
        <h1>{{title}}</h1></div>
  </div>
</template>
<style>
.story-view-wrapper {
  display: flex;
}
.story-wrapper {
  width: 100%;
  margin: 0rem 2rem;
  padding: 4rem 8rem;
  background-color: var(--color-background-story);
}
</style>
