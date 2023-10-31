<template>
  <div class="mt-10 responsive">
    <div class="mx-4 text-text-dark font-semibold">
      <ul class="overflow-hidden rounded-xl bg-white p-4">
        <li @click="onSignUp" class="border-b py-3 px-4">Đăng nhập</li>
        <li class="py-3 px-4">Đăng ký</li>
      </ul>
    </div>
    <div class="verflow-hidden mx-4 mt-5 text-text-dark font-semibold">
      <ul class="rounded-xl bg-white p-4">
        <li class="border-b py-3 px-4">Về MiAUTO</li>
        <li class="py-3 px-4">Trở thành chủ xe</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useState } from "@/stores/state.store";
const stateStore = useState();
const onSignUp = () => {
  stateStore.onToggleModalSignUp();
  stateStore.onToggleMenuMobile();
};
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
