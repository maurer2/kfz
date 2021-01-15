<template>
  <a
    href="#0"
    class="card"
    :class="{
      'card--is-expanded': isExpanded,
      'card--has-been-toggled': hasBeenToggled
    }"
  >
    <header class="card-header">
      <PlateImage :plate="plate.key" :is-current="plate.isCurrent"></PlateImage>
    </header>
    <div class="card-body">
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
    </div>
  </a>
</template>

<script>
import PlateImage from "./PlateImage";

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
      hasBeenToggled: false,
      svg: {
        city: `${require("../assets/sprite.svg")}#city`,
        state: `${require("../assets/sprite.svg")}#state`
      }
    };
  },
  watch: {
    isExpanded(newIsExpanded, oldIsExpanded) {
      if (newIsExpanded !== oldIsExpanded) {
        this.hasBeenToggled = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$spacing: 1rem;

@keyframes slide-in-from-hidden {
  0% {
    display: none;
    transform: translateY(-100%);
  }
  1% {
    display: block;
  }
  100% {
    transform: translateY(0);
  }
}

.card {
  display: block;
  background: #fff;
  color: #000;
  text-decoration: none;
  user-select: none;
  overflow: hidden;
}

.card-header {
  position: relative;
  z-index: 1;
}

.card-body {
  display: none;
  text-align: left;
  will-change: transform;

  .card--is-expanded & {
    display: block;
    margin-top: 0.5rem;
  }

  .card--is-expanded.card--has-been-toggled & {
    animation: slide-in-from-hidden 0.5s;
  }
}

.media {
  display: flex;
  align-items: center;
}

.media + .media {
  margin-top: 0.5rem;
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  flex: 0 0 auto;
}

.text {
  font-weight: bold;
}
</style>
