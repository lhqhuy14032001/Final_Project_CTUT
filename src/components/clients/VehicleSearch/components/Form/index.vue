<template>
  <form class="rounded-2xl w-[90%] mx-auto shadow-lg bg-white min-h-[300px]">
    <header-form></header-form>
    <location-form></location-form>
    <start-date></start-date>
    <end-date></end-date>
  </form>
</template>

<script setup>
import HeaderForm from "./components/Header";
import LocationForm from "./components/Location";
import StartDate from "./components/StartDate";
import EndDate from "./components/EndDate";
</script>

<style lang="scss" scoped></style>
