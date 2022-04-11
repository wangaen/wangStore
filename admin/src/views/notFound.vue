<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goLogin = () => {
  router.push('/login');
};
</script>

<template>
  <h1>404页面</h1>
  <button @click="goLogin">返回登录页</button>
</template>
