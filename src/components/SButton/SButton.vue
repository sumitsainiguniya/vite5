<template>
  <button
    :type="type"
    :class="{
      btn: true,
      [`btn-${props.color}`]: props.color,
      [`btn-${props.size}`]: props.size,
    }"
    :disabled="disabled"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      aria-hidden="true"
    ></span>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { SButtonProps } from "./SButton.interface";
import { ref } from "vue";
const props = withDefaults(defineProps<SButtonProps>(), {
  type: "button",
  size: "sm",
  color: "primary",
  rounded: "none",
  disabled: false,
  loading: false,
});

const disabled = ref(props.loading ? true : false);
</script>
