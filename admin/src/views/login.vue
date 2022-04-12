<script setup lang="ts">
import { useRouter } from 'vue-router';
import userStore from '@/store/modules/user';

const router = useRouter();
function goRegister() {
  router.push('/register');
}
</script>

<template>
  <div>
    <p>姓名：{{ userStore.name }}</p>
    <p>年龄：{{ userStore.age }}</p>
    <p>性别：{{ userStore.sex }}</p>
    <p>用户信息：{{ userStore.getUserInfo }}</p>
    <p>
      <button @click="userStore.updateName('李四')">修改用户信息</button>
    </p>
    <hr />
    <h1>登录页面</h1>
    <p>
      <button @click="goRegister">去注册</button>
    </p>
  </div>
</template>
