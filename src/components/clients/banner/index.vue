<template>
  <div class="banner banner-responsive relative rounded-2xl mx-auto">
    <div class="content absolute text-white">
      <BanerContent :totalVehicle="totalVehicle"></BanerContent>
    </div>
  </div>
</template>

<script setup>
import BanerContent from "./content";

import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { computed } from "vue";

const vehicleInfo = useVehicleInfoStore();
const totalVehicle = computed(() => {
  return vehicleInfo.totalVehicle;
});
</script>

<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
