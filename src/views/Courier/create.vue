<script setup>
import Api from "@/utils/Api";
import Tables from "./TableView.vue";
import headers from "./headers.vue";
import { onMounted, ref } from "vue";

const datas = ref([]);

const getDatas = async () => {
  //
  Api.get("/revisi", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      datas.value = res.data.data;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getDatas();
});
</script>

<template>
  <headers></headers>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-md-6 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Nik</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Contact</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Armada</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Zone</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Employee</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="card-action">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
