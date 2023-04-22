<script setup>
import LikeButton from '../buttons/LikeButton.vue'
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  text: {
    type: Array,
    required: true
  }
})
function reduceTo50Words(str) {
  const words = str.split(' ')
  if (words.length <= 50) {
    return str
  } else {
    const reducedWords = words.slice(0, 50)
    const reducedStr = reducedWords.join(' ')
    return reducedStr
  }
}

const storyPreview = computed(() => {
  if (props.text) {
    let story = props.text[0].storyStart
    story += props.text
      .map((item, index) => {
        if (index > 0) {
          return item.text
        }
      })
      .join(' ')
    return reduceTo50Words(story)
  } else {
    return ''
  }
})
</script>

<template>
  <div class="story-box">
    <div class="story">
      <h1 class="story-title">{{ title }}</h1>
      <span>{{ storyPreview }}</span>
      <div class="read-more-btn">
        <RouterLink to="/story">Story-Ideas</RouterLink>
      </div>
    </div>
    <div class="btn-wrapper">
      <LikeButton />
    </div>
  </div>
</template>
<style>
.story-box {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  font-family: 'Bodoni';
}
.story {
  margin: 0rem 5rem 0rem 0rem;
}
.story-title {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.read-more-btn {
  margin-top: 0.5rem;
}
</style>
