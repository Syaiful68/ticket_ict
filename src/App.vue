<script setup>
//
import SideNav from "./views/Layout/SideNav.vue";
import NavBar from "./views/Layout/NavBar.vue";
</script>

<template>
  <!--  -->
  <div class="page">
    <SideNav></SideNav>
    <div class="page-wrapper">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>
