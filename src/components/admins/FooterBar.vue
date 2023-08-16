<script setup>
import { containerMaxW } from "@/config.js";
import BaseLevel from "@/components/admins/BaseLevel.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="https://www.mioto.vn/" target="_blank">MiAUTO</a>.</b
        >
      </div>
      <div class="md:py-2">
        <a href="#"> </a>
      </div>
    </BaseLevel>
  </footer>
</template>
