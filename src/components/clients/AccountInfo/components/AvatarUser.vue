<template>
  <div class="avatar-wrapper">
    <div class="user-avatar">
      <label
        for="user-avatar"
        class="rounded-full w-fit text-center mx-auto cursor-pointer"
      >
        <input type="file" id="user-avatar" hidden />
        <img
          src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
          alt=""
          class="img-avt w-[146px]"
        />
      </label>
      <div class="username text-centery my-5">{{ props.username }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
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
