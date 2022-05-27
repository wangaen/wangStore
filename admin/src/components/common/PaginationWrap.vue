<template>
  <div class="Pagination">
    <el-pagination
      small
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total , prev , pager , next , sizes"
      :total="count"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  pageIndex: {
    type: Number,
    default: 1,
  },
  count: {
    type: Number,
    default: 10,
  },
  pageSize: {
    type: Number,
    default: 1,
  },
});

const pageSizes = [10, 20, 30, 40, 50, 100];
const emit = defineEmits(['update:pageSize', 'update:pageIndex', 'refresh']);

const handleSizeChange = (val: number) => {
  emit('update:pageSize', val);
  emit('refresh');
};
const handleCurrentChange = (val: number) => {
  emit('update:pageIndex', val);
  emit('refresh');
};
</script>
<style lang="scss" scoped>
.Pagination {
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  padding: 10px;
  :deep(.el-pager) {
    li {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  :deep(.el-pagination__sizes) {
    margin-left: 16px !important;
  }
}
</style>
