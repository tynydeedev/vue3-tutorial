<template>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>

  <p>{{ total }}</p>

  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</template>

<script>
  import { useNumbers } from './useNumbers';

  export default {
    setup() {
      // ref is for primitive values and array (number, string, array)
      // reactive is only for objects

      return useNumbers();
    },
  };
</script>

<style scoped>
  button {
    height: 100px;
    width: 100px;
    font-size: 40px;
  }
  p {
    font-size: 40px;
  }
</style>
