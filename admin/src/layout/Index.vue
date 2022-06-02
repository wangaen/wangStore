<template>
  <div class="index">
    <el-container class="index-container">
      <transition :name="animationName">
        <el-aside v-show="common.isAside"> <Menu /></el-aside>
      </transition>
      <el-container>
        <el-header><Header :appWidth="appWidth" /></el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
      <div
        v-show="!common.collapsed && isMask"
        class="index-moask"
        @click="maskChange"
      ></div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import Header from '@/layout/header/Header.vue';
import Menu from '@/layout/aside/Menu.vue';
import { isMoblie } from '@/utils/index';
import common from '@/store/modules/common';

const isMask = ref(false);
const animationName = ref('');
const appWidth = ref(window.innerWidth);

const resizeEventFun = ({ target }: any) => {
  appWidth.value = target.innerWidth;
  if (appWidth.value <= 768) {
    common.toggleCollapsed(true);
    common.changeIsAside(false);
    isMask.value = true;
  }
  if (appWidth.value > 768 && appWidth.value <= 1000) {
    common.toggleCollapsed(true);
    common.changeIsAside(true);
    isMask.value = false;
  }
  if (appWidth.value > 1000) {
    common.toggleCollapsed(false);
    common.changeIsAside(true);
    isMask.value = false;
  }
};

onMounted(() => {
  if (isMoblie()) {
    common.toggleCollapsed(true);
    common.changeIsAside(false);
    isMask.value = true;
  } else {
    resizeEventFun({ target: { innerWidth: appWidth.value } });
    window.addEventListener('resize', resizeEventFun);
  }
});

nextTick(() => {
  animationName.value = 'slide-fade';
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeEventFun);
});

const maskChange = () => {
  common.toggleCollapsed(true);
  common.changeIsAside(false);
};
</script>
<style lang="scss" scoped>
.index {
  overflow: hidden !important;
  height: 100vh;
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
    height: calc(100vh - 64px);
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.index-container {
  position: relative;
}
.index-moask {
  height: 100vh;
  width: 100vw;
  background-color: #000;
  position: absolute;
  opacity: 0.3;
  z-index: 990;
}
@media screen and (max-width: 768px) {
  .el-aside {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
}

/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-210px);
}
</style>
