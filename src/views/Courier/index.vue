<script setup>
import Api from "@/utils/Api";
import Tables from "./TableView.vue";
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
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <Tables :data="datas"></Tables>
      </div>
    </div>
  </div>
</template>
