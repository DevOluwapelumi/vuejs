<script setup>
import HelloWorld from './components/HelloWorld.vue';
import FormComponent from './components/FormComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';

const user = {
  id: '123',
  name: 'Pelumi',
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'uss' }">About Us</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'company' }">Our Company</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'todo' }">Todo List</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'recipes' }">Recipes List</router-link>
          </li> <hr>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/user/${user.name}`">User</router-link>
          </li> <hr>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <RouterView />

  <!-- <HelloWorld /> -->
  <!-- <FormComponent /> -->
  <!-- <OptionsComponent /> -->
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 5px;
}

.navbar-nav .nav-link:hover {
  background-color: #555;
}

.dropdown-menu .dropdown-item {
  color: #000;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #555;
  color: #fff;
}
</style>
