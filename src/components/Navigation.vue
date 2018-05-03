<template>
  <nav class="nav">
    <template v-for="letter in letters">
      <button class="nav-entry" type="button" :key="letter" @click="activateButton(letter)"
        :class="{ 'nav-entry--is-inactive': checkInactivity(letter) }">
        {{ letter | uppercase }}
      </button>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    inactiveLetters: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      letters: [
        'a', 'ä', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q',
        'r', 's', 'ß', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z',
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
      return this.inactiveLetters.includes(letter);
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
