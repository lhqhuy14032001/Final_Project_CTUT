<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <table class="w-full">
    <thead>
      <tr>
        <th>Tiêu đề</th>
        <th>Nội dung</th>
        <th>Ngày tạo</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-if="!blogsList.length">
        Hiện tại không có bài blogs đang tồn tại
      </tr>
      <tr v-for="blog in blogsList" :key="blog.id">
        <td>{{ blog.title }}</td>
        <td>
          {{ blog.content }}
        </td>
        <td>
          {{ blog.created }}
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/admins/CardBoxModal.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import { computed } from "vue";

const props = defineProps({
  blogsList: {
    type: Array,
    required: true,
    default() {
      return [];
    },
  },
});

const blogsList = computed(() => {
  return props.blogsList;
});

const isModalActive = ref(false);

const isModalDangerActive = ref(false);
</script>
