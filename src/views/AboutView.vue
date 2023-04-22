<template>
  <div>
    <input v-model="baseValue">
    <input v-model="multiplier">
    <p>Result: {{ computedValue }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const baseValue = ref(0)
const multiplier = ref(1)

const computedValue = computed(() => {
  return baseValue.value * multiplier.value
})
watch(baseValue, (newValue) => {
  computedValue.value = newValue.value * multiplier.value
})
watch(multiplier, (newValue) => {
  computedValue.value = baseValue.value * newValue.value
})
</script>