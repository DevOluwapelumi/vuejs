<script setup>
 defineProps(['recipedetails']);
</script>



<template>
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Name:  {{ recipedetails.name }}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body shadow bg-secondary">
      <p>ID: {{ recipedetails.id }}</p>
      <p>mealType:
      <ul>
        <li v-for="(mealType, index) in recipedetails.mealType" :key="index">
           {{ mealType }}
        </li>
      </ul>
      </p>
      <p>Cuisine: {{ recipedetails.cuisine }}</p>
      <p>Ingredients:</p>
      <ul>
        <li v-for="(ingredient, index) in recipedetails.ingredients" :key="index">
           {{ ingredient }}
        </li>
      </ul>
      <p>Instructions:</p>
      <ul>
        <li v-for="(instructions, index) in recipedetails.instructions" :key="index">
           {{ instructions }}
        </li>
      </ul>
      <img :src="recipedetails.image" class="img-fluid" alt="Recipe Image">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  </div>
</template>



<style scoped>
.modal-body img {
  max-width: 100%;
  height: auto;
}
</style>
