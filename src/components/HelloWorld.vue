<script setup>
import {ref, computed} from 'vue';
  const name = "Instr. Miss Janet";
  const num = ref(5);
  const checkDay =ref(true)
  const check =ref(true)
  const day =ref('Tuesday')

  const students = [
    {id:1, name: "Favour", paid: false},
    {id:2, name: "Pelumi", paid: true},
    {id:3, name: "Oyin", paid: false},
    {id:4, name: "Joshua", paid: true},
    {id:5, name: "James", paid: false},
    ]

  const togglePaid = (id) => {
    const student = students.find((student) => student.id === id);
    student.paid = !student.paid;
    console.log(student.paid);  
  };

</script>





<template>
 <h4>Hello Oluwapelumi, Welcome to Vue 3</h4>

 <p>{{name}}</p>
 <p>{{num}}</p>
 <button v-on:click="num++">Increase Num</button>

  <div v-for="student in students" v-bind:key="student.id">
  <p :id="student.paid ? 'paid' : 'notpaid'" class="btn px-2 py-1" @click="togglePaid(student.id)">{{student.name}}</p>
  </div>

  <div v-if="checkDay">Today is Wednesday</div>
  <div v-if="check">Today is Tuesday</div>
  <div v-else>Today is not Tuesday</div>
</template>





<style scoped> 
  #paid {
      background-color: green;
      }
  #notpaid {
      background-color: pink;
      text: red;
      }
      
</style>