<template>
  <div>
    <Top />
    <Main />
    <Footer />
  </div>
</template>

<script setup>
import Top from "./Top.vue";
import Main from "../components/Main.vue";
import Footer from "./Footer.vue";
const components = {
  Main,
  Top,
};
</script>
