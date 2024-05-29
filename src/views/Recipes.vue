<template>

    <div>Welcome to Recipes</div>
    <RecipeModal/>
    <!-- <RecipeCard v-for="(recipe, index) in recipes" :key=""index/> -->
    
</template>

<script setup>
import { onMounted } from 'vue';
import { useRecipeStore } from '../store/recipeStore.js';
import RecipeCard from "../components/RecipeCard.vue";
import { storeToRefs } from 'pinia';

const store = useRecipeStore()
onMounted(() => {
    store.getAllRecipes();
});
</script>