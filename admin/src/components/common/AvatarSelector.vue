<script setup lang="ts">
const avatarList = [
  'icon-001-man',
  'icon-003-man',
  'icon-005-man',
  'icon-010-woman',
  'icon-011-woman',
  'icon-015-woman',
];
const emit = defineEmits(['update:modelValue']);
defineProps({ modelValue: { type: String } });
const select = (item: string) => {
  emit('update:modelValue', item);
};
</script>
<template>
  <ul class="AvatarSelector">
    <li
      @click="select(item)"
      v-for="(item, index) in avatarList"
      :key="index"
      :class="[{ active: item === modelValue }]"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#' + item"></use>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.AvatarSelector {
  padding: 0;
  display: flex;
  li {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #eee;
    margin-right: 10px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      border: 1px solid #409eff;
    }
    .icon {
      vertical-align: middle;
      width: 30px;
      height: 30px;
    }
  }
  .active {
    border: 1px solid #409eff;
  }
}
</style>
