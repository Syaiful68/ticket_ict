<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex">
        <h6>Ticket List</h6>
        <div class="justify-content-end ms-auto" style="width: 200px">
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Ticket
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Type
            </th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              User
            </th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Origins
            </th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Status
            </th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">{{ item.code_ticket }}</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ item.type }}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0">{{ item.user_id }}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge bg-gradient-success">{{ item.status }}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">{{ item.created_at }}</span>
            </td>
            <td class="align-middle">
              <a
                href="javascript:;"
                class="text-secondary font-weight-bold text-xs"
                data-toggle="tooltip"
                data-original-title="Edit user"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-body">
      <!--  -->
      <ul class="pagination pagination-info justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#link" aria-label="Previous">
            <span aria-hidden="true"><i class="ni ni-bold-left" aria-hidden="true"></i></span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#link">1</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#link">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#link">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#link">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#link">5</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#link" aria-label="Next">
            <span aria-hidden="true"><i class="ni ni-bold-right" aria-hidden="true"></i></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
