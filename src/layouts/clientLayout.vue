<template>
  <div class="wrapper">
    <div
      class="loading h-screen w-full flex justify-center items-center"
      v-if="isLoading"
    >
      <Loading></Loading>
    </div>
    <div
      class="content mx-[16px] sm:mx-[50px] lg:mx-[107px] xl:mx-[120px]"
      v-else
    >
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import Loading from "@/components/Loading";
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";

const stateStore = useState();
let { isLoading } = storeToRefs(stateStore);
</script>
