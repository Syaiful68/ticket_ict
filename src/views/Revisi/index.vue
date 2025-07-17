<script setup>
import Api from "@/utils/Api";
import Tables from "./TableView.vue";
import { onMounted, ref } from "vue";

const datas = ref([]);

const getDatas = async () => {
  //
  Api.get("/tickets", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("tokens"),
    },
  })
    .then((res) => {
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
        <Tables></Tables>
      </div>
    </div>
  </div>
</template>
