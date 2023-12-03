<template>
  <div class="coming-soon-wrapper">
    <div class="mb-56">
      <h1 class="text-6xl text-left text-white font-bold">
        Tính năng <br />
        đang được phát triển
      </h1>
      <div class="my-5">
        <router-link
          class="block rounded-lg px-6 py-4 bg-primary text-white font-bold hover:opacity-80"
          :to="{ name: 'home', params: {} }"
          >Về trang chủ
        </router-link>
      </div>
    </div>
    <div class="rocket">
      <img
        class="w-[450px]"
        src="https://assets.seedprod.com/93-zjzv5aec44wxy3as.png"
        alt="rocket"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
function starts() {
  let count = 50;
  let comingSoonWrapper = document.querySelector(".coming-soon-wrapper");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let durations = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = h + "px";
    star.style.animationDuration = durations + "s";

    star.style.background = "rgba(255, 255, 255, 0.5)";
    comingSoonWrapper.appendChild(star);
    i++;
  }
}
onMounted(() => {
  starts();
});
</script>

<style lang="scss" scoped>
.coming-soon-wrapper {
  @apply relative flex justify-center items-center h-screen bg-black;
}

.rocket img {
  animation: rocketMove 0.1s infinite ease;
}

@keyframes rocketMove {
  0%,
  100% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
}
</style>
