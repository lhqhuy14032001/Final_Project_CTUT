<template>
  <div class="filter-wrapper">
    <div class="reset-filter">reset</div>
    <div class="filter-list">
      <FilterItem
        v-for="filter in props.filterList"
        :filter="filter"
        :key="filter.id"
      ></FilterItem>
    </div>
    <div class="advance-filter">Bộ lọc</div>
  </div>
</template>

<script setup>
import FilterItem from "../FilterItem";
import { defineProps } from "vue";
const props = defineProps({
  filterList: {
    required: true,
    typed: Array,
    default() {
      [];
    },
  },
});
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
