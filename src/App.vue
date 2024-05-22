<script setup>
import HelloWorld from './components/HelloWorld.vue';
import FormComponent from './components/FormComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';
</script>

<template>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>

    <RouterView/>



 <!-- <HelloWorld/> -->
 <!-- <FormComponent/> -->
 <!-- <OptionsComponent/> -->
</template>

<style scoped> 

</style>