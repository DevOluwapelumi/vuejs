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
    <RouterLink :to="{name:'about'}">Go to About</RouterLink>
    <RouterLink :to="{name:'uss'}">Go to AboutUs</RouterLink>
    <RouterLink :to="{name:'company'}">Go to OurComapny</RouterLink>
    <RouterLink :to="`/user/${user.name}`">Go to User</RouterLink>

    <RouterView/>



 <!-- <HelloWorld/> -->
 <!-- <FormComponent/> -->
 <!-- <OptionsComponent/> -->
</template>

<style scoped> 

</style>