<template>
  <el-table
    :data="tableData"
    v-loading="loading"
    tooltip-effect="dark"
    style="width: 100%"
    class="TableWrap"
    ref="multipleTable"
    @selection-change="handleSelectionChange"
    @row-click="rowClick"
    @select="select"
  >
    <template v-for="(item, index) in columns" :key="index">
      <!-- 自定义（操作列） -->
      <slot v-if="item.slot" :name="item.slot"></slot>
      <!-- switch 开关 -->
      <el-table-column
        v-else-if="item.type === 'switch'"
        :label="item.title"
        :width="item.width"
        show-overflow-tooltip
      >
        <template v-slot="{ row }">
          <el-switch
            v-model="row[item.key]"
            disabled
            validate-event
            :active-value="item.data.activeValue"
            :inactive-value="item.data.inactiveValue"
            @click="switchChange(row)"
          />
        </template>
      </el-table-column>
      <!-- index,selection,等... -->
      <el-table-column
        :type="item.type"
        :label="item.title"
        :width="item.width"
        header-align="center"
        align="center"
        show-overflow-tooltip
        :props="item.key"
        v-else
      >
        <!-- 自定义渲染函数渲染 -->
        <template #default="scope" v-if="item.customRender">
          <div class="custom-status-row">
            <div
              v-if="item.statusColor"
              class="status-logo"
              :style="{ 'background-color': item.statusColor(scope.row) }"
            ></div>
            <div style="white-space: pre">{{ item.customRender(scope) }}</div>
          </div>
        </template>
        <template
          #default="scope"
          v-else-if="item.type !== 'selection' && item.type !== 'index'"
        >
          <span style="white-space: nowrap">{{ scope.row[item.key] }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { tableLabelListType } from './type';

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array as PropType<tableLabelListType[]>,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  // 当 type = selection, 是否是单选，默认false,即多选
  isSingleSelect: {
    type: Boolean,
    default: false,
  },
  // 如果是单选的，表头行的单选框更替的文字内容，默认：选择
  headerRowCheckBoxText: {
    type: String,
    default: '选择',
  },
  // 是否开启点击表格行从而选中该行的单选框， 默认 关闭
  isOpenClickSelectRow: {
    type: Boolean,
    default: false,
  },
});

const selectValue = ref([]);
const multipleTable = ref();
const emit = defineEmits(['handleSelectionChange', 'switchChange']);

// checkbox 发生变化
const handleSelectionChange = (val: any) => {
  selectValue.value = val;
  if (!props.isSingleSelect) {
    emit('handleSelectionChange', val);
  }
};
// 当用户手动勾选数据行的 Checkbox 时触发的事件
const select = (selection: any, row: any) => {
  if (props.isSingleSelect) {
    multipleTable.value.clearSelection();
    multipleTable.value.toggleRowSelection(row, selection.length !== 0);
    emit('handleSelectionChange', selection.length === 0 ? [] : row);
  }
};
// 当某一行被点击时会触发该事件
const rowClick = (row: any) => {
  const selectData = selectValue.value;
  if (props.isSingleSelect) {
    emit(
      'handleSelectionChange',
      selectData.some((item) => JSON.stringify(item) === JSON.stringify(row))
        ? []
        : row,
    );
    multipleTable.value.clearSelection();
  }
  if (props.isOpenClickSelectRow) {
    if (!selectData.length) {
      multipleTable.value.toggleRowSelection(row, true);
    } else {
      multipleTable.value.toggleRowSelection(
        row,
        !selectData.some(
          (item) => JSON.stringify(item) === JSON.stringify(row),
        ),
      );
    }
  }
};
const switchChange = (row: any) => {
  emit('switchChange', row);
};
</script>
<style lang="scss" scoped>
.TableWrap {
  :deep(.table_inner_btn) {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
  .custom-status-row {
    display: flex;
    justify-content: center;
    align-items: center;
    .status-logo {
      width: 10px;
      margin-right: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
  :deep(.el-switch.is-disabled) {
    opacity: 1;
    .el-switch__core {
      cursor: pointer;
    }
  }
  :deep(th) {
    background-color: #f6f6f6 !important;
    color: #606266;
  }
}
</style>
