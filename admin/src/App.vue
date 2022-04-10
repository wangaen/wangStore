<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function goRegister() {
  router.push({ name: 'Login' });
  console.log('register', router);
}
function goLogin() {
  console.log('login');
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>这是主页。。。。</h1>
    <h1>这是主页。。。。</h1>
    <p>
      <button @click="goLogin">去登录</button>
      <button @click="goRegister">去注册</button>
    </p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
