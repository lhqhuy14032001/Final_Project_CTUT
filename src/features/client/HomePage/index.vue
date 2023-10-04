<template>
  <div class="responsive">
    <section>
      <Header></Header>
    </section>
    <section class="section-banner relative">
      <Banner></Banner>
      <div class="absolute w-full bottom-[-40%]">
        <VehicleSearch></VehicleSearch>
      </div>
    </section>
    <section class="section-voucher mt-52">
      <Vouchers></Vouchers>
    </section>
    <section class="section-vehicle-for-you my-10">
      <VehicleForYou></VehicleForYou>
    </section>
  </div>
</template>
<script setup>
import Banner from "@/components/clients/banner";
import Header from "@/components/clients/Header.vue";
import VehicleSearch from "@/components/clients/VehicleSearch";
import Vouchers from "@/components/clients/Vouchers";
import VehicleForYou from "@/components/clients/VehicleForYou";
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
