<script setup>
import { computed, ref, onMounted } from "vue";
import {
  mdiAccountMultiple,
  mdiCar,
  mdiSale,
  mdiReload,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/admins/Charts/chart.config.js";
import LineChart from "@/components/admins/Charts/LineChart.vue";
import SectionMain from "@/components/admins/SectionMain.vue";
import CardBoxWidget from "@/components/admins/CardBoxWidget.vue";
import CardBox from "@/components/admins/CardBox.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import CardBoxTransaction from "@/components/admins/CardBoxTransaction.vue";
// import CardBoxClient from "@/components/admins/CardBoxClient.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
// stores
import { useMainStore } from "@/stores/main";
import { useUser } from "@/stores/user.store";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const mainStore = useMainStore();
const userStore = useUser();

// call API
onBeforeMount(async () => {
  await userStore.getTotalUsers();
});
const { totalUsers } = storeToRefs(userStore);

// const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdi" title="Tổng quan" main>
      <p></p>
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <CardBoxWidget
        trend="12%"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="totalUsers"
        label="Tài khoản"
      />
      <CardBoxWidget
        trend="12%"
        trend-type="down"
        color="text-blue-500"
        :icon="mdiCar"
        :number="7770"
        suffix="xe"
        label="Xe"
      />
      <CardBoxWidget
        trend="Overflow"
        trend-type="alert"
        color="text-red-500"
        :icon="mdiSale"
        :number="20"
        suffix=" mã"
        label="Mã giảm giá"
      />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col justify-between">
        <CardBoxTransaction
          v-for="(transaction, index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
      <div class="flex flex-col justify-between">
        <!-- <CardBoxClient
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"
        /> -->
      </div>
    </div>

    <SectionTitleLineWithButton :icon="mdiChartPie" title="Thu nhập tuần qua">
      <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" />
    </SectionTitleLineWithButton>

    <!-- START: chart -->
    <CardBox class="mb-6">
      <div v-if="chartData">
        <line-chart :data="chartData" class="h-96" />
      </div>
    </CardBox>
  </SectionMain>
</template>
