<template>
  <ul class="plateslist">
    <li class="plateslist-entry" v-for="(entry, index) in entries" :key="entry.key"
      :class="{ 'plateslist-entry---is-active': isActiveRow(index) }" @click.prevent="activateRow(index)">
      <plate :plate="entry" :isExpanded="isActiveRow(index)"></plate>
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
    activateRow(index) {
      this.expandedRow = Math.floor(index / this.numberOfItemsPerRow);
    },
    resetRow() {
      this.expandedRow = 0;
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
    overflow: hidden;
  }

  .plateslist-entry---is-active {
    background: #d1e4fa;
  }
</style>
