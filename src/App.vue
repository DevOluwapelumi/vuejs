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



<nav class="navbar">
    <div class="navbar-menu">
        <router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
        <router-link class="navbar-item" :to="{ name: 'about' }">About</router-link>
        <router-link class="navbar-item" :to="{ name: 'uss' }">About Us</router-link>
        <router-link class="navbar-item" :to="{ name: 'company' }">Our Company</router-link>
        <router-link class="navbar-item" :to="{ name: 'todo' }">Todo List</router-link>
        <router-link class="navbar-item" :to="{ name: 'recipes' }">Recipes List</router-link>
        <router-link class="navbar-item" :to="`/user/${user.name}`">User</router-link>
    </div>
</nav>


    <RouterView/>



 <!-- <HelloWorld/> -->
 <!-- <FormComponent/> -->
 <!-- <OptionsComponent/> -->
</template>

<style scoped> 
    .navbar {
    background-color: #333;
    padding: 10px;
}

.navbar-menu {
    display: flex;
    justify-content: space-between;
}

.navbar-item {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.navbar-item:hover {
    background-color: #555;
}

</style>