<script setup>
import router from "@/router";
import Api from "@/utils/Api";
import { reactive, ref } from "vue";

const formData = reactive({
  user: null,
  password: null,
});

const errs = ref([]);
const errMsg = ref("");

const togglePassword = ref("password");

function toggle() {
  return (togglePassword.value = togglePassword.value === "password" ? "text" : "password");
}

const SubmitLogin = async () => {
  await Api.post("/signin", formData)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      router.push("/ticket");
    })
    .catch((error) => {
      console.log(error);
      if (error.status === 422) {
        errs.value = error.response.data.errors;
      }
      if (error.status === 400) {
        errMsg.value = error.response.data;
      }
    });
};
</script>

<template>
  <div class="container container-tight py-4">
    <div class="alert alert-danger" role="alert" v-if="errMsg.msg">
      <div class="alert-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/alert-circle -->
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
          class="icon alert-icon icon-2"
        >
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">I'm so sorry&hellip;</h4>
        <div class="alert-description">{{ errMsg.msg }}</div>
      </div>
    </div>
    <div class="card card-md">
      <div class="card-body">
        <h2 class="h2 text-center mb-4">Login to your account</h2>
        <form @submit.prevent="SubmitLogin">
          <div class="mb-3">
            <label class="form-label">User</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errs.user }"
              placeholder="your@email.com"
              autocomplete="off"
              v-model="formData.user"
            />
            <div class="invalid-feedback" v-if="errs.user">{{ errs.user[0] }}</div>
          </div>
          <div class="mb-2">
            <label class="form-label"> Password </label>
            <div class="input-group input-group-flat">
              <input
                type="password"
                class="form-control"
                placeholder="Your password"
                autocomplete="off"
                :class="{ 'is-invalid': errs.password }"
                v-model="formData.password"
              />
              <div class="invalid-feedback" v-if="errs.password">{{ errs.password[0] }}</div>
            </div>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
