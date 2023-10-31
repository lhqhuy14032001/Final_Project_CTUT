<template>
  <component :is="layout"> <slot /> </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constans";
const ROUTE = useRoute();
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
