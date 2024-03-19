<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="changeSideBarDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Guest Layout</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Add additional app bar items as needed -->
  </v-app-bar>
</template>
<script setup lang="ts">
import { useSettingStore } from '@/stores/setting';

const { changeSideBarDrawer } = useSettingStore()
</script>
