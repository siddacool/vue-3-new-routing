import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from '~/App.vue';

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(ElementPlus);
app.mount('#app');
