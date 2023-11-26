<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
// store
import { useState } from "@/stores/state.store";
import { PUBLIC_LAYOUT } from "@/constans";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { onMounted } from "vue";
const ROUTE = useRoute();
const stateStore = useState();
const { isLoading } = storeToRefs(stateStore);
onBeforeMount(() => {
  isLoading.value = true;
});
onMounted(() => {
  isLoading.value = false;
});
let layout = computed(() => (ROUTE.meta.layout || PUBLIC_LAYOUT) + "Layout");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.sidebar-account a.router-link-exact-active {
  @apply border-l-4 border-l-primary;
}
</style>
