<template>
   <div class="container mt-4">
    <h1>Recipes Card</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <img :src="recipedetails.image" class="card-img-top" alt="Recipe Image">
                <div class="card-body">
                    <h5 class="card-title">{{ recipedetails.title }}</h5>
                    <p class="card-text">{{ recipedetails.description }}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Make this</button>
                </div>
            </div>
            </div>

    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Recipe Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <RecipeModal/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import RecipeModal from './RecipeModal.vue'
defineProps(['recipedetails'])
</script>