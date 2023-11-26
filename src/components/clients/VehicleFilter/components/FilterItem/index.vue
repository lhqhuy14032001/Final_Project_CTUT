<template>
  <div class="filter-item-wrapper flex items-center px-2 py-1">
    <div v-html="icon"></div>
    <p class="text-sm">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  filter: {
    required: true,
    typed: Object,
    default() {
      return {};
    },
  },
});
const { icon, label } = props.filter;
</script>
<style lang="scss" scoped>
@import url(./style.scss);
</style>
