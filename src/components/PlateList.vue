<template>
  <ul class="plates">
    <li class="plate" v-for="n in numEntries" :key="n">
      <plate v-bind:plateKey="n"></plate>
    </li>
  </ul>
</template>

<script>
import Plate from './Plate';
import List from '../filter/List';

export default {
  name: 'PlateList',
  components: { Plate },
  computed: {
    numEntries() {
      return 50;
    },
    title() {
      return `Liste ${this.numEntries}`;
    },
  },
  mounted: function() {
    console.log('mounted');
    const plateList = new List();
    console.log(plateList.getCurrentSize());
  },
};
</script>

<style lang="scss" scoped>
  .plates {
    display: flex;
    margin: 0;
    flex-direction: column;
  }
  .plate {
    display: block;
    margin: 0;
  }
</style>
