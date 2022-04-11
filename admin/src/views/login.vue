<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function goRegister() {
  router.push('/register');
}
</script>

<template>
  <div>
    <h1>登录页面</h1>
    <p>
      <button @click="goRegister">去注册</button>
    </p>
  </div>
</template>
