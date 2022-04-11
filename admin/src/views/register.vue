<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function goLogin() {
  router.push('/login');
}
</script>

<template>
  <div>
    <h1>注册页面</h1>
    <p>
      <button @click="goLogin">去登录</button>
    </p>
  </div>
</template>
