// element组件 按需导入
import { App } from "vue";

// 引入图标
import { Edit, Search, Camera } from "@element-plus/icons-vue";

export const components = [Edit, Search, Camera];

//按需导出图标组件
export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component);
  }
};
