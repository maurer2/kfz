<template>
  <a href="#" class="plate" :class="{ 'plate--is-expanded': isExpanded }"
    @click.prevent="toggleContent">
    <dl class="plate-wrapper">
      <dt class="plate-key">
        {{ plate.key }}
      </dt>
      <dd class="plate-value">
        {{ plate.district }}, {{ plate.state }}
      </dd>
    </dl>
  </a>
</template>

<script>
export default {
  name: 'Plate',
  props: ['plate', 'index'],
  data() {
    return {
      isExpanded: (this.index === 0),
    };
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
  .plate {
    padding: 15px 0;
    border-bottom: 1px solid #fff;
    font-weight: bold;
    text-decoration: none;
  }
  .plate-wrapper {
    margin: 0;
  }
  .plate-key {
    color: #fff;
  }
  .plate-value {
    display: none;
    margin: 0;
    color: #fff;

    .plate--is-expanded & {
      display: block;
    }
  }
</style>
