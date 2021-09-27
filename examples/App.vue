<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from "vue";

const message=ref('aaa')



</script>

<template>
  
  <div>
    <h1>

    Hello, jt-component!
    <div>{{message}}</div>
    </h1>
    <div style="border:1px solid #000">

    <jt-pagination></jt-pagination>
    </div>
  </div>
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
