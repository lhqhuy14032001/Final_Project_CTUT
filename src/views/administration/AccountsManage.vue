<script setup>
import { mdiTableBorder } from "@mdi/js";
import SectionMain from "@/components/admins/SectionMain.vue";
import TableSampleClients from "@/components/admins/TableSampleClients.vue";
import CardBox from "@/components/admins/CardBox.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
</script>

<template>
  <!-- <LayoutAuthenticated> -->

  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiTableBorder"
      title="Danh sách tài khoản"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox class="mb-6" has-table>
      <TableSampleClients checkable />
    </CardBox>
  </SectionMain>

  <!-- </LayoutAuthenticated> -->
</template>
