<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h4>Hello Oluwapelumi, Welcome to Home View</h4>
          <HomeDetails>
         
          <template v-slot:pelumi>
          <!-- <template #pelumi> -->
            <p>More Details about pelumi's Home</p>
          <p>For more questions, got to FAQ</p>
          </template>
        </HomeDetails>
        <HomeDetails>
          <template v-slot:pelumi>
          <!-- <template #mary> -->
            <p>More Details about mary's Home</p>
          <p>For more questions, got to FAQ</p>
          </template>
        </HomeDetails>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import HomeDetails from '../components/HomeDetails.vue'

</script>