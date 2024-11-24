import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/loginForm.vue';
import register from '@/components/registerForm.vue';
// import SignUpForm from '@/components/SignUpForm.vue';

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home },
  { path: '/register', name: 'register', component: register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
