<template>
  <ul class="plateslist">
    <li class="plateslist-entry" v-for="(entry, index) in entries" :key="entry.key"
      @click.prevent="toggleActiveEntry(index)">
      <plate :plate="entry" :isExpanded="isActiveEntry(index)"></plate>
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
  data() {
    return {
      numberOfItemsPerRow: 4,
      expandedRow: 0,
      activeEntry: -1,
    };
  },
  computed: {
    numEntries() {
      return this.entries.length;
    },
  },
  methods: {
    isActiveRow(index) {
      const lowerBound = this.expandedRow * this.numberOfItemsPerRow;
      const upperBound = lowerBound + this.numberOfItemsPerRow;

      return index >= lowerBound && index < upperBound;
    },
    isActiveEntry(index) {
      return index === this.activeEntry;
    },
    activateRow(index) {
      this.expandedRow = Math.floor(index / this.numberOfItemsPerRow);
    },
    toggleActiveEntry(index) {
      if (this.activeEntry === index) {
        this.activeEntry = -1;

        return;
      }
      this.activeEntry = index;
    },
    resetRow() {
      this.expandedRow = 0;
    },
    resetList() {
      this.activeEntry = -1;
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
    align-items: flex-start;
  }

  .plateslist-entry {
    margin: $spacing;
    //flex-basis: calc(#{percentage(1/$number-of-items)} - #{$spacing * ($number-of-items - 1)});
    flex-basis: calc(#{percentage(1/$number-of-items)} - #{$spacing * 2});
    overflow: hidden;
  }
</style>
