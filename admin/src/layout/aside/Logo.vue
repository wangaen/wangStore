<template>
  <div class="Logo">
    <div class="logo-bg" :class="[common.collapsed ? 'mini' : 'default']"></div>
  </div>
</template>
<script lang="ts" setup>
import common from '@/store/modules/common';
</script>
<style lang="scss" scoped>
.Logo {
  height: 65px;
  background-color: #192742 !important;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  box-sizing: border-box;
  .logo-bg {
    height: 65px;
    width: 100%;
  }
  .mini {
    background: url(@/assets/images/mini-logo.png) no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
  }
  .default {
    background: url(@/assets/images/logo.png) no-repeat;
    background-size: cover;
  }
}
</style>
