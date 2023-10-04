<template>
  <DatePicker v-model="range" mode="dateTime" :columns="1" :rows="2" is-range>
    <template v-slot="{ inputValue, inputEvents }">
      <div class="hidden">{{ inputValue.start }}</div>
      <div class="section-date min-h-full" v-on="inputEvents.start">
        <div class="section-start-date">
          <div class="section-title">
            <p class="calendar-icon mr-3">
              <BaseIcon :path="mdiCalendarMonthOutline" :size="24"></BaseIcon>
            </p>
            <p>Bắt đầu</p>
          </div>
          <div class="section-body">
            <!-- {{ inputValue.start }} -->
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
  </DatePicker>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon.vue";
import { mdiCalendarMonthOutline } from "@mdi/js";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { ref } from "vue";

const date = ref(new Date());
date.value.setDate(Number(date.value.getDate() + 35));
const range = ref({ start: new Date(), end: date.value });
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
