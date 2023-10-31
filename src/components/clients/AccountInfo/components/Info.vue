<template>
  <div class="account-detail-info">
    <div class="flex justify-between mb-5">
      <p class="text-xs">Số điện thoại</p>
      <div class="flex items-center">
        <p class="font-semibold">{{ props.phonenumber }}</p>
        <p class="btn-update border p-2 ml-3 w-fit rounded-full cursor-pointer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.30732 14.1607L14.1673 4.30065L11.7007 1.83398L1.84065 11.694L1.83398 14.1673L4.30732 14.1607Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.2344 4.08789L11.9144 5.76788"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </p>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-xs">Email</p>
      <div class="flex items-center">
        <p class="font-semibold">{{ props.email }}</p>
        <p class="btn-update border p-2 ml-3 w-fit rounded-full cursor-pointer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.30732 14.1607L14.1673 4.30065L11.7007 1.83398L1.84065 11.694L1.83398 14.1673L4.30732 14.1607Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.2344 4.08789L11.9144 5.76788"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  phonenumber: {
    typed: String,
    required: true,
    default: "Thêm số điện thoại",
  },
  email: {
    typed: String,
    required: true,
    default: "Thêm email",
  },
});
</script>

<style lang="scss" scoped></style>
