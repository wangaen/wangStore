import { defineConfig, UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // console.log("当前环境：", command, mode);
  // const { VITE_BASE_API, VITE_DROP_CONSOLE } = loadEnv(mode, process.cwd());
  return {
    base: "./",
    // resolve: {
    //   alias: [
    //     {
    //       find: "@",
    //       replacement: resolve(__dirname, "./src"),
    //     },
    //   ],
    // },
    // server: {
    //   port: 8088,
    //   proxy: {
    //     "": {
    //       target: VITE_BASE_API,
    //       changeOrigin: true,
    //     },
    //   },
    // },
    // build: {
    //   target: "es2015",
    //   terserOptions: {
    //     compress: {
    //       keep_infinity: true,
    //       drop_console: Boolean(VITE_DROP_CONSOLE),
    //     },
    //   },
    //   brotliSize: false,
    //   chunkSizeWarningLimit: 1000,
    // },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  };
});
