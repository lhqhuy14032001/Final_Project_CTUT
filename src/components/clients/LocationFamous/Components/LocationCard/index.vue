<template>
  <div class="location-wrapper">
    <img class="city-image" :src="location.cityImg" alt="" />
    <div class="total-vehicles-info">
      <p class="city-name">{{ location.prov_name }}</p>
      <p class="total-vehicle">{{ location.totalVehicle }}+ xe</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  location: {
    type: Object,
    required: true,
    default() {
      return {};
    },
  },
});
const { location } = props;
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
