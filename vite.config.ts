import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import importElementPlus from 'vite-plugin-element-plus';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importElementPlus({
      useSource: false,
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
      extendRoute(route) {
        const { meta: oldMeta = {}, path = '' } = route || {};

        const meta = {
          ...oldMeta,
        };

        if (!meta.layout) {
          if (path.startsWith('/auth')) {
            meta.layout = 'auth';
          } else if (path.startsWith('/general')) {
            meta.layout = 'general';
          }
        }

        return {
          ...route,
          meta,
        };
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
});
