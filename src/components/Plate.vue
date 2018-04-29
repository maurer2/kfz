<template>
  <a href="" type="button" class="plate">
    <div class="plate-key">
      {{ plate.key }}
    </div>
    <div class="plate-district">
      {{ plate.district }}
    </div>
    <div class="plate-state">
      {{ plate.state }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'Plate',
  props: ['plate'],
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
