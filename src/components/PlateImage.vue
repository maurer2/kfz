<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650.31 126.72" class="svg">
    <use :xlink:href="require('@/assets/plate.svg') + '#bg'"/>
  </svg>
</template>

<script>
export default {
  name: "PlateImage",
  props: {
    plate: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // background: require('../assets/svgdefs.svg') + '#icon-headphones'
    }
  }
};
</script>

<style lang="scss" scoped>
.svg {
  display: block;
  width: 100%;
  height: auto;
  font-family: plateFontNew;
}
</style>
