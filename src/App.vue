<template>
  <v-app :theme="theme">
    <v-container>
      <RouterView></RouterView>
    </v-container>
  </v-app>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
const theme = ref("light");
</script>
