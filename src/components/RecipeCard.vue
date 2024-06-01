<script setup>
import RecipeModal from './RecipeModal.vue';
defineProps(['recipedetails']);
</script>

<template>
  <div class="card card-custom mt-5 ms-2 bg-success shadow position-relative">
    <div class="image-container">
      <img
        :src="recipedetails.image"
        class="card-img-top animated-img"
        alt=""
      />
    </div>
    <div class="card-body position-absolute bottom-0 start-0 p-3 w-100 text-white bg-dark bg-opacity-50">
      <h5 class="card-title">{{ recipedetails.name }}</h5>
      <p class="card-text">{{ recipedetails.cuisine }}</p>
      <div class="d-flex align-items-center justify-content-between">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="modal"
          :data-bs-target="'#modal' + recipedetails.id"
        >
          Details...
        </button>
        <div class="d-flex align-items-center ms-2">
          <div class="stars me-2">
            <i class="fas fa-star" v-for="n in Math.floor(recipedetails.rating)" :key="n"></i>
            <i class="fas fa-star-half-alt" v-if="recipedetails.rating % 1 !== 0"></i>
          </div>
          <button class="like-button">
            <i class="fas fa-heart"></i>
          </button>
        </div>
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
  </div>
</template>

<style scoped>
.card-custom {
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.image-container {
  height: 100%;
  width: 100%;
}

.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.animated-img {
  transition: transform 0.7s ease-in-out;
}

.animated-img:hover {
  transform: scale(1.1);
}

.card-body {
  background: rgba(0, 0, 0, 0.5);
}

.like-button {
  background-color: transparent;
  border: none;
  color: red;
  font-size: 1.5rem;
}

.stars {
  color: gold;
}

.badge-custom {
  background-color: #343a40;
}
</style>
