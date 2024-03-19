<template>
  <AdminLayout v-if="checkAuth"></AdminLayout>
  <GuestLayout v-else></GuestLayout>
</template>

<script setup lang="ts">
import AdminLayout from "@layouts/admin/AdminLayout.vue";
import GuestLayout from "@layouts/guest/guest.vue";
import { useAuthStore } from "./stores/Auth/auth";

const { checkAuth } = useAuthStore();
</script>
