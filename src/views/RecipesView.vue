<template>
  <h3 class="text-center">Welcome to Recipes</h3>
  <hr>
  Count {{ count }}
  <div class="container">
      <form class="d-flex" role="search" @submit.prevent="handleSearch">
          <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="row">
        <RecipeCard  v-for="(recipe, index) in recipes" :key='index' :recipedetails="recipe" @update-favourites="updateMe" />
          <!-- <div class="col-md-3 mb-4" v-for="(recipe, index) in filteredRecipes" :key="index">
              <RecipeCard :recipedetails="recipe" @update-name="getName" />
          </div> -->
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
  const { recipes } = storeToRefs(store);
  const searchQuery = ref('');
  const count = ref(0)
  
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
  // const getName = (name)=>{
  //   console.log(name)
  //   console.log('from child')
  // }

  const updateMe = (name)=>{
    console.log(name)
    console.log('from child')
    if(!name){
      count.value++   
    }else{
      count.value--
    }
  }
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
  