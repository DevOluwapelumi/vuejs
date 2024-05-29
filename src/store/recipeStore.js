import { defineStore } from "pinia";
import axios from 'axios'
const url = "https://dummyjson.com/recipes"


//  store -
//  getters -
//  actions -

export const useRecipeStore = defineStore('recipeStore',{
    store:()=> {
        return{
            recipes:[]
        }
    },
    getters:{
        todoCount:(state)=>state.todos.length,
        completedTodos(state){
            return state.todos.filter((todo)=>todo.completed)
        }
    },

    actions:{
        getAllRecipes(){
            axios.get(url)
            .then((response)=>{
                console.log(response);
                this.recipes = response.data.recipes
            })
        }
    },
    persist:true

})