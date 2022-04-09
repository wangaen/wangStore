import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.cn/config/#scaffolding-your-first-vite-project
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  root: process.cwd(), // 默认： process.cwd()。	项目根目录（index.html 文件所在的位置）
  base: './',
  server: {
    host: '0.0.0.0',
    port: 6868,
    open: true, // 启动服务时直接打开浏览器
    cors: true, // 允许跨域
  },
  build: {
    outDir: 'ws_admin_dist',
    // 去除打包大小超过500kb的警告
    chunkSizeWarningLimit: 1000,
  },
});
