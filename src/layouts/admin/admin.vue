<template>
    <AdminHeader></AdminHeader>
    <router-view></router-view>
    <AdminFooter></AdminFooter>
</template>
<script setup lang="ts">
import AdminHeader from './header.vue'
import AdminFooter from './footer.vue'
</script>