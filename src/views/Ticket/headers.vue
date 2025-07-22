<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header d-print-none" aria-label="Page header">
    <div class="container-xl">
      <div class="row align-items-center mw-100">
        <div class="col">
          <div class="mb-1">
            <ol class="breadcrumb" aria-label="breadcrumbs">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a href="#">Articles</a>
              </li>
            </ol>
          </div>
        </div>
        <div class="col-auto">
          <div class="btn-list">
            <button
              type="button"
              class="btn d-none d-md-inline-flex"
              @click="$emit('toggle')"
              v-if="$route.path === '/ticket'"
            >
              <i class="fa-solid fa-plus me-2"></i>
              Add New
            </button>
            <router-link
              to="/ticket"
              class="btn d-none d-md-inline-flex"
              v-if="$route.path !== '/ticket'"
            >
              <i class="fa-solid fa-arrow-left me-2"></i>
              Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->
</template>
