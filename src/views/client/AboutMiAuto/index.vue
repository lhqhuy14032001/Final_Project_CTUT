<template>
  <div class="about-wrapper">
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <Header></Header>
    <div class="line border-[0.5px] -mx-[107px]"></div>
    <div id="section-intro">
      <Intro></Intro>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
import Intro from "@/components/clients/AboutMiAuto";
import ModalSignUp from "@/components/clients/ModalSignUp";
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";

const stateStore = useState();
const { isShowModalSignUp } = storeToRefs(stateStore);
</script>

<style lang="scss" scoped></style>
