<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <span>Release {{ count }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref('1.0.0')
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
