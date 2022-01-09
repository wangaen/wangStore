import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

// 按需要引入 element-plus
import elementComponents from "./components/elementComponents";

const app = createApp(App);
//注册组件
app.use(elementComponents);
app.use(router);
app.mount("#app");
