<template>
  <form class="rounded-2xl w-[90%] mx-auto shadow-lg bg-white min-h-[300px]">
    <div class="search-option">
      <header-form></header-form>
    </div>
    <div class="section-body p-4">
      <location-form></location-form>
      <HireDate></HireDate>
    </div>
  </form>
</template>

<script setup>
import HeaderForm from "./components/Header";
import HireDate from "./components/HireDate";
import LocationForm from "./components/Location";
</script>

<style lang="scss" scoped></style>
