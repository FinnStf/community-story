<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})
const router = useRouter()
const navigate = () => {
  router.push({ name: 'home' })
}
</script>
<template>
  <div @click="navigate" :to="path" class="back-button">
    <font-awesome-icon class="back-icon" icon="circle-arrow-left" />
  </div>
</template>
<style>
.back-icon {
  transition: transform 0.2s ease-in-out;
  transform-origin: center;
  height: 3rem;
}
.back-icon:hover{
  transform: scale(1.2);
}
</style>
