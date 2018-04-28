<template>
  <button type="button" class="plate">
    {{ plateKey }}
  </button>
</template>

<script>
export default {
  name: 'Plate',
  props: ['plateKey'],
  data() {
    return {
      plate: 'A',
    };
  },
};
</script>

<style scoped>
  .plate {
    color: black;
    font-weight: bold;
  }
</style>
