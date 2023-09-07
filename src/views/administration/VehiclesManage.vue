<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiCar" title="Quản lý xe" main>
    </SectionTitleLineWithButton>
    <CardBox hasTable>
      <TableVehicles checkable></TableVehicles>
    </CardBox>
  </SectionMain>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import TableVehicles from "@/components/admins/TableVehicles.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import CardBox from "@/components/admins/CardBox.vue";

import { mdiCar } from "@mdi/js";
</script>
