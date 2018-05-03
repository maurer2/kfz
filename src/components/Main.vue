<template>
  <div class="wrapper" :class="{ 'wrapper--is-vibrant' : oledDevice }">
    <header class="header">KFZ</header>
    <main class="main">
      <Navigation :inactiveLetters="inactiveLetters" @button-activated="selectLetter"></Navigation>
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
      inactiveLetters: ['a', 'k', 'l'],
      selectedLetters: [],
      keyList: new ListJS(),
    };
  },
  methods: {
    selectLetter(value) {
      console.log('selected', value);
      this.selectedLetters.push(value);
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
    flex-grow: 0;
    background: #d1e4fa
  }

  .main {
    flex-grow: 1;
  }

  .footer {
    flex-grow: 0;
    background: #d1e4fa
  }
</style>
