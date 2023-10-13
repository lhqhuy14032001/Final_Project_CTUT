<template>
  <div class="advantage-card">
    <img :src="advantageCard.img" alt="advantage-miauto" />
    <h5 class="">
      {{ advantageCard.title }}
    </h5>
    <p>{{ advantageCard.content }}</p>
  </div>
  <slot></slot>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  advantageCard: {
    type: Object,
    required: true,
    default() {
      return {};
    },
  },
});
const { advantageCard } = props;
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
