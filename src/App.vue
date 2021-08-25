<template>
  <MasterLayout><router-view /></MasterLayout>
</template>

<script setup lang="ts">
import MasterLayout from '~/layouts/Master.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Mukta', sans-serif;
}
</style>
