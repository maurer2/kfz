<template>
  <ul class="plates">
    <li class="plate" v-for="(entry, index) in entries" :key="entry.key">
      <plate :plate="entry" :index="index"></plate>
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
      return this.entries.length;
    },
  },
  created() {
    const list = new List();
    this.entries = list.entries;
  },
  mounted() {
    console.log('size list:', this.entries.length);
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
