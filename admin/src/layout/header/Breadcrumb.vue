<template>
  <div class="Breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadList" :key="item.name">
        <el-breadcrumb-item :to="{ name: item.name }">{{
          item.meta.breadcrumbName
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue';
import { RouteRecordName, useRoute } from 'vue-router';

const name: Ref<RouteRecordName | null | undefined> = ref('');
const breadList = ref<any>([]);

const route = useRoute();
const getBreadcrumb = () => {
  breadList.value = [];
  name.value = route.name;
  route.matched.forEach((item: any) => {
    if (item.path !== '/') {
      breadList.value.push(item);
    }
  });
};
onMounted(() => getBreadcrumb());

watch(route, () => getBreadcrumb());
</script>
<style lang="scss" scoped>
.Breadcrumb {
  .el-breadcrumb {
    line-height: 50px;
  }
}
</style>
