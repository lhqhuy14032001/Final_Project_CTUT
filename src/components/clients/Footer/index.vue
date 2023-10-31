<template>
  <div class="footer border-t border-t-gray-4 pt-10">
    <div class="grid grid-cols-12">
      <div class="logo col-span-4">
        <div class="w-20 left-nav">
          <router-link :to="{ name: 'home', params: {} }" class="flex items-end"
            ><img
              class="w-full mb-1"
              src="../../../assets/logo.png"
              alt="logo MiAUTO-logo"
            />
            <p class="text-black font-bold ml-1 text-5xl">MiAUTO</p>
          </router-link>
        </div>
      </div>
      <div class="footer-link-list col-span-8 grid grid-cols-6">
        <div class="col-span-2">
          <h1>Chính sách</h1>
          <ul>
            <li>Chính sách và quy định</li>
            <li>Quy chế hoạt động</li>
            <li>Bảo mật thông tin</li>
            <li>Giải quyết tranh chấp</li>
          </ul>
        </div>
        <div class="col-span-2">
          <h1>Tìm hiểu thêm</h1>
          <ul>
            <li>Hướng dẫn chung</li>
            <li>Hướng dẫn đặt xe</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Hỏi và trả lời</li>
          </ul>
        </div>
        <div class="col-span-2">
          <ul class="pt-14">
            <li>Về MiAUTO</li>
            <li>MiAUTO Blog</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
