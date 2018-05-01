<template>
  <nav class="nav">
    <template v-for="letter in letters">
      <button class="nav-entry" type="button" :class="{ 'nav-entry--is-inactive': letterState }"
        :key="letter">{{ letter }}</button>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      letters: 'a,ä,b,c,d,e,f,g,h,i,j,k,l,m,n,o,ö,p,q,r,s,t,u,ü,v,w,x,y,z'.split(','),
      lettersInactive: ['a', 'p', 'z'],
    };
  },
  computed: {
    letterState() {
      return false;
    },
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
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
    padding: 10px;
    background: #fff;
    flex-grow: 1;
    flex-basis: 0;
  }
</style>
