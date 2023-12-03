<template>
  <VueBasicAlert
    :duration="1000"
    :closeIn="5000"
    ref="notificationStatusCreate"
  />
  <ModalConfirmEmail
    v-model="isShowModalConfirmEmail"
    has-cancel
  ></ModalConfirmEmail>
  <div class="avatar-wrapper">
    <div class="user-avatar">
      <label
        for="user-avatar"
        class="rounded-full w-fit text-center mx-auto cursor-pointer"
      >
        <input @change="uploadUserAvatar" type="file" id="user-avatar" hidden />
        <img :src="userAvatar" alt="" class="img-avt w-[146px] rounded-full" />
      </label>
      <div class="username text-centery my-5">{{ props.username }}</div>
    </div>
  </div>
  <div
    v-if="isShow"
    class="bg-primary px-2 py-1 text-white cursor-pointer rounded-lg hover:opacity-75"
    @click="onBecomeOwner"
  >
    Trở thành chủ xe
  </div>
</template>

<script setup>
import { uploadAvatar } from "@/firebase/uploadUserAvatar";
import { computed, ref } from "vue";
import { defineProps } from "vue";
// component
import ModalConfirmEmail from "@/components/clients/ModalConfirmEmail";
import VueBasicAlert from "vue-basic-alert";
// constan
import { PERMISSION } from "@/ultils/constants";
// store
import { useAuth } from "@/stores/auth.store";
import { useUser } from "@/stores/user.store";
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";
const authStore = useAuth();
const userStore = useUser();
const stateStore = useState();
const { userLoggedIn } = storeToRefs(authStore);
const { isShowModalConfirmEmail } = storeToRefs(stateStore);

// test mail

// userStore.testEmail();

const tmpAvatar =
  "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png";

const userAvatar = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.avatar
    ? userLoggedIn.value.avatar
    : tmpAvatar;
});
const notificationStatusCreate = ref(null);
const uploadUserAvatar = async (event) => {
  let res = await uploadAvatar(event.target.files[0]);
  if (res.data.urlAvatar) {
    await userStore.updateAvatar(res.data.urlAvatar);
    userAvatar.value = res.data.urlAvatar;
    userLoggedIn.value.avatar = res.data.urlAvatar;
    notificationStatusCreate.value.showAlert(
      "success",
      "Thông báo",
      "Cập nhật ảnh đại diện thành công."
    );
  } else {
    userAvatar.value = tmpAvatar;
    userStore.updateAvatar(tmpAvatar);
    userLoggedIn.value.avatar = tmpAvatar;
  }
};

// show button become owner
let isShow = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.role !== PERMISSION.OW
    ? true
    : false;
});
let isExistEmail = computed(() => {
  return userLoggedIn.value.email ? true : false;
});
async function onBecomeOwner() {
  if (isExistEmail.value) {
    await userStore.updateRole(userLoggedIn.value.email);
    await userStore.verifyEmail(userLoggedIn.value);
    isShowModalConfirmEmail.value = false;
  } else {
    stateStore.onToggleModalCofirmEmail();
  }
}

const props = defineProps({
  username: {
    typed: String,
    required: true,
    default: "User name",
  },
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  position: relative;
  &:hover {
    &::after {
      @apply rounded-full;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      background-image: url(https://www.mioto.vn/static/media/camera.0ef15ed5.svg);
      background-repeat: no-repeat;
      background-size: 36px 36px;
      background-position: 50%;
    }
  }
}
</style>
