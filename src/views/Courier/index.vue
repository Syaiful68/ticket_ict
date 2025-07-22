<script setup>
import Api from "@/utils/Api";
import Tables from "./TableView.vue";
import Headers from "./headers.vue";
import { onMounted, ref } from "vue";

const datas = ref([]);

const getDatas = async () => {
  //
  Api.get("/courier", {
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

<!-- <template>
  <headers></headers>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <Tables :data="datas"></Tables>
      </div>
    </div>
  </div>
</template> -->

<template>
  <Headers></Headers>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col">
          <Tables :data="datas"></Tables>
        </div>
      </div>
    </div>
  </div>
</template>
