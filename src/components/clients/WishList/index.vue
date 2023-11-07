<template>
  <h1 class="text-3xl text-left font-extrabold mb-5">Xe yêu thích của tôi</h1>
  <div class="wish-list">
    <CardVehicleLike :wish-list-item="1"></CardVehicleLike>
  </div>
</template>

<script setup>
import CardVehicleLike from "./CardVehicleLike.vue";
</script>

<style lang="scss" scoped></style>
