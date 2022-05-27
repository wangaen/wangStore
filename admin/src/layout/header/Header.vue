<template>
  <div class="Header">
    <div class="left_part">
      <a href="javascript:;" @click="toggleCollapsed">
        <el-icon :size="20">
          <expand v-if="collapsed" />
          <fold v-else />
        </el-icon>
      </a>
      <Breadcrumb class="breadcrumb-name" />
    </div>
    <div class="right_part">
      <el-dropdown>
        <span class="el-dropdown-link user-info-area">
          <Icon name="icon-001-man" class="icon-box"></Icon>
          <span class="user-name">system</span>
          <el-icon class="icon-down"><arrow-down-bold /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              @click="clickMenuItem(item)"
              v-for="(item, index) in menuOptions"
              :key="index"
              >{{ item.label }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { ElMessage } from 'element-plus/es';
import Breadcrumb from './Breadcrumb.vue';
import common from '@/store/modules/common';
import Icon from '@/components/common/Icon.vue';

const menuOptions = [
  // {
  //   label: '个人中心',
  //   routeName: 'UserInfo',
  //   icon: 'user',
  // },
  {
    label: '退出登录',
    routeName: 'Logout',
    icon: 'poweroff',
  },
];
const collapsed = computed({
  get() {
    return common.collapsed;
  },
  set(val) {
    common.toggleCollapsed(val);
    sessionStorage.setItem('collapsed', JSON.stringify(val));
  },
});
const router = useRouter();
const clickMenuItem = (item: { routeName: string }) => {
  if (item.routeName === 'Logout') {
    ElMessage.success('已成功退出');
    router.push({ name: 'Login' });
  }
};

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>
<style lang="scss" scoped>
.Header {
  height: 64px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e7ed;
  z-index: 1000;
  .left_part {
    display: flex;
    align-items: center;
    a {
      margin-right: 10px;
    }
  }
  .user-name {
    vertical-align: 5px;
    margin-right: 5px;
  }
  .user-info-area {
    cursor: pointer;
  }
  .icon-box {
    width: 20px;
    height: 20px;
    background-color: #eee;
    border-radius: 10px;
  }
  .icon-down {
    vertical-align: 2px;
  }
}
</style>
<style>
.el-popper {
  z-index: 3000 !important;
}
</style>
