import { defineStore } from "pinia";
import axios from 'axios'

//  store -
//  getters -
//  actions -

export const useToDoStore = defineStore('todoStore',{
    store:()=> {
        return{
            todos:[]
        }
    },
    getters:{
        todoCount:(state)=>state.todos.length,
        completedTodos(state){
            return state.todos.filter((todo)=>todo.completed)
        }
    },

    actions:{
        getAllTodos(){
            axios.get('https://dummyjson.com/todos')
            .then((response)=>{
                console.log(response.data.todos);
                this.todos = response.data.todos
            })
        }
    }

})