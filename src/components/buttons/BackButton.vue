<script setup>
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
    <font-awesome-icon class="back-icon clickable" icon="circle-arrow-left" />
  </div>
</template>
<style>
.back-icon {
  transition: all 0,2s ease-in-out;
  transform-origin: center;
  height: 3rem;
}
.back-icon:hover{
  transform: scale(1.1);
}
</style>
