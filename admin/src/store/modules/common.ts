import { defineStore } from 'pinia';

const commonStore = defineStore({
  id: 'common',
  state: () => {
    return {
      popTitle:
        '您确定删除所选数据吗？删除成功后，相关联数据将会一同删除，且无法恢复。',
      keepAliveComponents: ['Home'],
      allPermission: [],
      myPermissionIds: [],
      // 是否水平折叠收起菜单
      collapsed: JSON.parse(
        sessionStorage.getItem('collapsed') || JSON.stringify(false),
      ),
    };
  },
  getters: {
    getAllPermission(state: any) {
      return state.allPermission;
    },
    getMyPermissionIds(state: any) {
      return state.myPermissionIds;
    },
  },
  actions: {
    keepAlive(component: string) {
      if (!component) return;
      !this.keepAliveComponents.includes(component) &&
        this.keepAliveComponents.push(component);
    },
    noKeepAlive(component: string) {
      const index = this.keepAliveComponents.indexOf(component);
      index !== -1 && this.keepAliveComponents.splice(index, 1);
    },
    closeAllKeepAlive() {
      this.keepAliveComponents = ['Home'];
    },
    closeOtherKeepAlive(component: string) {
      this.keepAliveComponents = ['Home', component];
    },
    toggleCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
      sessionStorage.setItem('collapsed', JSON.stringify(collapsed));
    },
    setAllPermission(allPermission: any[]) {
      this.allPermission = allPermission;
    },
    setMyPermissionIds(myPermissionIds: string[]) {
      this.myPermissionIds = myPermissionIds;
    },
  },
});

export default commonStore();
