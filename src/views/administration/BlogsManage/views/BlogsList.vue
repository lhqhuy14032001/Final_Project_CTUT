<template>
  <SectionMain>
    <!-- START: MODAL CREATE A NEW BLOG -->
    <ModalCreateBlog title=""></ModalCreateBlog>
    <!-- END: MODAL CREATE A NEW BLOG -->
    <SectionTitleLineWithButton :icon="mdiNewspaper" title="Blogs" main>
    </SectionTitleLineWithButton>
    <CardBox hasTable>
      <TableBlogs :blogsList="blogsList"></TableBlogs>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import ModalCreateBlog from "@/components/admins/ModalCreateBlog.vue";
import { mdiNewspaper } from "@mdi/js";

import TableBlogs from "../components/TableBlogsList/TableBlogs.vue";

import { useBlogs } from "@/stores/blogs.store";

const blogsStore = useBlogs();
const blogsList = blogsStore.blogs;
</script>
