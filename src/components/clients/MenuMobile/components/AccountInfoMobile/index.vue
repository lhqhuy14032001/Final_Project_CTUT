<template>
  <div class="mt-10 responsive">
    <div class="mx-4 text-text-dark font-semibold">
      <ul class="overflow-hidden rounded-xl bg-white p-4">
        <li class="border-b py-3 px-4 flex justify-center items-center">
          <img
            src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
            alt="user's avatar"
            class="w-10 rounded-full"
          />
          <span class="ml-2 block">Le Hoang Quoc Huy</span>
        </li>
        <li class="border-b py-3 px-4">Xe của tôi</li>
        <li class="border-b py-3 px-4">Xe yêu thích</li>
        <li class="py-3 px-4">Khuyến mãi / Quà tặng</li>
      </ul>
    </div>
    <div class="verflow-hidden mx-4 mt-5 text-text-dark font-semibold">
      <ul class="rounded-xl bg-white p-4">
        <li class="border-b py-3 px-4">Về MiAUTO</li>
        <li class="border-b py-3 px-4">Trở thành chủ xe</li>
        <li class="py-3 px-4">Chuyến đi</li>
        <li @click="onLogout" class="py-3 px-4">Đăng xuất</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["onLogout"]);
const onLogout = () => {
  emit("onLogout");
};
</script>

<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
