<template>
  <a href="#0" class="plate plate--card" :class="{ 'plate--is-expanded': isExpanded }">
    <header class="card-header">
      <img src="/static/plate-de-empty.svg" class="card-image" alt="" />
      <span class="card-title">
        {{ plate.key }}
      </span>
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
export default {
  name: 'Plate',
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
    position: relative;
    margin-bottom: 1rem;
    text-align: left;
  }

  .card-image {
    display: block;
    width: 100%;
  }

  .card-title {
    position: absolute;
    color: black;
    top: 7px; bottom: 7px;
    left: 15%; right: 10%;
    font-weight: bold;
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
