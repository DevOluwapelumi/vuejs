<template>
    <h3 class="text-center">Welcome to Recipes</h3>
    <hr>
    <div class="container">
      <form class="d-flex" role="search" @submit.prevent="handleSearch">
        <input v-model="searchQuery" class="form-control me-2 w-5" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="row">
        <RecipeCard v-for="(recipe, index) in filteredRecipes" :key="index" :recipedetails="recipe" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRecipeStore } from '@/store/recipeStore';
  import RecipeCard from '../components/RecipeCard.vue';
  import { storeToRefs } from 'pinia';
  
  const store = useRecipeStore();
  const { filteredRecipes } = storeToRefs(store);
  const searchQuery = ref('');
  
  onMounted(() => {
    store.getAllRecipes();
  });
  
  const handleSearch = () => {
    if (searchQuery.value.trim()) {
      store.searchRecipes(searchQuery.value.trim());
    } else {
      store.searchResults = [];
    }
  };
  </script>
  
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
  