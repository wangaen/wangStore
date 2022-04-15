<script setup lang="ts">
import request from '@/utils/axios';

// const router = useRouter();
async function goRegister() {
  const res = await request.instance.get('/app/image/swiper');
  console.log(res);
}
</script>

<template>
  <div>
    <hr />
    <h1>登录页面</h1>
    <p>
      <button @click="goRegister">去注册</button>
    </p>
  </div>
</template>
