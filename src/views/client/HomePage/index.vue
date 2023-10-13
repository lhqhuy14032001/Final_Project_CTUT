<template>
  <div class="responsive">
    <ModalSignUp v-model="isShowLoginModal" title="Đăng ký"></ModalSignUp>
    <Header
      @togglePcModalSignUp="isShowLoginModal = !isShowLoginModal"
    ></Header>
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
  </div>
</template>
<script setup>
import Banner from "@/components/clients/Banner";
import Header from "@/components/clients/Header";
import VehicleSearch from "@/components/clients/VehicleSearch";
import Vouchers from "@/components/clients/Vouchers";
import VehicleForYou from "@/components/clients/VehicleForYou";
import LocationFamous from "@/components/clients/LocationFamous";
import AdvangtageMiAUTO from "@/components/clients/AdvantageMiAUTO";
import ModalSignUp from "@/components/clients/ModalSignUp";
import { ref } from "vue";

const isShowLoginModal = ref(false);
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
