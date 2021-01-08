<template>
  <ul class="plateslist">
    <li
      class="plateslist-entry"
      v-for="(entry, index) in entriesUnique"
      :key="entry.key"
      @click.prevent="toggleActiveEntry(index)"
      :data-test="entry.key"
    >
      <plate :plate="entry" :isExpanded="isActiveEntry(index)"></plate>
    </li>
  </ul>
</template>

<script>
import Plate from "./Plate.vue";

export default {
  name: "List",
  components: { Plate },
  props: {
    entries: {
      type: Array,
      default: () => [],
    }
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
      return this.entriesUnique.length;
    },
    entriesUnique() {
      const entriesDeduped = this.entries.filter((entry, index, entriesArray) => {
        const { key } = entry;
        const indexOfFirstOccurenceOfKey = entriesArray.findIndex((entryInner) => key === entryInner.key)

        return index === indexOfFirstOccurenceOfKey
      })

      return entriesDeduped;
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
  }
};
</script>

<style lang="scss" scoped>
$spacing: 1rem;

.plateslist {
  display: grid;
  margin: $spacing;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $spacing;
  // margin: $spacing ($spacing * -1);
}

.plateslist-entry {
  margin: 0;
  overflow: hidden;
}
</style>
