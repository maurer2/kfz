<template>
  <a href="" type="button" class="plate">
    <div class="plate-key">
      {{ plateKey }}
    </div>
    <div class="plate-district">
      {{ district }}
    </div>
    <div class="plate-state">
      {{ state }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'Plate',
  props: ['plateKey'],
  data() {
    return {
      district: 'Test District',
      state: 'Test State',
    };
  },
};
</script>

<style lang="scss" scoped>
  .plate {
    border-bottom: 1px solid #fff;
    font-weight: bold;
  }
  .plate-key {
    color: #fff;
  }
  .plate-district {
    color: #fff;
  }
  .plate-state {
    color: #fff;
  }
</style>
