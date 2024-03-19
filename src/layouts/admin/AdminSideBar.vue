<template>
    <v-navigation-drawer app v-model="sideBarDrawer">
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
</template>
<script setup lang="ts">
import { useSettingStore } from '@/stores/setting';

const { sideBarDrawer } = useSettingStore()
</script>