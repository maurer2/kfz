<template>
  <a href="#0" class="plate plate--card" :class="{ 'plate--is-expanded': isExpanded }">
    <header class="card-header">
      <PlateImage :plate="plate.key" class="card-title"></PlateImage>
    </header>
    <div class="card-body">
      <p class="plate-value">
        {{ plate.district }}
      </p>
      <p class="plate-value">
        {{ plate.state }}
      </p>
    </div>
  </a>
</template>

<script>
import PlateImage from './PlateImage';

export default {
  name: 'Plate',
  components: { PlateImage },
  props: {
    plate: {
      type: Object,
      default: () => {},
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isExpanded(newValue, oldval) {
      console.log(newValue, oldval);
    },
  },
};
</script>

<style lang="scss" scoped>
  .plate {
    display: block;
    padding: 1rem;
    text-decoration: none;

    &--card {
      min-height: 100%;
    }
  }

  .card-header {
    margin-bottom: 1rem;
  }

  .card-body {
    margin: 0;
  }

  .plate-value {
    display: none;
    margin: 0;
    color: #000;

    .plate--is-expanded & {
      display: block;
    }
  }
</style>
