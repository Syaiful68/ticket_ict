<script setup>
import Headers from "./headers.vue";
</script>

<template>
  <Headers></Headers>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-3 g-4">
                <div>
                  <label class="form-label"> First Name </label>
                  <input type="date" placeholder="Enter first name" class="form-control" />
                </div>
                <div>
                  <label class="form-label"> Last Name </label>
                  <input type="date" placeholder="Enter last name" class="form-control" />
                </div>
                <div>
                  <label class="form-label"> Type </label>
                  <select name="" id="" class="form-control">
                    <option value="">Choise</option>
                    <option value="">Couriers</option>
                    <option value="">Tickets</option>
                  </select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="text-end">
                  <a href="#" class="btn btn-1 me-2"> Cancel </a>
                  <a href="#" class="btn btn-primary btn-2"> Save Changes </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
