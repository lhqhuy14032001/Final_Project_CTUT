<template>
  <div class="vehicle-list">
    <Header></Header>
    <VehicleFilter></VehicleFilter>
    <div
      class="vehicle-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="vehicle-card" v-for="index in 10" :key="index">
        <VehicleCard></VehicleCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/clients/Header";
import VehicleFilter from "@/components/clients/VehicleFilter";
import VehicleCard from "@/components/clients/VehicleCard";
</script>

<style lang="scss" scoped></style>
