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
    <router-link class="nav-link active" :to="path">
      <div
        class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
      >
        <i class="fa-solid" :class="icon"></i>
      </div>
      <span class="nav-link-text ms-1">{{ label }}</span>
    </router-link>
  </li>
</template>
