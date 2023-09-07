<template>
  <SectionMain>
    <!-- START: CREATE A NEW ACCOUNT -->
    <ModalCreateAccount
      v-model="isModalCreateAccountActive"
      title="Tạo tài khoản"
      button-label="Tạo"
      has-cancel
    ></ModalCreateAccount>
    <!-- END: CREATE A NEW ACCOUNT -->

    <SectionTitleLineWithButton
      :icon="mdiTableBorder"
      title="Danh sách tài khoản"
      main
      @toggleModalCreateAccount="toggleModalCreateAccount"
    >
    </SectionTitleLineWithButton>
    <CardBox class="mb-6" has-table>
      <TableSampleClients checkable />
    </CardBox>
  </SectionMain>
</template>
<script setup>
import { mdiTableBorder } from "@mdi/js";
import SectionMain from "@/components/admins/SectionMain.vue";
import TableSampleClients from "@/components/admins/TableSampleClients.vue";
import CardBox from "@/components/admins/CardBox.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import ModalCreateAccount from "@/components/admins/ModalCreateAccount.vue";

import { ref } from "vue";

const isModalCreateAccountActive = ref(false);

const toggleModalCreateAccount = () => {
  isModalCreateAccountActive.value = !isModalCreateAccountActive.value;
};
</script>
