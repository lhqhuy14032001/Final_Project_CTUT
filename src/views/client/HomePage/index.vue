<template>
  <div class="responsive">
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <ModalSignIn v-model="isShowModalSignIn" has-cancel></ModalSignIn>
    <Header></Header>
    <section class="section-banner relative">
      <Banner></Banner>
      <div class="absolute w-full top-[70%] xl:bottom-0">
        <VehicleSearch></VehicleSearch>
      </div>
    </section>
    <section class="section-voucher">
      <Vouchers></Vouchers>
    </section>
    <section class="section-vehicle-for-you">
      <VehicleForYou></VehicleForYou>
    </section>
    <section class="section-location-famous">
      <LocationFamous></LocationFamous>
    </section>
    <section class="section-advantage">
      <AdvangtageMiAUTO></AdvangtageMiAUTO>
    </section>

    <Footer></Footer>
  </div>
</template>
<script setup>
import Banner from "@/components/clients/Banner";
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
import VehicleSearch from "@/components/clients/VehicleSearch";
import Vouchers from "@/components/clients/Vouchers";
import VehicleForYou from "@/components/clients/VehicleForYou";
import LocationFamous from "@/components/clients/LocationFamous";
import AdvangtageMiAUTO from "@/components/clients/AdvantageMiAUTO";
import ModalSignUp from "@/components/clients/ModalSignUp";
import ModalSignIn from "@/components/clients/ModalSignIn";

// store
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";

// access to store
const stateStore = useState();
const { isShowModalSignUp, isShowModalSignIn } = storeToRefs(stateStore);
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
