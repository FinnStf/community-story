<script setup>
import {ref} from 'vue'
const like_counter = ref(0)
const icon_animation = ref(false)
const increment = ()=>{
  like_counter.value++
  icon_animation.value = true
  setTimeout(()=>{
    icon_animation.value = false
  },500)
}

</script>
<template>
    <div @click="increment" class="button-box">
      <font-awesome-icon class="like-icon fa-2xl clickable" icon="thumbs-up" :bounce="icon_animation"/>
      {{ like_counter }}
    </div>
</template>
<style>
.button-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.like-icon{
  --fa-animation-duration: 1s;
}</style>