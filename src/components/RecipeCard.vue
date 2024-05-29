<template>
    <h1>Recipes Card</h1>
    {{ recipedetails }}
    <div class="col-md-3">
        <img :src="recipedetails.image" width="100" alt="">
    </div>
</template>

<script>
defineProps(['recipedetails'])
</script>