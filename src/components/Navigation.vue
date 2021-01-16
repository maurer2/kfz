<template>
  <nav class="nav">
    <template v-for="letter in letters">
      <button
        class="nav-entry"
        type="button"
        :key="letter"
        @click="activateButton(letter)"
        :class="{ 'nav-entry--is-inactive': checkInactivity(letter) }"
      >
        {{ letter }}
      </button>
    </template>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    availableLetters: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      letters: [
        "A",
        "Ä",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "Ö",
        "P",
        "Q",
        "R",
        "S",
        "ß",
        "T",
        "U",
        "Ü",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  computed: {
    letterState() {
      return false;
    }
  },
  methods: {
    checkInactivity(letter) {
      return !this.availableLetters.includes(letter);
    },
    activateButton(button) {
      this.$emit("button-activated", button);
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
}

.nav-entry {
  margin: 0;
  padding: 10px 0;
  flex: 1 1 0;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 0;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  background: #fff;

  &:first-child {
    border-left: 1px solid black;
  }

  &--is-inactive {
    color: #c2c2c2;
    pointer-events: none;
  }
}
</style>
