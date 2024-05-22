import {createWebHistory, createRouter} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UserView from '../views/UserView.vue';

const routes = [
    {path: '/', name:'home', component: HomeView},
    {path: '/about', name:'about', component: AboutView},
    {path: '/user/:name', name:'user', component: UserView},
    {path: '/:pathMatch(.*)*', component: UserView},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;