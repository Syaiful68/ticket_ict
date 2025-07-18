<script setup>
//
const props = defineProps({
  label: String,
  icon: String,
  path: String,
});
</script>

<template>
  <li class="nav-item">
    <router-link class="nav-link" :class="{ active: $route.path.startsWith(path) }" :to="path">
      <span class="nav-link-icon d-md-none d-lg-inline-block"
        ><!-- Download SVG icon from http://tabler.io/icons/icon/home -->
        <i class="fa-solid" :class="icon"></i>
      </span>
      <span class="nav-link-title"> {{ label }} </span>
    </router-link>
  </li>
</template>
