<template>
  <div class="account-detail-info">
    <div class="flex justify-between mb-5">
      <div
        v-if="userLoggedIn && userLoggedIn.phonenumber"
        class="flex items-center"
      >
        <p class="text-xs">Số điện thoại</p>
        <p
          v-if="phoneValid"
          class="text-xs ml-5 px-3 py-1 rounded-full bg-green-200"
        >
          Đã xác thực
        </p>
        <p
          v-else
          class="text-xs ml-5 px-3 py-1 rounded-full bg-orange-200 cursor-pointer"
        >
          Chưa xác thực
        </p>
      </div>

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
    <div class="flex justify-between" v-if="userLoggedIn && userLoggedIn.email">
      <div class="flex items-center">
        <p class="text-xs">Email</p>
        <p
          v-if="emailValid"
          class="text-xs ml-5 px-3 py-1 rounded-full bg-green-200"
        >
          Đã xác thực
        </p>
        <p
          v-else
          class="text-xs ml-5 px-3 py-1 rounded-full bg-orange-200 cursor-pointer disabled"
        >
          <span v-if="isLoading" class="text-xs">Đang gửi</span>
          <span v-else class="text-xs" @click="handleVerifyEmail"
            >Chưa xác thực</span
          >
        </p>
      </div>

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
import { defineProps, computed, ref } from "vue";
// store
import { useAuth } from "@/stores/auth.store";
import { useUser } from "@/stores/user.store";
import { storeToRefs } from "pinia";

const userStore = useUser();
const authStore = useAuth();
const { userLoggedIn } = storeToRefs(authStore);
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
const isLoading = ref(false);

const phoneValid = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.phoneValid ? true : false;
});

const emailValid = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.emailValid ? true : false;
});

async function handleVerifyEmail() {
  isLoading.value = true;
  await userStore.verifyEmail(userLoggedIn.value);
  isLoading.value = false;
}
</script>

<style lang="scss" scoped></style>
