<!--模糊查询组件-->
<template>
  <div class="SearchWrap">
    <el-form
      :model="ruleForm"
      label-position="left"
      @submit.prevent
      ref="searchFormRef"
      label-width="auto"
      class="search-el-form"
    >
      <template v-for="(item, index) in searchLabel" :key="index">
        <!--自定义-->
        <slot v-if="item.type === 'slot'" :name="item.prop"></slot>
        <!-- 日期选择器 -->
        <el-form-item v-else-if="item.type === 'date'" :label="item.title">
          <el-date-picker
            v-model="ruleForm[item.prop]"
            :type="item.dateType || 'date'"
            :value-format="item.dateFormat || 'yyyy-MM-dd'"
            :placeholder="item.placeholder || '请选择日期'"
          />
        </el-form-item>
        <!-- 起始日期选择器 -->
        <el-form-item v-else-if="item.type === 'daterange'" :label="item.title">
          <el-date-picker
            v-model="ruleForm[item.prop]"
            :type="item.dateType || 'daterange'"
            range-separator="-"
            :value-format="item.dateFormat || 'yyyy-MM-dd HH:mm:ss'"
            :start-placeholder="item.startPlaceholder || '开始日期'"
            :end-placeholder="item.endPlaceholder || '结束日期'"
          />
        </el-form-item>
        <!-- 下拉选择框 -->
        <el-form-item v-else-if="item.type === 'select'" :label="item.title">
          <el-select
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder"
          >
            <el-option
              v-for="val in item.data"
              :key="val.value"
              :label="val.label"
              :value="val.value"
            />
          </el-select>
        </el-form-item>
        <!-- 输入框 -->
        <el-form-item v-else-if="item.type === 'input'" :label="item.title">
          <el-input
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder"
          />
        </el-form-item>
      </template>
      <div class="btn_box">
        <el-button type="primary" @click="handleSearch()">查询</el-button>
        <el-button plain style="margin-left: 10px" @click="resetSearchForm()"
          >重置</el-button
        >
      </div>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from '@vue/reactivity';
import { searchLabelListType, searchFormType } from './type';

interface SearchPropsType {
  searchLabel: searchLabelListType[];
  form: searchFormType;
}
const props = defineProps<SearchPropsType>();
const emit = defineEmits(['handleSearch', 'resetForm', 'update:form']);
const ruleForm: any = computed({
  get: () => props.form,
  set: (val) => emit('update:form', val),
});
// 查询
const handleSearch = () => {
  emit('handleSearch');
};
// 重置
const resetSearchForm = () => {
  props.searchLabel.forEach((item: searchLabelListType) => {
    ruleForm.value[item.prop] = '';
  });
  if (ruleForm.value?.pageIndex) ruleForm.value.pageIndex = 1;
  emit('handleSearch');
};
// 暴露 ref
const searchFormRef = ref();
defineExpose({ searchFormRef });
</script>

<style lang="scss" scoped>
.SearchWrap {
  background-color: #fff;
  padding: 10px;
}
.btn_box {
  margin: 5px 10px 0 0;
}
:deep(.el-form) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  .el-form-item {
    display: flex;
    margin: 0 0;
    padding: 5px 20px 5px 0;
    .el-input__inner {
      padding-right: 15px;
      height: 34px;
      line-height: 34px;
    }
    .el-form-item__label-wrap {
      margin-right: 5px !important;
    }
  }
}
:deep(.el-input--suffix) {
  .el-input__inner {
    padding-right: 15px;
  }
}
</style>
