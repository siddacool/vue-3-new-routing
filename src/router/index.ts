import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const pages = import.meta.globEager('../pages/*.vue');

const routes: Array<RouteRecordRaw> = Object.entries(pages).map(([nameRaw]) => {
  const name = nameRaw.replace('../pages/', '').replace('.vue', '');
  const path = name === 'master' ? '/' : `/${name}`;

  return {
    name,
    path,
    component: () => import(`../pages/${name}.vue`),
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
