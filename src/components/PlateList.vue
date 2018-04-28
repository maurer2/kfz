<template>
  <ul>
    <li v-for="n in numEntries" :key="n">
      <plate v-bind:plateKey="n"></plate>
    </li>
  </ul>
</template>

<script>
import Plate from './Plate';

export default {
  name: 'PlateList',
  components: { Plate },
  computed: {
    numEntries() {
      return 5000;
    },
    title() {
      return `Liste ${this.numEntries}`;
    },
  },
};
</script>

<style scoped>
  .plateList {
    color: black;
    font-weight: bold;
  }
</style>
