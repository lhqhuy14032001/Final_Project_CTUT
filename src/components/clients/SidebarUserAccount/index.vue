<template>
  <div class="sidebar-account">
    <SidebarList :sidebarList="sidebarList"></SidebarList>
  </div>
</template>

<script setup>
import SidebarList from "./components/SidebarList.vue";
const sidebarList = [
  {
    id: 1,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.76 10.86C13.3782 10.86 14.69 9.54819 14.69 7.93C14.69 6.31181 13.3782 5 11.76 5C10.1418 5 8.83 6.31181 8.83 7.93C8.83 9.54819 10.1418 10.86 11.76 10.86Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.84 19.0001V17.3301C5.84 15.3801 7.42 13.8101 9.36 13.8101H14.63C16.58 13.8101 18.15 15.3901 18.15 17.3301V19.0001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    label: "Tài khoản của tôi",
    to: { name: "accountInfo", params: {} },
  },
  {
    id: 2,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 8.7196C21.25 9.8796 20.81 11.0496 19.92 11.9396L18.44 13.4196L12.07 19.7896C12.04 19.8196 12.03 19.8296 12 19.8496C11.97 19.8296 11.96 19.8196 11.93 19.7896L4.08 11.9396C3.19 11.0496 2.75 9.8896 2.75 8.7196C2.75 7.54961 3.19 6.37961 4.08 5.48961C5.86 3.71961 8.74 3.71961 10.52 5.48961L11.99 6.9696L13.47 5.48961C15.25 3.71961 18.12 3.71961 19.9 5.48961C20.81 6.37961 21.25 7.53961 21.25 8.7196Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    label: "Xe yêu thích",
    to: { name: "wishList", params: {} },
  },
  {
    id: 3,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.15 15.7199H19.6C20.51 15.7199 21.24 14.8599 21.24 13.8399V12.4499C21.24 11.7199 20.86 11.0399 20.27 10.7399L18.79 9.96995L17.47 7.59994C17.09 6.90994 16.42 6.49994 15.71 6.50994H10.12C9.47 6.50994 8.86 6.84995 8.47 7.42995L6.77 9.93994L3.96 10.7999C3.24 11.0199 2.75 11.7599 2.75 12.5999V13.8299C2.75 14.8499 3.48 15.7099 4.39 15.7099H4.63" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.86914 15.7207H14.7691" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.68914 17.4603C7.83237 17.4603 8.75914 16.5335 8.75914 15.3903C8.75914 14.2471 7.83237 13.3203 6.68914 13.3203C5.54591 13.3203 4.61914 14.2471 4.61914 15.3903C4.61914 16.5335 5.54591 17.4603 6.68914 17.4603Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0798 17.4603C18.223 17.4603 19.1498 16.5335 19.1498 15.3903C19.1498 14.2471 18.223 13.3203 17.0798 13.3203C15.9365 13.3203 15.0098 14.2471 15.0098 15.3903C15.0098 16.5335 15.9365 17.4603 17.0798 17.4603Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    label: "Xe của tôi",
    to: { name: "myVehicles", params: {} },
  },
  {
    id: 4,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50023 8.86914H4.80023C3.66023 8.86914 2.74023 9.78914 2.74023 10.9291V18.1191C2.74023 19.2591 3.66023 20.1791 4.80023 20.1791H19.1902C20.3302 20.1791 21.2502 19.2591 21.2502 18.1191V10.9291" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1095 8.86914H10.2695" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1094 16.0605H19.1894C20.3294 16.0605 21.2494 16.9805 21.2494 18.1205C21.2494 19.2605 20.3294 20.1805 19.1894 20.1805H16.1094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1094 5.7793H19.1894C20.3294 5.7793 21.2494 6.6993 21.2494 7.8393" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.25 18.1198V7.83984" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1094 5.7793V16.0593" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75 14.0098H6.86C7.43 14.0098 7.89 14.3998 7.89 14.8898C7.89 15.3798 8.35 15.7698 8.92 15.7698H9.95C10.52 15.7698 10.98 16.1598 10.98 16.6498V17.5298V20.1698" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.40007 3.83008C6.98007 3.83008 5.83008 4.98008 5.83008 6.40008C5.83008 8.16008 8.13007 10.7401 8.23007 10.8501C8.32007 10.9501 8.48008 10.9501 8.57008 10.8501C8.67008 10.7401 10.9701 8.16008 10.9701 6.40008C10.9701 4.98008 9.82007 3.83008 8.40007 3.83008Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.39977 7.37961C8.8913 7.37961 9.28976 6.98114 9.28976 6.48961C9.28976 5.99808 8.8913 5.59961 8.39977 5.59961C7.90823 5.59961 7.50977 5.99808 7.50977 6.48961C7.50977 6.98114 7.90823 7.37961 8.39977 7.37961Z" fill="black"></path></svg>',
    label: "Chuyến đi của tôi",
    to: { name: "coming-soon", params: {} },
  },
  {
    id: 5,
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6699 8.91992V18.1699C18.6699 19.8699 17.2898 21.2499 15.5898 21.2499H9.41985C7.71985 21.2499 6.33984 19.8699 6.33984 18.1699V8.91992" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.2793 5.83008H20.7193" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.41992 5.83002C9.41992 4.13002 10.7999 2.75 12.4999 2.75C14.1999 2.75 15.5799 4.13002 15.5799 5.83002" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.4395 12L14.5594 16.11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5594 12L10.4395 16.11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    label: "Yêu cầu xoá tài khoản",
    to: { name: "coming-soon", params: {} },
  },
];
</script>

<style lang="scss" scoped></style>
