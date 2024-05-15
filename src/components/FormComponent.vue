<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="shadow-lg p-4 bg-white rounded">
            <form class="col-12" @submit.prevent="signup">
                <h3 class="text-center mb-4">Sign Up</h3>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input class="form-control" placeholder="Pelumi" v-model="name">
                </div>
                <div class="mb-3">
                    <label class="form-label">Gender</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" value="Male" v-model="gender" id="male">
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" value="Female" v-model="gender" id="female">
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Skills</label><br>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="React Js" v-model="skill" id="reactjs">
                        <label class="form-check-label" for="reactjs">React JS</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="Vue Js" v-model="skill" id="vuejs">
                        <label class="form-check-label" for="vuejs">Vue JS</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="Laravel" v-model="skill" id="laravel">
                        <label class="form-check-label" for="laravel">Laravel</label>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Occupation</label>
                    <select class="form-select" v-model="occupation">
                        <option value="Student">Student</option>
                        <option value="Trader">Trader</option>
                        <option value="Civil Servant">Civil Servant</option>
                        <option value="Unemployed">Unemployed</option>
                    </select>
                </div>
                <div class="text-center">
                    <button class="btn btn-md btn-dark text-light px-4">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref("");
const gender = ref("");
const skill = ref([]);
const occupation = ref("");
const users = ref([]);

const signup = () => {
    const userObject = {
        name: name.value,
        gender: gender.value,
        skill: skill.value,
        occupation: occupation.value
    };
    users.value.push(userObject);
    console.log(users.value);
    localStorage.setItem('user', JSON.stringify(users.value));
};
</script>

<style scoped>
.shadow-lg {
    max-width: 500px;
    border-radius: 10px;
}
.vh-100 {
    height: 100vh;
}
</style>
