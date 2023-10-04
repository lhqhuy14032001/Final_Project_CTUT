<template>
  <div class="section-voucher">
    <BaseTitle
      title="Chương trình khuyến mãi"
      subTitle="Nhận nhiều ưu đãi hấp dẫn từ MiAUTO"
      classProp="p-3 mb-2"
    ></BaseTitle>
    <VoucherList :voucherList="voucherList"></VoucherList>
  </div>
</template>

<script setup>
import BaseTitle from "../BaseTitle.vue";
import VoucherList from "./components/VoucherList";
const voucherList = [
  {
    id: 1,
    img: "https://n1-cstg.mioto.vn/g/2023/09/02/10/5XZUFIPY.jpg",
  },
  {
    id: 2,
    img: "https://n1-cstg.mioto.vn/g/2023/09/02/10/5XZUFIPY.jpg",
  },
  {
    id: 3,
    img: "https://n1-cstg.mioto.vn/g/2023/09/02/10/5XZUFIPY.jpg",
  },
  {
    id: 4,
    img: "https://n1-cstg.mioto.vn/g/2023/09/02/10/5XZUFIPY.jpg",
  },
];
</script>

<style lang="scss" scoped></style>
