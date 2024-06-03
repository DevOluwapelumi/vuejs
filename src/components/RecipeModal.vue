<script setup>
  import { ref } from 'vue';
  defineProps(['recipedetails']);

  const newName = ref('');
  const editName = () => {
    newName.value = recipedetails.name;
    $('#editNameModal').modal('show'); // Using jQuery to show the modal
  }
  const saveName = () => {
    recipedetails.name = newName.value;
    $('#editNameModal').modal('hide'); // Hide the modal after saving
  }
</script>

<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <h5 class="modal-title" id="exampleModalLabel">Name:  {{ recipedetails.name }}</h5>
          <button class="btn btn-sm btn-outline-primary" @click="editName">Edit Name</button>
        </div>
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

  <!-- Edit Name Modal -->
  <div class="modal fade" id="editNameModal" tabindex="-1" role="dialog" aria-labelledby="editNameModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editNameModalLabel">Edit Recipe Name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="newName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="saveName">Save changes</button>
        </div>
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
