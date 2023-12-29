<template>
  <AdminLayout v-if="userStore.userRole"></AdminLayout>
  <GuestLayout v-else></GuestLayout>
</template>

<script setup lang="ts">
import AdminLayout from "@layouts/admin/admin.vue";
import GuestLayout from "@layouts/guest/guest.vue";
import { useUserStore } from "@stores/user";

const userStore = useUserStore();
</script>
