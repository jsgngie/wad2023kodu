import { createRouter, createWebHistory } from 'vue-router';

import SignupComponent from '../components/SignupComponent.vue';
import PostsComponent from '../components/PostsComponent.vue';

const routes = [
  { path: '/', component: PostsComponent },
  { path: '/signup', component: SignupComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
