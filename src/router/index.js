import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/loginForm.vue';

const routes = [
  { path: '/', name: 'login', component: Login }, // Route mặc định vào Login
  { path: '/home', name: 'home', component: Home } // Route cho Home
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
