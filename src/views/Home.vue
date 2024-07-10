<template>
  <STable
    :header-b-g-color="'primary'"
    row-b-g-color="primary"
    :columns="[
      {
        key: 'test',
        value: 'Test',
        headerClass: 'bg-dark text-white text-center',
      },
      {
        key: 'test1',
        value: 'Test1',
      },
      {
        key: 'test2',
        value: 'Test2',
        cellClass: 'text-primary text-center',
      },
    ]"
    :rows="[
      {
        test: 'Hello',
        test1: 'Bye',
        test2: 'Test2',
      },
      {
        test: 'Hello',
        test1: 'Bye',
        // test2: 'Test2',
      },
      {
        test: 'Hello',
        test1: 'Bye',
        test2: 'Test2',
      },
      {
        test: 'Hello',
        test1: 'Bye',
        // test2: 'Test2',
      },
    ]"
  ></STable>
</template>
<script setup lang="ts">
import STable from "@components/STable/STable.vue";
</script>
