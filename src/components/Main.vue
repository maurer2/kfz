<template>
  <div class="wrapper" :class="{ 'wrapper--is-vibrant' : oledDevice }">
    <header class="header">
      <h1>KFZ</h1>
      <button type="button" @click="resetList()">Reset</button>
    </header>
    <main class="main">
      <Navigation :availableLetters="keyList.getUniqueLetters()"
        @button-activated="selectLetter"></Navigation>
      <List :entries="keyList.entries"></List>
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
// JS
import ListJS from './List';
// Vue
import Navigation from './Navigation';
import List from './List.vue';

export default {
  name: 'Main',
  components: { Navigation, List },
  data() {
    return {
      oledDevice: false,
      selectedLetters: [],
      keyList: new ListJS(),
    };
  },
  methods: {
    selectLetter(value) {
      this.selectedLetters.push(value);
      this.keyList.filterList(value);
    },
    resetList() {
      this.keyList.resetList();
    },
  },
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
    padding: 5px 10px;
    flex-grow: 0;
    background: #d1e4fa;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1rem;
      font-weight: bold;
    }

    button {
      padding: 5px 15px;
    }
  }

  .main {
    flex-grow: 1;
  }

  .footer {
    flex-grow: 0;
    background: #d1e4fa
  }
</style>
