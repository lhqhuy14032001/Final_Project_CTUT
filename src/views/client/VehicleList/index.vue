<template>
  <div class="vehicle-list">
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <ModalSignIn v-model="isShowModalSignIn" has-cancel></ModalSignIn>
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
import ModalSignUp from "@/components/clients/ModalSignUp";
import ModalSignIn from "@/components/clients/ModalSignIn";
// store
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";

// access to store
const stateStore = useState();
const { isShowModalSignUp, isShowModalSignIn } = storeToRefs(stateStore);
</script>

<style lang="scss" scoped></style>
