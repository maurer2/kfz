<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 650.31 126.72"
    class="svg"
    :opacity="isCurrent ? false : '0.25'"
  >
    <use :href="background" />
    <text
      id="text"
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="000"
      font-size="100"
    >
      {{ plate }}
    </text>
    <use :href="electricSign" />
  </svg>
</template>

<script>
export default {
  name: "PlateImage",
  props: {
    plate: {
      type: String,
      default: ""
    },
    isCurrent: {
      type: Boolean,
      default: true
    }
  },
  inject: ["background", "electricSign"]
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
