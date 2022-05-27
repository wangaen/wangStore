<template>
  <div class="DialogWrap">
    <el-dialog
      v-model="visible"
      :width="width"
      :before-close="handleClose"
      :top="marginTop"
    >
      <!-- 标题插糟 -->
      <template #title>
        <div class="title">{{ title }}</div>
        <!-- 标题下方自定义 -->
        <slot name="dialogTitle"> </slot>
      </template>
      <!-- body插糟 -->
      <slot name="dialogBody"></slot>
      <!-- 底部插糟 -->
      <template #footer>
        <slot name="dialogFooter"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core';

defineProps({
  width: {
    type: String as PropType<string>,
    default: '50%',
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  marginTop: {
    type: String as PropType<string>,
    default: '',
  },
});

const visible = true;
const emit = defineEmits(['handleClose']);
const handleClose = () => emit('handleClose');
</script>

<style scoped lang="scss">
.DialogWrap {
  :deep(.el-dialog) {
    .el-dialog__header {
      border-width: 0px;
      padding: 8px 20px;
    }
    .el-dialog__body {
      padding: 10px 20px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin: 0;
    }
    .el-dialog__footer {
      border-width: 0px;
      padding: 10px 20px;
    }
    .el-dialog__headerbtn {
      top: -5px;
    }
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }
}
</style>
