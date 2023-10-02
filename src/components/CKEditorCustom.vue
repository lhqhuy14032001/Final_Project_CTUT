<template>
  <div class="desc_car">
    <ckeditor :editor="editor" v-model="desc" :config="editorConfig"></ckeditor>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { watch } from "vue";
import { useVehicleInfoStore } from "@/stores/vehicle.store";

const vehicleInfo = useVehicleInfoStore();

const editor = ClassicEditor;
let desc = ref("");
let editorConfig = {
  height: "500px",
};

watch(desc, (newVal) => {
  vehicleInfo.carInfor.desc = newVal;
});
</script>
