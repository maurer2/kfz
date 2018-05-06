<template>
  <a href="#" class="plate plate--card" :class="{ 'plate--is-expanded': isExpanded }">
    <dl class="plate-wrapper">
      <dt class="plate-key">
        {{ plate.key }}
      </dt>
      <dd class="plate-value">
        {{ plate.district }}
      </dd>
      <dd class="plate-value">
        {{ plate.state }}
      </dd>
    </dl>
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
      default: true,
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

  .plate-wrapper {
    margin: 0;
  }

  .plate-key {
    color: #000;
    font-weight: bold;
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
