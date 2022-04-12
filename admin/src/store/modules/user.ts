import { defineStore } from 'pinia';

const userStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三',
      age: 22,
      sex: '男',
    };
  },
  getters: {
    getUserInfo(state) {
      return state.name + state.age + state.sex;
    },
  },
  actions: {
    updateName(name: string) {
      console.log(this);
      this.name = name;
    },
  },
});

export default userStore();
