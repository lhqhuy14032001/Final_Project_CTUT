<template>
  <InternetCheck v-if="!isOnline || downlink < 0.4"></InternetCheck>
  <component v-else :is="layout">
    <slot />
  </component>
</template>

<script setup>
import InternetCheck from "@/components/InternetCheck.vue";
import { useNetwork } from "@vueuse/core";
import { computed } from "vue";
import { useRoute } from "vue-router";
// store
import { PUBLIC_LAYOUT } from "@/constans";
const ROUTE = useRoute();

let layout = computed(() => (ROUTE.meta.layout || PUBLIC_LAYOUT) + "Layout");

// check internet
let { isOnline, downlink } = useNetwork();
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app i {
  position: absolute;
  top: -800px;
  animation: star infinite linear;
}
@keyframes star {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
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
