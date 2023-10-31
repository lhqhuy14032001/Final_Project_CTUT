<template>
  <div class="sidebar-list">
    <h2 class="text-left text-3xl font-semibold mb-5">Xin chào bạn!</h2>
    <SidebarItem
      v-for="item in props.sidebarList"
      :key="item.id"
      :item="item"
    ></SidebarItem>
  </div>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { defineProps } from "vue";
const props = defineProps({
  sidebarList: {
    typed: Array,
    required: true,
    default() {
      [];
    },
  },
});
</script>

<style lang="scss" scoped></style>
