<template>
  <router-link
    class="sidebar-item flex p-4 gap-2 border-t hover:border-l-4 hover:border-l-primary hover:bg-gray-50"
    :to="props.item.to ? props.item.to : null"
  >
    <div class="icon-wrapper">
      <div v-html="props.item.icon"></div>
    </div>
    <div class="sidebar-label">
      {{ props.item.label }}
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    typed: Object,
    required: true,
    default() {
      null;
    },
  },
});
</script>
<style lang="scss" scoped></style>
