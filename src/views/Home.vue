<template>
  <div>
    <Top />
    <HelloWorld />
    <Footer/>
  </div>
</template>

<script setup>
import Top from "./Top.vue";
import HelloWorld from '../components/HelloWorld.vue';
import Footer from "./Footer.vue"
const components = {
  HelloWorld,
  Top
};

</script>
