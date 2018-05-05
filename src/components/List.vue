<template>
  <ul class="plateslist">
    <li class="plateslist-entry" v-for="(entry, index) in entries" :key="entry.key">
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
