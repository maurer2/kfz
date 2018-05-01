<template>
  <div class="wrapper" :class="{ 'wrapper--is-vibrant': oledDevice }">
    <header class="header">KFZ</header>
    <main class="main">
      <plateList></plateList>
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import PlateList from './PlateList';

export default {
  name: 'Main',
  components: { PlateList },
  data() {
    return {
      oledDevice: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    min-height: 100%;
    flex-direction: column;

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
