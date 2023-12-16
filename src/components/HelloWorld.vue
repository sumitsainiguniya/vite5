<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">Release {{ count }}</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(1)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
