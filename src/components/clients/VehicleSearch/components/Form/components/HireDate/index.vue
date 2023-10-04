<template>
  <div
    class="section-date min-h-full"
    @click="isShowCalendar = !isShowCalendar"
  >
    <div class="section-start-date">
      <div class="section-title">
        <p class="calendar-icon mr-3">
          <BaseIcon :path="mdiCalendarMonthOutline" :size="24"></BaseIcon>
        </p>
        <p>Bắt đầu</p>
      </div>
      <div class="section-body">
        <div class="date">04/10/2023</div>
        <div class="clock">21:00</div>
      </div>
    </div>
    <div class="section-end-date">
      <div class="section-title">
        <p class="calendar-icon mr-3">
          <BaseIcon :path="mdiCalendarMonthOutline" :size="24"></BaseIcon>
        </p>
        <p>Kết thúc</p>
      </div>
      <div class="section-body">
        <div class="date">04/10/2023</div>
        <div class="clock">21:00</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon.vue";
import { mdiCalendarMonthOutline } from "@mdi/js";
// import "v-calendar/style.css";

import { ref } from "vue";

const isShowCalendar = ref(false);
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
