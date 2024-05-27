<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Todo List</h3>
            </div>
            <div class="todo-count p-3 mb-4 d-flex justify-content-between align-items-center">
                <div>
                    Total Todo Count: <span class="count-value">{{ filteredTodos.length }}</span>
                </div>
                <div>
                    <select v-model="filter" @change="applyFilter" class="form-select">
                        <option value="all">Display All</option>
                        <option value="completed">Display Completed</option>
                        <option value="pending">Display Pending</option>
                    </select>
                </div>
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
                        <tr :key="index" v-for="(todo, index) in filteredTodos">
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
import { ref, computed, onMounted } from 'vue';
import { useToDoStore } from '../store/todoStore.js';

const store = useToDoStore();
const filter = ref('all');

const filteredTodos = computed(() => {
    if (filter.value === 'completed') {
        return store.todos.filter(todo => todo.completed);
    } else if (filter.value === 'pending') {
        return store.todos.filter(todo => !todo.completed);
    } else {
        return store.todos;
    }
});

const applyFilter = () => {
    // Logic to apply filter, currently handled by computed property.
};

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

.form-select {
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
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
