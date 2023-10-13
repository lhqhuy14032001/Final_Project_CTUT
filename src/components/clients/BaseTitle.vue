<template>
  <div class="title-wrapper text-[32px] text-black" :class="classProp">
    <h1 class="font-bold">{{ title }}</h1>
    <p v-if="subTitle != ''">{{ subTitle }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
    default() {
      "Tiêu đề";
    },
  },
  subTitle: {
    type: String,
    default() {
      "";
    },
  },
  classState: {
    type: Boolean,
  },
  classProp: {
    type: String,
    default() {
      "";
    },
  },
});
const { title, subTitle } = props;
</script>

<style lang="scss" scoped>
.title-wrapper {
  @apply mb-8;
  h1 {
    @apply xl:text-5xl;
  }
  p {
    @apply xl:text-2xl mt-3;
  }
}
</style>
