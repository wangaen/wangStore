<template>
  <div class="index">
    <el-container>
      <el-aside> <Menu /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
        </el-main>
        <Copyright />
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/layout/header/Header.vue';
import Menu from '@/layout/aside/Menu.vue';
import Copyright from '@/layout/Copyright.vue';
</script>
<style lang="scss" scoped>
.index {
  overflow: hidden !important;
  max-height: 100vh;
  min-width: 1200px;
  .el-aside {
    width: auto !important;
  }
  .el-header {
    height: 64px !important;
    padding: 0;
    z-index: 1;
  }
  .el-main {
    background-color: #eef0f2;
    padding: 10px !important;
    max-height: calc(100vh - 36px - 64px);
    z-index: 1;
    overflow: scroll;
  }
}
</style>
