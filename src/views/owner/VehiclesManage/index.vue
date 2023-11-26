<template>
  <div>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiCar"
        title="Quản lý xe"
        main
        @toggleModal="onCreateVehicle"
      >
      </SectionTitleLineWithButton>
      <CardBox hasTable>
        <TableVehicles checkable></TableVehicles>
      </CardBox>
    </SectionMain>
  </div>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import TableVehicles from "@/components/admins/TableVehicles.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import { useRouter } from "vue-router";
import { mdiCar } from "@mdi/js";

const router = useRouter();
function onCreateVehicle() {
  router.push({ name: "car-create", params: {} });
}
</script>
