import './assets/main.css';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// createApp(App).mount('#app')

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')

// createApp(App).use(router).mount('#app')
