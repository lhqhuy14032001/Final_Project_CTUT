<template>
  <div class="vehicle-img-wrapper">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-8">
        <div>
          <img
            class="w-full h-[600px] rounded-xl object-cover"
            :src="props.mainImg"
            alt=""
            @click="getIndex(0)"
          />
        </div>
      </div>
      <div class="car-img-small col-span-4">
        <div class="sub-imgs flex flex-col gap-3 cursor-pointer">
          <div
            v-for="(img, index) in props.subImages"
            class="car-img-item"
            @click="getIndex(index + 1)"
            :key="index"
          >
            <img :src="img" :alt="img" />
          </div>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="media"
      @hide="onHide"
      :index="indexRef"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
// components
import VueEasyLightbox from "vue-easy-lightbox";
import { defineProps, ref } from "vue";
const props = defineProps({
  imagesList: {
    required: true,
    typed: Array,
    default() {
      return [];
    },
  },
  mainImg: {
    required: true,
    typed: String,
    default: "",
  },
  subImages: {
    required: true,
    typed: Array,
    default() {
      return [];
    },
  },
});
// lightbox
const visibleRef = ref(false);
const indexRef = ref(0);
const onShow = () => {
  visibleRef.value = true;
};
const getIndex = (index) => {
  indexRef.value = index;
  onShow();
};
const onHide = () => (visibleRef.value = false);
const media = ref([]);
props.imagesList.forEach((img) => {
  media.value.push({
    alt: img,
    src: img,
  });
});
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
