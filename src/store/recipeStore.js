import { defineStore } from "pinia";
import axios from 'axios'
const url = "https://dummyjson.com/recipes"

export const useRecipeStore = defineStore('recipeStore',{
    state:()=> {
        return{
            recipes:[]
        }
    },
    getters:{
    },

    actions:{
        getAllRecipes(){
            axios.get(url)
            .then((response)=>{
                console.log(response);
                this.recipes = response.data.recipes
            })
        }
    }
})