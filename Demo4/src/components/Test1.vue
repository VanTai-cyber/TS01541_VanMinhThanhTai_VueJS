<script setup>
import { ref, computed } from 'vue'

const year = ref(null)
const age = computed(() => {
  if (!year.value) return 0
  return new Date().getFullYear() - year.value
})
</script>

<template>
  <h1>Nhap nam sinh: </h1>
  <input type="number" min="1990" max="2026" v-model="year">

  <h4>Tuoi: {{ age }}</h4>
  <h4 v-if="age <= 10">Tre em</h4>
  <h4 v-else-if="age <= 20">Thieu nien</h4>
  <h4 v-else-if="age <= 30">Thanh nien</h4>
  <h4 v-else-if="age <= 40">Trung nien</h4>
  <h4 v-else>Lon tuoi</h4>
</template>