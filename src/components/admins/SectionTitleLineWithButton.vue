<template>
  <section
    :class="{ 'pt-6': !main }"
    class="mb-6 flex items-center justify-between"
  >
    <div class="flex items-center justify-start">
      <IconRounded
        v-if="icon && main"
        :icon="icon"
        color="light"
        class="mr-3"
        bg
      />
      <BaseIcon v-else-if="icon" :path="icon" class="mr-2" size="20" />
      <h1 :class="main ? 'text-3xl' : 'text-2xl'" class="leading-tight">
        {{ title }}
      </h1>
    </div>
    <slot v-if="hasSlot" />
    <BaseButton
      v-else
      :icon="mdiPlusBox"
      color="whiteDark"
      @click="toggleModal"
    />
  </section>
</template>
<script setup>
// import { mdiCog } from "@mdi/js";
import { useSlots, computed, defineProps, defineEmits } from "vue";
import BaseIcon from "@/components/admins/BaseIcon.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import IconRounded from "@/components/admins/IconRounded.vue";
import { mdiPlusBox } from "@mdi/js";

defineProps({
  icon: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  main: Boolean,
});
const emit = defineEmits(["toggleModal"]);
const hasSlot = computed(() => useSlots().default);

const toggleModal = () => emit("toggleModal");
</script>
