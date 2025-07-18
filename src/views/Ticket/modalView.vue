<script setup>
import { reactive, ref } from "vue";

const formData = reactive({
  category: "",
  action: "",
  resi: "",
  file: null,
  description: null,
});
</script>

<template>
  <!-- BEGIN PAGE MODALS -->
  <div class="modal modal-blur" id="modal-report" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Ticket</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('toggle')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Category</label>
            <select class="form-control" v-model="formData.category">
              <option value="">Choise</option>
              <option value="data">Data Orion</option>
              <option value="user">User</option>
              <option value="orion">My Orion</option>
              <option value="aplication">Aplication</option>
            </select>
          </div>
          <div class="mb-3" v-if="formData.category === 'data'">
            <label class="form-label">Action</label>
            <select class="form-control" v-model="formData.action">
              <option value="">Choise</option>
              <option value="cancel">Cancel</option>
              <option value="revisi">Revisi</option>
            </select>
          </div>
          <div class="mb-3" v-if="formData.category === 'user'">
            <label class="form-label">Action</label>
            <select class="form-control" v-model="formData.action">
              <option value="">Choise</option>
              <option value="cancel">Couriers</option>
              <option value="revisi">Orion</option>
            </select>
          </div>
          <div class="mb-3" v-if="formData.category === 'data'">
            <label class="form-label">Resi</label>
            <input type="text" class="form-control" v-model="formData.resi" />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" row="5" v-model="formData.description"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">File</label>
            <input type="file" class="form-control" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn link-secondary btn-3" @click="$emit('toggle')">
            Cancel
          </button>
          <a href="#" class="btn btn-primary btn-5 ms-auto" data-bs-dismiss="modal">
            <!-- Download SVG icon from http://tabler.io/icons/icon/plus -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-2"
            >
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            Create new report
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE MODALS -->
</template>
<style scoped>
.modal {
  display: block;
}
</style>
