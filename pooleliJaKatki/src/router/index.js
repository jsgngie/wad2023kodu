import { createRouter, createWebHistory } from 'vue-router';

import SignupComponent from '../components/SignupComponent.vue';

const routes = [
  { path: '/'},
  { path: '/signup', component: SignupComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
