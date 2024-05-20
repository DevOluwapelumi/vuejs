<template>
    <div class="container">
      <form
        action=""
        class="card col-md-6 col-sm-12 px-4 mt-5 mx-auto shadow"
        @submit.prevent="go"
      >
        <h4 class="text-center mt-3">Sign-up form</h4>
        <div class="form-group">
          <label for="name" class="my-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            class="form-control"
            v-model="v$.form.name.$model"
            name="name"
            id="name"
          />
          <div v-for="error in v$.form.name.$errors" :key="error">
            <span class="text-sm text-danger">{{ error.$message }}</span>
          </div>
        </div>
  
        <div class="form-group">
          <label for="email" class="my-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            class="form-control"
            v-model="v$.form.email.$model"
            name="email"
            id="email"
          />
          <div v-for="error in v$.form.email.$errors" :key="error">
            <span class="text-sm text-danger">{{ error.$message }}</span>
          </div>
        </div>
  
        <div class="form-group">
          <label for="password" class="my-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            class="form-control"
            v-model="v$.form.password.$model"
            name="password"
            id="password"
          />
          <div v-for="error in v$.form.password.$errors" :key="error">
            <span class="text-sm text-danger">{{ error.$message }}</span>
          </div>
        </div>
  
        <div class="text-center">
          <button type="submit" class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
        </div>
      </form>
    </div>
  </template>
  
  
  <script>
  import { ref } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { required, minLength, maxLength, email } from "@vuelidate/validators";
  
  export default {
    setup() {
      useVuelidate();
      //This is will assist us if we want to write composition method.
      // const myName = "Bam";
      // const myName = ref("Bam");
  
      // const myFunction = () => {
      //   console.log(myName);
      // };
  
      return { v$: useVuelidate() };
    },
    // const name = "Josh"  //You can not use const in optional Component and you can not create variables without using data.
    data() {
      //Data is a function the returns an object
      return {
        name: "Joshua",
        school: "SQI",
  
        //User's Inputs.
        form: {
          name: "",
          email: "",
          password: "",
        },
      };
    },
    //Options API...
    //   Validation Rules.
    validations() {
      return {
        form: {
          name: { required, min: minLength(5), max: maxLength(10) },
          email: { required, email },
          password: { required, min: minLength(5), max: maxLength(10) },
        },
      };
    },
  
    methods: {
      go() {
        console.log(this.v$);
      },
      // getMyWallet() {
      //   console.log(this.name);
      // },
    },
  };
  </script>
  
  <style></style>