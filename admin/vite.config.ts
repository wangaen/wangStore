import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.cn/config/#scaffolding-your-first-vite-project
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  root: process.cwd(), // 默认： process.cwd()。	项目根目录（index.html 文件所在的位置）
  base: './',
  server: {
    host: '0.0.0.0',
    port: 8686,
    open: true, // 启动服务时直接打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '^/api': {
        target: 'http://192.168.1.188:3080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    // 去除打包大小超过500kb的警告
    chunkSizeWarningLimit: 1000,
  },
});
