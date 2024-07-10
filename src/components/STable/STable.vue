<template>
  <table class="table" :id="props.id">
    <thead :class="{ [`table-${props.headerBGColor}`]: props.headerBGColor }">
      <tr :class="props.headerClass">
        <th
          v-for="column in props.columns"
          scope="col"
          :class="column.headerClass"
        >
          <span :id="column.key">{{ column.value }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        :class="{
          [`table-${props.rowBGColor}`]: props.rowBGColor,
          [`${props.rowClass}`]: props.rowClass,
        }"
        v-for="row in props.rows"
      >
        <td
          scope="row"
          v-for="column in props.columns"
          :class="column.cellClass"
        >
          {{ row[`${column.key}`] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { STableProps } from "./STable.interface";
const props = withDefaults(defineProps<STableProps>(), {
  columns: [],
  rows: [],
});
</script>
