import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入全局 CSS
import '@/assets/css/global.scss';

// 导入 element-plus-icon
import elementPlusIcon from './components/element-plus-icon';

// 引入Elmessage和ElLoading的css样式文件
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';

const app = createApp(App);
app.use(router).use(store).use(elementPlusIcon).mount('#app');
