<template>
  <a href="#0" class="card" :class="{ 'card--is-expanded': isExpanded }">
    <header class="card-header">
      <PlateImage :plate="plate.key"></PlateImage>
    </header>
    <div class="card-body" :style="{ height: bodyHeight }" ref="body">
      <div class="media">
        <svg class="media-image icon" x="0px" y="0px" viewBox="0 0 962 800" xml:space="preserve">
	        <path d="M959.1,404.35l-37.6-35.8c-3.9-3.9-10.3-3.9-14.2,0l-37.6,35.8c-1.9,1.899-2.9,4.399-2.9,7.1v178.5c0,5.5-4.5,10-10,10
			h-55.2c-5.5,0-10,4.5-10,10v55.701c0,5.5-4.5,10-10,10h-5.1c-5.5,0-10-4.5-10-10v-432.4c0-5.5-4.5-10-10-10h-13.3
			c-5.5,0-10-4.5-10-10v-27c0-5.5-4.5-10-10-10H669c-5.5,0-10,4.5-10,10v27c0,5.5-4.5,10-10,10h-12.8c-5.5,0-10,4.5-10,10
			L626.1,579.949c0,9.5-16.899,13.602-22.8,6.201l-43.5-54.5c-4-5-11.7-5-15.7,0l-61.1,77c-1.4,1.799-2.2,4-2.2,6.199v59.1
			c0,8.9-10.8,13.4-17.1,7.102l-21.4-21.602c-3.899-3.898-10.3-3.898-14.2,0l-25.399,25.5c-6.3,6.301-17.101,1.9-17.101-7.1v-491.6
			c0-5.5-4.5-10-10-10H320.4c-5.5,0-10,4.5-10,10v479.301c0,5.5-4.5,10-10,10H295.3c-5.5,0-10-4.5-10-10V484.449c0-5.5-4.5-10-10-10
			h-11.2c-5.5,0-10-4.5-10-10V376.55c0-5.5-4.5-10-10-10h-9.9c-5.5,0-10-4.5-10-10v-98.4c0-5.5-4.5-10-10-10h-5.7
			c-5.5,0-10,4.5-10,10v98.4c0,5.5-4.5,10-10,10h-9.9c-5.5,0-10,4.5-10,10v87.899c0,5.5-7.1,9.9-12.7,9.9h-7.6
			c-6.1,0-11,4.899-11,11V651.15c0,9.5-9.3,13.699-15.2,6.299L79.7,603.65c-4.7-5.9-12.5-5.9-17.2,0l-60.3,76
			c-1.4,1.799-2.2,4-2.2,6.199v89.9c0,5.5,4.5,10,10,10h471h471c5.5,0,10-4.5,10-10v-364.4C962,408.75,961,406.25,959.1,404.35z"/>
        </svg>
        <span class="media-content text">
          {{ plate.district }}
        </span>
      </div>
      <div class="media">
        <svg class="media-image icon" x="0px" y="0px" viewBox="0 0 962 800" xml:space="preserve">
	        <path d="M959.1,404.35l-37.6-35.8c-3.9-3.9-10.3-3.9-14.2,0l-37.6,35.8c-1.9,1.899-2.9,4.399-2.9,7.1v178.5c0,5.5-4.5,10-10,10
			h-55.2c-5.5,0-10,4.5-10,10v55.701c0,5.5-4.5,10-10,10h-5.1c-5.5,0-10-4.5-10-10v-432.4c0-5.5-4.5-10-10-10h-13.3
			c-5.5,0-10-4.5-10-10v-27c0-5.5-4.5-10-10-10H669c-5.5,0-10,4.5-10,10v27c0,5.5-4.5,10-10,10h-12.8c-5.5,0-10,4.5-10,10
			L626.1,579.949c0,9.5-16.899,13.602-22.8,6.201l-43.5-54.5c-4-5-11.7-5-15.7,0l-61.1,77c-1.4,1.799-2.2,4-2.2,6.199v59.1
			c0,8.9-10.8,13.4-17.1,7.102l-21.4-21.602c-3.899-3.898-10.3-3.898-14.2,0l-25.399,25.5c-6.3,6.301-17.101,1.9-17.101-7.1v-491.6
			c0-5.5-4.5-10-10-10H320.4c-5.5,0-10,4.5-10,10v479.301c0,5.5-4.5,10-10,10H295.3c-5.5,0-10-4.5-10-10V484.449c0-5.5-4.5-10-10-10
			h-11.2c-5.5,0-10-4.5-10-10V376.55c0-5.5-4.5-10-10-10h-9.9c-5.5,0-10-4.5-10-10v-98.4c0-5.5-4.5-10-10-10h-5.7
			c-5.5,0-10,4.5-10,10v98.4c0,5.5-4.5,10-10,10h-9.9c-5.5,0-10,4.5-10,10v87.899c0,5.5-7.1,9.9-12.7,9.9h-7.6
			c-6.1,0-11,4.899-11,11V651.15c0,9.5-9.3,13.699-15.2,6.299L79.7,603.65c-4.7-5.9-12.5-5.9-17.2,0l-60.3,76
			c-1.4,1.799-2.2,4-2.2,6.199v89.9c0,5.5,4.5,10,10,10h471h471c5.5,0,10-4.5,10-10v-364.4C962,408.75,961,406.25,959.1,404.35z"/>
        </svg>
        <span class="media-content text">
          {{ plate.state }}
        </span>
      </div>
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
  data() {
    return {
      height: 0,
    };
  },
  watch: {
    isExpanded() {
      if (this.isExpanded) {
        this.height = this.$refs.body.scrollHeight;
      } else {
        this.height = 0;
      }
    },
  },
  computed: {
    bodyHeight() {
      return `${this.height}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    display: block;
    padding: 1rem;
    background: #fff;
    color: #000;
    text-decoration: none;
    user-select: none;

    &--is-expanded {
      background: #d1e4fa;
    }
  }

  .card-header {}

  .card-body {
    height: 0;
    visibility: hidden;
    text-align: left;
    transition: height 0.25s;

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

  .text {}
</style>
