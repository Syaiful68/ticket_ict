<script setup>
import Api from "@/utils/Api";
import Headers from "./headers.vue";
import { reactive, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const statusType = [
  { label: "Done", name: "done" },
  { label: "Request", name: "request" },
  { label: "Delegation", name: "delegation" },
];
const delegations = [
  { label: "CCC", name: "CCC" },
  { label: "CS", name: "CS" },
  { label: "Inbound", name: "Inbound" },
  { label: "Outbound", name: "Outbound" },
];

const getData = async () => {
  await Api.get("/tickets/" + route.params.id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      ticket.value = res.data.data.code_ticket;
      formData.type = res.data.data.type;
      formData.status = res.data.data.status;
      formData.description = res.data.data.description;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const ticket = ref("");

const formData = reactive({
  type: "",
  status: "",
  delegation: "",
  handler: null,
  description: null,
  notes: null,
});

function updateTicket() {
  Api.patch("/tickets/" + route.params.id, formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      router.push("/ticket");
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  getData();
});
</script>

<template>
  <Headers></Headers>

  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <!--  -->
        <div class="col-12">
          <div class="card">
            <div class="card-header">{{ ticket }}</div>
            <form @submit.prevent="updateTicket()">
              <div class="card-body">
                <div class="mb-3">
                  <label for="" class="form-label">Type</label>
                  <input type="text" class="form-control" v-model="formData.type" disabled />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Description</label>
                  <input type="text" class="form-control" v-model="formData.description" disabled />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Handler</label>
                  <input type="text" class="form-control" v-model="formData.handler" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Status</label>
                  <select v-model="formData.status" class="form-control">
                    <option value="">Choise</option>
                    <option v-for="(item, index) in statusType" :key="index" :value="item.name">
                      {{ item.label }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Delegation</label>
                  <select v-model="formData.delegation" class="form-control">
                    <option value="">Choise</option>
                    <option v-for="(item, index) in delegations" :key="index" :value="item.name">
                      {{ item.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
