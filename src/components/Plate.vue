<template>
  <a
    href="#0"
    class="card"
    :class="{ 'card--is-expanded': isExpanded, 'card--has-slide-out-animation': hasBeenToggled }"
  >
    <header class="card-header">
      <PlateImage :plate="plate.key" :is-current="plate.isCurrent"></PlateImage>
    </header>
    <div class="card-body" ref="body">
      {{ hasBeenToggled }}
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

@keyframes slide-out-to-hidden {
  0% {
    display: block;
    transform: translateY(0);
  }
  99% {
    display: none;
  }
  100% {
    transform: translateY(-100%);
  }
}

.card {
  display: block;
  padding: 0;
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
  animation: slide-out-to-hidden 0.5s;
  will-change: transform;
  // transform: translateY(-100%);
  // transition: transform 1s;

  .card--has-slide-out-animation & {
    animation: slide-in-from-hidden 0.5s;
  }

  .card--is-expanded & {
    display: block;
    // transform: translateY(0%);
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
