<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

const a = 1111111111111111;
const obj = { a };
const arr = [1, 2, 3, 4, 5];
console.log(a, obj, arr);
if (a) {
  console.log('2333333333333', import.meta.env.MODE);
  console.log('34234234');
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
