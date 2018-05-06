<template>
  <ul class="plateslist">
    <li class="plateslist-entry" v-for="(entry, index) in entries" :key="entry.key"
      :class="calculateRow(index)"
      @click="toggleRow(index)">
      <plate :plate="entry" :index="index"></plate>
    </li>
  </ul>
</template>

<script>
import Plate from './Plate.vue';

export default {
  name: 'List',
  components: { Plate },
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    numEntries() {
      return this.entries.length;
    },
  },
  methods: {
    calculateRow(index) {
      const numberOfItemsPerRow = 4;

      return (index < numberOfItemsPerRow) ? 'first' : 'second'; // temp
    },
    toggleRow(index) {
      console.log('toggle', index);
    },
  },
};
</script>

<style lang="scss" scoped>
  $spacing: 0.5rem;
  $number-of-items: 4;

  .plateslist {
    display: flex;
    margin: $spacing ($spacing * -1);
    flex-wrap: wrap;
  }

  .plateslist-entry {
    margin: $spacing;
    background: white;
    //flex-basis: calc(#{percentage(1/$number-of-items)} - #{$spacing * ($number-of-items - 1)});
    flex-basis: calc(#{percentage(1/$number-of-items)} - #{$spacing * 2});
  }
</style>
