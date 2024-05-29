import {createWebHistory, createRouter} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ToDo from '../views/ToDo.vue';
import Recipes from '../views/Recipes.vue';
import AboutView from '../views/About/AboutView.vue';
import UserView from '../views/UserView.vue';
import NotFound from '../views/NotFound.vue';
import AboutUs from '../views/About/AboutUs.vue';
import CompanyInfo from '../views/About/CompanyInfo.vue';

const routes = [
    {path: '/', name:'home', component: HomeView},
    {path: '/todo', name:'todo', component: ToDo},
    {path: '/recipes', name:'recipes', component: Recipes},
    {path: '/about', 
        name:'about', 
        component: AboutView,
        children:[
            {path: 'about-us', name:'uss', component: AboutUs},
            {path: 'our-company', name:'company', component: CompanyInfo},
        ]},
    {path: '/user/:name', name:'user', component: UserView},
    {path: '/:pathMatch(.*)*', component: NotFound},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;