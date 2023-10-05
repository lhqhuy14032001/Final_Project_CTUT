<template>
  <div class="wrap-calendar min-w-fit">
    <VDatePicker
      v-model.range="range"
      mode="date"
      :columns="columns"
      :rows="rows"
      color="green"
      locale="vi-VN"
      expanded
      :min-date="new Date()"
      keepVisibleOnInput="true"
      :masks="masks"
    >
      <template #default="{ inputValue, inputEvents }">
        <div
          class="section-date min-w-full row columns-1 sm:columns-2"
          v-on="inputEvents.start"
        >
          <div class="section-start-date relative">
            <div class="section-title">
              <p class="calendar-icon mr-3">
                <BaseIcon :path="mdiCalendarMonthOutline" :size="24"></BaseIcon>
              </p>
              <p>Bắt đầu</p>
            </div>
            <div class="section-body">
              <div class="date">
                {{ inputValue.start ?? "Chọn ngày bắt đầu" }}
                <input
                  :value="inputValue.start"
                  type="text"
                  hidden
                  readonly
                /><input :value="inputValue.end" type="text" hidden readonly />
              </div>
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
              <div class="date">
                {{ inputValue.end ?? "Chọn ngày kết thúc" }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon.vue";
import { mdiCalendarMonthOutline } from "@mdi/js";
// import { DatePicker } from "v-calendar";
// import "v-calendar/style.css";
import { ref } from "vue";

import { rows, columns } from "@/ultils/configsVCalendar";
import { watch } from "vue";

const date = ref(new Date());
const range = ref({ start: date.value, end: null });
watch(range, (newRange) => {
  console.log(
    `start >>> ${newRange.start.getDate()}/${
      newRange.start.getMonth() + 1
    }/${newRange.start.getFullYear()}`
  );
  console.log(
    `end >>> ${newRange.end.getDate()}/${
      newRange.end.getMonth() + 1
    }/${newRange.end.getFullYear()}`
  );
});
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
