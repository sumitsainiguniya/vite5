<template>
  <!-- <AdminLayout v-if="checkAuth"></AdminLayout>
  <GuestLayout v-else></GuestLayout> -->
  <!-- <SButton type="button" class="test" size="sm" color="danger" :loading="false"
    >Test</SButton
  > -->
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
// import SButton from "@components/SButton/SButton.vue";

// import AdminLayout from "@layouts/admin/AdminLayout.vue";
// import GuestLayout from "@layouts/guest/guest.vue";
// import { useAuthStore } from "./stores/Auth/auth";

// const { checkAuth } = useAuthStore();
</script>
