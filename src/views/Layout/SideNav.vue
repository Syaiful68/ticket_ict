<script setup>
import List from "../../components/ListMenu.vue";
const Menus = [
  { label: "Dashboard", icons: "fa-gauge-high", path: "/dashboard" },
  { label: "Tickets", icons: "fa-pen-to-square", path: "/ticket" },
];
</script>

<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a
        class="navbar-brand m-0"
        href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
        target="_blank"
      >
        <img src="../assets/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Dashboard</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0" />
    <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <List
          v-for="(item, index) in Menus"
          :key="index"
          :label="item.label"
          :icon="item.icons"
          :path="item.path"
        ></List>
      </ul>
    </div>
  </aside>
</template>
