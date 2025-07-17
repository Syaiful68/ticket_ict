<script setup>
import Api from "@/utils/Api";
import { reactive, ref } from "vue";

const formData = reactive({
  user: null,
  password: null,
});

const errs = ref([]);

const SubmitLogin = async () => {
  await Api.post("/signin", formData)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
    })
    .catch((error) => {
      if (error.status === 422) {
        errs.value = error.response.data.errors;
      } else {
        console.log(error);
      }
    });
};
</script>

<template>
  <main class="main-content mt-0">
    <section class="min-vh-100 mb-8">
      <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg">
        <!-- <span class="mask bg-gradient-dark opacity-6"></span> -->
        <!-- <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 text-center mx-auto">
              <h1 class="mb-2 mt-3">Welcome!</h1>
            </div>
          </div>
        </div> -->
      </div>
      <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card z-index-0">
              <div class="card-header text-center pt-4">
                <h5>Login</h5>
              </div>
              <div class="card-body">
                <form role="form text-left" @submit.prevent="SubmitLogin()">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User"
                      aria-label="User"
                      aria-describedby="email-addon"
                      v-model="formData.user"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                      v-model="formData.password"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-dark w-100 my-4 mb-2">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
