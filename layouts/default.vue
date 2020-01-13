<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" absolute app> </v-navigation-drawer> -->

    <v-content>
      <nuxt />
    </v-content>

    <div>
      <app-bottom-slider />
    </div>

    <transition :duration="1000" name="fade-transition">
      <app-bar
        :is-shown="appBarIsShown"
        v-show="appBarIsShown"
        class="app-bar-container"
      />
    </transition>

    <app-nav-drawer />
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar'
import AppBottomSlider from '@/components/core/AppBottomSlider'
import AppNavDrawer from '@/components/core/AppNavDrawer'

export default {
  name: 'DefaultLayout',

  components: {
    AppBar,
    AppBottomSlider,
    AppNavDrawer
  },

  data() {
    return {}
  },

  computed: {
    appBarIsShown() {
      return this.$store.state.appBarIsShown
    }
  },

  /* watch: {
    currentRoute(newValue, oldValue) {
      // eslint-disable-next-line no-console
      console.info(
        `current route is being changed from ${oldValue} to ${newValue}`
      )
    }
  }, */

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
        document.body.scrollTop > document.body.clientHeight ||
        document.documentElement.scrollTop >
          document.documentElement.clientHeight

      // eslint-disable-next-line no-console
      // console.info(passedThreshold)

      if (this.appBarIsShown !== passedThreshold) {
        this.$store.commit('setAppBarVisibility', passedThreshold)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar-container {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
}
</style>
