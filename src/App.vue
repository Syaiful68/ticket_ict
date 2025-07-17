<script setup>
//
import NavBar from "./views/Layout/NavBar.vue";
import SideNav from "./views/Layout/SideNav.vue";
</script>

<template>
  <SideNav v-if="$route.path !== '/login'"></SideNav>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- Navbar -->
    <NavBar v-if="$route.path !== '/login'"></NavBar>
    <!-- End Navbar -->
    <router-view></router-view>
  </main>
</template>
