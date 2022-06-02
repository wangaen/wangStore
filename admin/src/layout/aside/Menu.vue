<template>
  <div class="Menu">
    <Logo />
    <el-menu
      :default-active="defaultActive"
      :collapse="common.collapsed"
      text-color="#fff"
      active-text-color="#fff"
      background-color="#192742"
      @select="select"
    >
      <template v-for="(item, i) in menuList" :key="i">
        <!-- 有子菜单 -->
        <el-sub-menu :index="item.name" v-if="item?.meta?.isMulti">
          <template #title>
            <Icon :name="item.meta.icon" class="menu-icon" />
            <span>{{ item?.meta?.breadcrumbName }}</span>
          </template>
          <template v-for="(value, j) in item.children" :key="j">
            <el-menu-item
              :index="value.name"
              class="menu-item-box"
              v-if="value?.meta?.isMenu"
            >
              <span>{{ value?.meta?.breadcrumbName }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 单独菜单 -->
        <el-menu-item :index="item.name" v-else>
          <Icon :name="item?.meta?.icon" class="menu-icon" />
          <template #title>{{ item?.meta?.breadcrumbName }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import common from '@/store/modules/common';
import router from '@/router';
import Icon from '@/components/common/Icon.vue';
import Logo from './Logo.vue';

const route = useRoute();
const defaultActive = computed(() => {
  const { name } = route;
  const { meta } = route;
  const { matched } = route;
  return meta.isMenu ? name : matched[matched.length - 2].name;
});

const menuList = computed(() => router.options.routes[0].children);

// 点击菜单项
const vueRouter = useRouter();
const select = (name: string) => {
  vueRouter.push({ name });
};
</script>

<style lang="scss" scoped>
// 子菜单对齐
.menu-item-box {
  padding-left: 55px !important;
}
.Menu {
  overflow: hidden;
  height: calc(100vh);
  .el-menu {
    height: calc(100vh - 64px);
    border-right: none;
    .el-submenu__title {
      span {
        font-size: 14px;
      }
    }
  }
  :deep(.is-active) {
    background-color: #377ef8 !important;
    color: #ffffff;
  }
  :deep(.el-menu--collapse .el-sub-menu.is-active .el-sub-menu__title) {
    color: #377ef8 !important;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 210px;
    .menu-icon {
      margin-right: 10px !important;
    }
  }
}
.menu-icon {
  width: 20px;
  height: 20px;
}
</style>
