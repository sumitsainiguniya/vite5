<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- Drawer content goes here -->
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Add more items as needed -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Guest Layout</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Add additional app bar items as needed -->
    </v-app-bar>

    <v-main>
      <!-- Content goes here -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);
</script>

<style>
/* Add your styles here */
</style>
