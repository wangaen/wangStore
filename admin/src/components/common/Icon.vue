<script>
export default {
  name: 'Icon',
};
</script>
<template>
  <svg class="icon" aria-hidden="true" style="margin-right: 2px">
    <use :xlink:href="`#${$attrs.name}`"></use>
  </svg>
</template>
