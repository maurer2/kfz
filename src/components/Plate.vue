<template>
  <a href="#0" class="card" :class="{ 'card--is-expanded': isExpanded }">
    <header class="card-header">
      <PlateImage :plate="plate.key"></PlateImage>
    </header>
    <div class="card-body" :style="{ height: bodyHeight }" ref="body">
      <div class="media">
        <svg class="media-image icon">
          <use :href="svg.city" />
        </svg>
        <span class="media-content text">{{ plate.district }}</span>
      </div>
      <div class="media">
        <svg class="media-image icon">
          <use :href="svg.state" />
        </svg>
        <span class="media-content text">{{ plate.state }}</span>
      </div>
      <div class="media">
        <div class="media-image icon"></div>
        <span class="media-content text">
          {{ plate.isCurrent ? "Still used" : "Not used anymore" }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import PlateImage from "./PlateImage";
// import IconCity from "../assets/icon-city.svg";

export default {
  name: "Plate",
  components: {
    PlateImage
  },
  props: {
    plate: {
      type: Object,
      default: () => {
        /* */
      }
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0,
      svg: {
        city: `${require("../assets/sprite.svg")}#city`,
        state: `${require("../assets/sprite.svg")}#state`
      }
    };
  },
  watch: {
    isExpanded() {
      if (this.isExpanded) {
        this.height = this.$refs.body.scrollHeight;
      } else {
        this.height = 0;
      }
    }
  },
  computed: {
    bodyHeight() {
      return `${this.height}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
$spacing: 1rem;

.card {
  display: block;
  padding: 0;
  background: #fff;
  color: #000;
  text-decoration: none;
  user-select: none;
}

.card-header {
}

.card-body {
  height: 0;
  visibility: hidden;
  text-align: left;
  transition: height 0.25s;
  overflow: hidden;

  .card--is-expanded & {
    height: auto;
    visibility: visible;
  }
}

.media {
  margin-top: 0.5rem;
}

.icon {
  width: 1rem;
  height: 1rem;
  padding-right: 0.5rem;
  box-sizing: content-box;
  flex-shrink: 0;
  flex-grow: 0;
}

.text {
}
</style>
