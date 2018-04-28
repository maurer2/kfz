<template>
  <div class="wrapper">
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
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
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
