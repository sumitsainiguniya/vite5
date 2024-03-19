<template>
    <v-app>
        <AdminSideBar></AdminSideBar>
        <AdminHeader></AdminHeader>
        <v-main>
            <router-view></router-view>
        </v-main>
        <AdminFooter></AdminFooter>
    </v-app>
</template>
<script setup lang="ts">
import AdminHeader from './AdminHeader.vue'
import AdminFooter from './AdminHeader.vue'
import AdminSideBar from './AdminSideBar.vue';
</script>