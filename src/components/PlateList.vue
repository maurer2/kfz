<template>
  <ul class="plates">
    <li class="plate" v-for="n in numEntries" :key="n">
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
      return 500;
    },
    title() {
      return `Liste ${this.numEntries}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .plates {
    display: flex;
    margin: 0;
    flex-direction: column;
  }
</style>
