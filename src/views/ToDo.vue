<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Todo List</h3>
            </div>
            <div class="todo-count p-3 mb-4">
                Count: <span class="count-value">{{ store.todoCount }}</span>
                <hr>
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Todo Item</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(todo, index) in store.todos">
                            <th scope="row">{{ todo.id }}</th>
                            <td>{{ todo.todo }}</td>
                            <td>
                                <span :class="{'badge badge-success': todo.completed, 'badge badge-warning': !todo.completed}">
                                    {{ todo.completed ? 'Completed' : 'Pending' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToDoStore } from '../store/todoStore.js'
import { onMounted } from 'vue';

const store = useToDoStore();
console.log(store);

onMounted(() => {
    store.getAllTodos();
});
</script>

<style scoped>
.container {
    max-width: 800px;
}

.card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #007bff;
    color: white;
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.todo-count {
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.count-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
}

.table-hover tbody tr:hover {
    background-color: #f8f9fa;
}

.badge-success {
    background-color: #28a745;
}

.badge-warning {
    background-color: #ffc107;
}
</style>
