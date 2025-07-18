<script setup>
import Api from "@/utils/Api";
import Tables from "./TableView.vue";
import Modals from "./modalView.vue";
import Headers from "./headers.vue";
import { onMounted, ref } from "vue";

const datas = ref([]);
const modalToggle = ref(false);

const getDatas = async () => {
  //
  Api.get("/tickets", {
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

function toggleModal() {
  return (modalToggle.value = !modalToggle.value);
}

onMounted(() => {
  getDatas();
});
</script>

<template>
  <Headers @toggle="toggleModal"></Headers>

  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col">
          <Tables :data="datas"></Tables>
        </div>
      </div>
    </div>
  </div>

  <Modals v-show="modalToggle" @toggle="toggleModal"></Modals>
</template>
