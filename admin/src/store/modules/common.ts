import { defineStore } from 'pinia';

const commonStore = defineStore({
  id: 'common',
  state: () => {
    return {
      // 是否水平折叠收起菜单
      collapsed: false,
      isAside: true,
    };
  },
  getters: {},
  actions: {
    toggleCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
    },
    changeIsAside(status: boolean) {
      this.isAside = status;
    },
  },
});

export default commonStore();
