// element组件 按需导入
import { App } from 'vue';

// 需要的用到的图标，就必须要引入
import {
  Edit,
  Search,
  Camera,
  Share,
  Loading,
  Delete,
  Expand,
  Fold,
  UserFilled,
  Monitor,
  ArrowDownBold,
  Plus,
} from '@element-plus/icons-vue';

const components = [
  Edit,
  Search,
  Camera,
  Share,
  Loading,
  Delete,
  Expand,
  Fold,
  UserFilled,
  Monitor,
  ArrowDownBold,
  Plus,
];

// 按需导出图标组件
export default (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
