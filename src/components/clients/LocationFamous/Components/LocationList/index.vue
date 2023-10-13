<template>
  <div class="location-famous-wrapper my-5">
    <carousel v-bind="settings">
      <slide v-for="location in locationFamousList" :key="location.id">
        <LocationCard :location="location"></LocationCard>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import LocationCard from "../LocationCard";
import { locationFamous } from "@/ultils/screenUtils";
const props = defineProps({
  locationFamousList: {
    type: Array,
    required: true,
    default() {
      [];
    },
  },
});
const { locationFamousList } = props;

const settings = ref({ itemsToShow: locationFamous, autoplay: 3000 });
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 640px) {
  .carousel__slide {
    margin-right: 12px;
  }
}
</style>
