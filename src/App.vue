<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
  background: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}

#root {
  margin: 0;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@font-face {
  font-family: plateFontOld;
  src: url('./assets/fontOld.woff');
}

@font-face {
  font-family: plateFontNew;
  src: url('./assets/fontNew.woff');
}

.media {
  display: flex;
  align-items: flex-start;

  .media-image {
    flex-grow: 0;
  }

  .media-content {
    flex-grow: 1;
  }
}
</style>
