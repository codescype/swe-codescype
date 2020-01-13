<template>
  <div
    :class="[
      'a-bs-links d-flex children-flex-grow-none justify-center align-center transition-swing',
      isShown ? '' : 'hidden'
    ]"
  >
    <a
      v-for="(route, i) in routes"
      :key="i"
      :href="route.link"
      :class="{
        'a-bs-link': true,
        'a-bs-link--before-active': currentRoute > i,
        'a-bs-link--after-active': currentRoute < i,
        'a-bs-link--active': currentRoute === i,
        'transition-swing': true
      }"
      :style="{
        zIndex: calculateZIndex(i, currentRoute, routes.length)
      }"
      @click.stop="$vuetify.goTo(route.link)"
    >
      <!-- <v-icon></v-icon> -->
      <span>{{ route.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppBottomSlider',

  data() {
    return {
      isShown: false
    }
  },

  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },

    routes() {
      return this.$store.state.routes
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      // eslint-disable-next-line no-console
      // console.dir(document)

      const passedThreshold =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50

      // eslint-disable-next-line no-console
      // console.info(passedThreshold)

      this.isShown = passedThreshold
    },

    calculateZIndex(route, currentRoute, totalNumberOfRoutes) {
      return totalNumberOfRoutes - Math.abs(currentRoute - route)
    }
  }
}
</script>

<style lang="scss" scoped>
.a-bs-links {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: max-content;
  transform: translateX(-50%);
  transform-origin: bottom;

  &:hover,
  &:focus {
    transform: translateX(-50%) scale3d(1.2, 1.2, 1);
  }

  &.hidden {
    bottom: -60px;
    opacity: 0;
    transform: translateX(-50%) scale3d(0.2, 0.2, 1);
  }

  & > * {
    flex-grow: 0;
  }
}

.a-bs-link {
  display: inline-block;
  position: relative;
  background: #35237d;
  color: #ededee;
  font-size: 10px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 25px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0 0 11px rgba(#3e2892, 75%);
  border: 1px solid #580e9d;

  &:hover,
  &:focus {
    background: lighten(#35237d, 20%);
  }
}

.a-bs-link.a-bs-link--before-active {
  padding-right: 25px;
  margin-right: -20px;

  /* &:last-of-type {
    margin-right: -15px;
  } */
}

.a-bs-link.a-bs-link--after-active {
  padding-left: 25px;
  margin-left: -20px;

  /* &:first-of-type {
    margin-left: -15px;
  } */

  /* &:last-of-type() {
    padding-left : -15px;
  } */
}

.a-bs-link.a-bs-link--active {
  background: #520d93;
  font-size: 14px;
  padding: 5px 15px;
  box-shadow: 0 0 11px rgba(#580e9e, 75%);
  border-radius: 24px;
}
</style>
