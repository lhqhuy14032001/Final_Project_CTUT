<template>
  <div class="filter-item-wrapper flex">
    <div v-html="icon"></div>
    <p>
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
