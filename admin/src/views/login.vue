<script setup lang="ts">
import http from '@/utils/axios';

// const router = useRouter();
async function goRegister() {
  const res = await http.get('/app/image/swiper');
  console.log(res);
}
</script>

<template>
  <div>
    <hr />
    <h1>登录页面</h1>
    <p class="btn-p">
      <button class="btn" @click="goRegister">去注册</button>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.btn-p {
  border: 1px solid red;
  .btn {
    padding: 10px;
    border: 1px solid green;
  }
}
</style>
