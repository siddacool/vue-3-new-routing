import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const pages = import.meta.globEager('../pages/*.vue');

const routes: Array<RouteRecordRaw> = Object.entries(pages).map(
  ([nameRaw, module]) => {
    const name = nameRaw.replace('../pages/', '').replace('.vue', '');
    const path = name === 'master' ? '/' : `/${name}`;

    return {
      name,
      path,
      component: module.default,
    };
  },
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
