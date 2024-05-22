<script setup>
import HelloWorld from './components/HelloWorld.vue';
import FormComponent from './components/FormComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';

    const user= {
        id:'123',
        name:'Pelumi'
    }
</script>

<template>
    <RouterLink :to="{name:'home'}">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink :to="`/user/${user.name}`">Go to User</RouterLink>

    <RouterView/>



 <!-- <HelloWorld/> -->
 <!-- <FormComponent/> -->
 <!-- <OptionsComponent/> -->
</template>

<style scoped> 

</style>