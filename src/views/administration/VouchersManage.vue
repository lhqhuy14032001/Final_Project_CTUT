<template>
  <SectionMain>
    <SectionTitleLineWithButton
      title="Quản lý khuyến mãi"
      :icon="mdiSale"
      main
    ></SectionTitleLineWithButton>
    <CardBox hasTable> <TableSale></TableSale> </CardBox>
  </SectionMain>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import TableSale from "@/components/admins/TableSale.vue";
import CardBox from "@/components/admins/CardBox.vue";
import { mdiSale } from "@mdi/js";
</script>
