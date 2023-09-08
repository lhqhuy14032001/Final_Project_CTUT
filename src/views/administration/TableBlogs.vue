<template>
  <SectionMain>
    <!-- START: MODAL CREATE A NEW BLOG -->
    <ModalCreateBlog title=""></ModalCreateBlog>
    <!-- END: MODAL CREATE A NEW BLOG -->
    <SectionTitleLineWithButton :icon="mdiNewspaper" title="Blogs" main>
    </SectionTitleLineWithButton>
    <CardBox hasTable>
      <TableBlogs checkable></TableBlogs>
    </CardBox>
  </SectionMain>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import TableBlogs from "@/components/admins/TableBlogs.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import ModalCreateBlog from "@/components/admins/ModalCreateBlog.vue";
import { mdiNewspaper } from "@mdi/js";
</script>
