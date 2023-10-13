<template>
  <SectionMain>
    <SectionTitleLineWithButton
      title="Quản lý hợp đồng"
      :icon="mdiNoteText"
    ></SectionTitleLineWithButton>
    <CardBox hasTable> <TableContracts></TableContracts> </CardBox>
  </SectionMain>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import TableContracts from "@/components/admins/TableContracts.vue";
import { mdiNoteText } from "@mdi/js";
</script>
