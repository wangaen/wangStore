<!--表单组件-->
<template>
  <div v-loading="loading" class="ruleForm_box">
    <el-form
      ref="formRef"
      :model="ruleForm"
      :rules="rules"
      :label-width="labelWidth"
      :style="{ width: formWidth }"
      @submit.prevent="() => false"
    >
      <div
        v-for="(item, index) in labelList"
        :key="index"
        class="form-item-box"
      >
        <!-- 输入框 或 文本框 -->
        <template v-if="item.type === 'input' || item.type === 'textarea'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-input
              v-model="ruleForm[item.prop]"
              :type="item.inputType || item.type || ''"
              :maxlength="item.maxlength"
              :show-word-limit="!!item.maxlength"
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              :autosize="item.autosize || { minRows: 2, maxRows: 4 }"
            />
          </el-form-item>
        </template>
        <!-- 下拉选择框 -->
        <template v-else-if="item.type === 'select'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-select
              v-model="ruleForm[item.prop]"
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
              <el-option
                v-for="(val, index) in item.data"
                :key="index"
                :label="val.label"
                :value="val.value"
              />
            </el-select>
          </el-form-item>
        </template>
        <!-- 日期选择器 -->
        <template v-else-if="item.type === 'date'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-date-picker
              v-model="ruleForm[item.prop]"
              type="date"
              :placeholder="item.placeholder || '选择日期'"
            />
          </el-form-item>
        </template>
        <!-- switch 开关按钮 -->
        <template v-else-if="item.type === 'switch'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-switch
              v-model="ruleForm[item.prop]"
              :active-value="item.data.activeValue"
              :inactive-value="item.data.inactiveValue"
            />
          </el-form-item>
        </template>
        <!-- 单选框 -->
        <template v-else-if="item.type === 'radio'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-radio-group v-model="ruleForm[item.prop]">
              <el-radio
                v-for="(val, index) in item.data"
                :key="index"
                :label="val.value"
                >{{ val.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
        </template>
        <!-- 多选框 -->
        <template v-else-if="item.type === 'checkbox'">
          <el-form-item :label="item.title" :prop="item.prop">
            <el-checkbox-group v-model="ruleForm[item.prop]" size="small">
              <el-checkbox
                v-for="(val, index) in item.data"
                :key="index"
                :label="val"
                name="type"
              />
            </el-checkbox-group>
          </el-form-item>
        </template>
        <!-- 自定义表单项 -->
        <template v-else-if="item.type === 'slot'">
          <slot :name="item.prop"></slot>
        </template>
      </div>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { formLabelListType } from './type';

interface formWrapPropsType {
  // 表单数据对象
  ruleForm: object;
  // label 属性数组
  labelList: formLabelListType[];
  rules?: object;
  formWidth?: string;
  labelWidth?: string;
  loading?: boolean;
  column?: number;
  columnSpace?: number;
}
const props = withDefaults(defineProps<formWrapPropsType>(), {
  // 验证规则
  rules: () => {
    return {};
  },
  // 表单宽度
  formWidth: '500px',
  // label 宽度
  labelWidth: '110px',
  loading: false,
  // 每行列数, 默认为 1
  column: 1,
  // 列与列的间距，默认为 0
  columnSpace: 0,
});

onMounted(() => {
  const ele = document.getElementsByClassName('ruleForm_box')[0] as HTMLElement;
  const maxWidth = ele.offsetWidth - 10;
  if (props.column > 1) {
    const w =
      (maxWidth - (props.column - 1) * props.columnSpace) / props.column;
    const ele: HTMLCollectionOf =
      document.getElementsByClassName('form-item-box');
    for (let i = 0; i < ele.length; i += 1) {
      (ele[i] as HTMLElement).style.width = w + 'px';
      (ele[i] as HTMLElement).style.float = 'left';
      if ((i + 1) % props.column !== 0)
        (ele[i] as HTMLElement).style.margin = `0 ${props.columnSpace}px 0 0`;
    }
  }
});

// 暴露 ref
const formRef = ref(null);
defineExpose({ formRef });
</script>
<style scoped lang="less">
.ruleForm_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
:deep(.el-input__count) {
  height: 12px;
  line-height: 12px;
}
</style>
