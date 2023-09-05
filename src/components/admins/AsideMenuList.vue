<script setup>
import { defineProps, defineEmits } from "vue";
import AsideMenuItem from "@/components/admins/AsideMenuItem.vue";

defineProps({
  isDropdownList: Boolean,
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <ul>
    <!-- :is-dropdown-list="isDropdownList" -->
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      @menu-click="menuClick"
    />
  </ul>
</template>
