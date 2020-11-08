<template>
  <div class="wrapper" :class="{ 'wrapper--is-vibrant': oledDevice }">
    <header class="header">
      <h1 class="title">KFZ</h1>
      <span class="search" v-if="hasSearched">Suche: {{ searchTerms }}</span>
      <button class="button" type="button" @click="resetList()">Reset</button>
    </header>
    <main class="main">
      <Navigation
        :availableLetters="keyList.getUniqueLetters()"
        @button-activated="selectLetter"
      ></Navigation>
      <List :entries="keyList.entries"></List>
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
// JS
import ListJS from "./List";
// Vue
import Navigation from "./Navigation";
import List from "./List.vue";

export default {
  name: "Main",
  components: { Navigation, List },
  data() {
    return {
      oledDevice: false,
      hasSearched: false,
      selectedLetters: [],
      keyList: new ListJS()
    };
  },
  computed: {
    searchTerms() {
      const text = this.hasSearched ? this.selectedLetters.join("-") : "";

      return text;
    }
  },
  methods: {
    selectLetter(value) {
      this.hasSearched = true;
      this.selectedLetters.push(value);
      this.keyList.filterList(value);
    },
    resetList() {
      this.hasSearched = false;
      this.keyList.resetList();
      this.selectedLetters = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: #c3c3c3;

  &--is-vibrant {
    background: black;
  }
}

.header {
  display: flex;
  padding: 0.5rem 2rem;
  flex-grow: 0;
  background: #d1e4fa;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .search {
    font-size: 1rem;
  }

  .button {
    padding: 5px 15px;
  }
}

.main {
  flex-grow: 1;
  background: black;
}

.footer {
  flex-grow: 0;
  background: #d1e4fa;
}
</style>
