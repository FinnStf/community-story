<script setup>
import { ref, onMounted } from 'vue'
import CollectionItem from '@/components/ui/CollectionItem.vue'
import { demo_data } from '@/assets/data/collectionDemo.js'
import { useStoryStore } from '@/stores/stories'
const storyStore = useStoryStore()
/* async function fetchStories() {
  try {
    const response = await fetch('https://community-story-backend.onrender.com/story-collection');
    stories.value = await response.json();
  } catch (error) {
    console.log(error);
  }
}
 */
onMounted(async () => {
  //fetchStories()
  await storyStore.fetchData()
  const stories = storyStore.getData
  const loading = storyStore.getLoadingState
  const error = storyStore.getErrorState
})
</script>

<template>
  <main>
    <li v-if="storyStore.loading" v-for="story in stories" class="story-list">
      <CollectionItem :title="story.title" :likes="story.likes" :text="story.story" />
    </li>
    <div v-else-if="storyStore.error">Error...</div>
    <div v-else>Loading...</div>
  </main>
</template>
<style>
.story-list {
  list-style: none;
}
</style>
