import { defineStore } from "pinia";
import axios from 'axios';
const url = "https://dummyjson.com/recipes";

export const useRecipeStore = defineStore('recipeStore', {
    state: () => {
        return {
            recipes: [],
            searchResults: []
        };
    },
    getters: {
        filteredRecipes(state) {
            return state.searchResults.length ? state.searchResults : state.recipes;
        }
    },
    actions: {
        async getAllRecipes() {
            try {
                const response = await axios.get(url);
                this.recipes = response.data.recipes;
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        },
        async searchRecipes(query) {
            try {
                const response = await axios.get(`${url}/search?q=${query}`);
                this.searchResults = response.data.recipes;
            } catch (error) {
                console.error('Error searching recipes:', error);
            }
        }
    }
});
