<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
defineEmits(["changeEvent"]);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <p>
    See
    <code>README.md</code>
    for more information.
  </p>
  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      tar2get="_blank"
      tar3get="_bla1nk"
      ta1rget="_bla2nk"
      tar4get="_bl4a3nk"
      tar4g2et="_blank"
      tar3g2et="_bla3nk"
      targ2et="_bla4nk"
    >
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
