<script setup>
import CollectionItem from '../components/ui/CollectionItem.vue';
import {ref, onMounted} from 'vue'
const stories = ref([])
async function fetchStories() {
  try {
    const response = await fetch('https://community-story-backend.onrender.com/story-collection');
    stories.value = await response.json();
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  fetchStories()
})

</script>

<template>
  <main>
    <li v-for="story in stories" class="story-list">
      <CollectionItem :title="story.title" :likes="story.likes" :text="story.story"/>
    </li>
 
  </main>
</template>
<style>
.story-list{
  list-style: none;
}</style>
