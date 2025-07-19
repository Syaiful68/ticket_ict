<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header d-print-none" aria-label="Page header">
    <div class="container-xl">
      <div class="row align-items-center mw-100">
        <div class="col">
          <div class="mb-1">
            <ol class="breadcrumb" aria-label="breadcrumbs">
              <li class="breadcrumb-item" :class="{ active: $route.path === '/courier' }">
                <router-link to="/courier">Courier</router-link>
              </li>
              <li
                class="breadcrumb-item"
                aria-current="page"
                v-if="$route.path === '/courier/create'"
                :class="{ active: $route.path === '/courier/create' }"
              >
                <router-link to="/courier/create">Create</router-link>
              </li>
              <li
                class="breadcrumb-item"
                aria-current="page"
                v-if="$route.path === '/courier/:id'"
                :class="{ active: $route.path === '/courier/:id' }"
              >
                <router-link to="/courier/detail">Detail</router-link>
              </li>
            </ol>
          </div>
        </div>
        <div class="col-auto">
          <div class="btn-list">
            <router-link
              v-if="$route.path !== '/courier'"
              to="/courier"
              class="btn d-none d-md-inline-flex"
            >
              <i class="fa-solid fa-long-arrow-alt-left me-2"></i>
              Back
            </router-link>
            <router-link
              v-if="$route.path === '/courier'"
              to="/courier/create"
              class="btn d-none d-md-inline-flex"
            >
              <i class="fa-solid fa-plus me-2"></i>
              Create Courier
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->
</template>
