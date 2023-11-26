<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiCar"
      title="Quản lý xe"
      main
      @toggleModal="onCreateVehicle"
    >
    </SectionTitleLineWithButton>
    <div
      class="sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
      <VehicleCard></VehicleCard>
    </div>
  </SectionMain>
</template>

<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import VehicleCard from "@/components/clients/VehicleCard";
</script>

<style lang="scss" scoped></style>
