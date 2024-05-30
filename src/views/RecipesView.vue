<template>

    <h3 class="text-center">Welcome to Recipes</h3> <hr>
    <div class="container">
        <div class="row">
    <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipedetails="recipe"/>
</div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRecipeStore } from '@/store/recipeStore';
import RecipeCard from "../components/RecipeCard.vue";
import { storeToRefs } from 'pinia';

const store = useRecipeStore()
const {recipes} = storeToRefs(store)

onMounted(() => {
    store.getAllRecipes();
});
</script>