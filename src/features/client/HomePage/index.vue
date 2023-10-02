<template>
  <div class="wrapper responsive">
    <section>
      <Header></Header>
    </section>
    <section class="relative">
      <Banner></Banner>
      <div class="absolute w-full bottom-[-50%]">
        <VehicleSearch></VehicleSearch>
      </div>
    </section>
  </div>
</template>
<script setup>
import Banner from "@/components/clients/banner";
import Header from "@/components/clients/Header.vue";
import VehicleSearch from "@/components/clients/VehicleSearch";
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
