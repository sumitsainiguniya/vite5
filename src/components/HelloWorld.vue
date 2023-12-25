<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="store.increment()">Release {{ count }}</button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter'
defineProps<{ msg: string }>()
const store = useCounterStore()
const count = computed(() => store.count)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
