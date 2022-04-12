import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 导入 element-plus-icon
import elementPlusIcon from './components/element-plus-icon';

const app = createApp(App);
app.use(router).use(store).use(elementPlusIcon).mount('#app');
