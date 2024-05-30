<script setup>
import RecipeModal from './RecipeModal.vue';
defineProps(['recipedetails']);
</script>

<template>
    <div class="card col-md-6 mt-5 ms-2" style="width: 20rem;">
      <img :src="recipedetails.image" class="card-img-top mt-2 animated-img" width="100" alt="" />
      <hr>
      <div class="card-body">
        <h5 class="card-title">{{ recipedetails.name }}</h5>
        <p class="card-text">{{ recipedetails.cuisine }}</p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          :data-bs-target="'#modal' + recipedetails.id"
        >
          View Recipes Details
        </button>
      </div>
    </div>
  
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'modal' + recipedetails.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Recipe Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <RecipeModal :recipedetails="recipedetails" />
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .card {
    width: 20rem;
  }
  
  .animated-img {
    transition: transform 0.7s ease-in-out;
  }
  
  .animated-img:hover {
    transform: scale(1.1);
  }
  </style>