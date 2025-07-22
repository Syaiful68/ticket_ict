<script setup>
//
import SideNav from "./views/Layout/SideNav.vue";
import NavBar from "./views/Layout/NavBar.vue";
</script>

<template>
  <!--  -->
  <div class="page" :class="{ 'page-center': $route.path === '/login' }">
    <SideNav v-if="$route.path !== '/login'"></SideNav>
    <div class="page-wrapper">
      <NavBar v-if="$route.path !== '/login'"></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
:where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-a {
  fill: black;
  opacity: 0.07;
}
:where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-b {
  fill: #1d2535;
}
:where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-c {
  fill: #454c5e;
}
@media (prefers-color-scheme: dark) {
  .tblr-illustrations-good-info-a {
    fill: black;
    opacity: 0.07;
  }
  .tblr-illustrations-good-info-b {
    fill: #1d2535;
  }
  .tblr-illustrations-good-info-c {
    fill: #454c5e;
  }
}
</style>
