<template>
  <nav class="nav">
    <template v-for="letter in letters">
      <button class="nav-entry" type="button" :key="letter" @click="activateButton(letter)"
        :class="{ 'nav-entry--is-inactive': checkInactivity(letter) }">
        {{ letter }}
      </button>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    availableLetters: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      letters: [
        'A', 'Ä', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S',
        'ß', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
      ],
    };
  },
  computed: {
    letterState() {
      return false;
    },
  },
  methods: {
    checkInactivity(letter) {
      return !this.availableLetters.includes(letter);
    },
    activateButton(button) {
      this.$emit('button-activated', button);
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: black;
  }
  .nav-entry {
    padding: 10px 0;
    background: #fff;
    flex-grow: 1;
    flex-basis: 0;

    &--is-inactive {
      color: #c2c2c2;
      pointer-events: none;
    }
  }
</style>
