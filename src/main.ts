import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from '~/App.vue';
import { ElMenu, ElInput } from 'element-plus';
const elemElement = [ElMenu, ElInput];

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

elemElement.forEach((elm) => {
  app.use(elm);
});
app.mount('#app');
