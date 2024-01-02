<template>
  <div>
    <Top />
    <Main />
  </div>
</template>

<script setup>
import Top from "./Top.vue";
import Main from "../components/Main.vue";
const components = {
  Main,
  Top,
};
</script>
