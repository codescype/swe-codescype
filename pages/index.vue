<template>
  <div>
    <intro-section
      v-observe-visibility="{
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'visible'
        },
        callback: (isVisible, entry) =>
          changeRoute(isVisible, entry, {
            index: 0
          })
      }"
    />

    <what-i-do-section
      v-observe-visibility="{
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'invisible'
        },
        callback: (isVisible, entry) =>
          changeRoute(isVisible, entry, {
            index: 1
          })
      }"
    />

    <tools-and-techs-section
      v-observe-visibility="{
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'invisible'
        },
        callback: (isVisible, entry) =>
          changeRoute(isVisible, entry, {
            index: 2
          })
      }"
    />

    <!-- <projects
      v-observe-visibility="{
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'invisible'
        },
        callback: (isVisible, entry) =>
          changeRoute(isVisible, entry, {
            index: 3
          })
      }"
    /> -->

    <contact-section
      v-observe-visibility="{
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'invisible'
        },
        callback: (isVisible, entry) =>
          changeRoute(isVisible, entry, {
            index: 3
          })
      }"
    />
  </div>
</template>

<script>
// import AppObserveVisibility from '@/components/core/AppObserveVisibility'

import IntroSection from '@/components/Sections/IntroSection'
import WhatIDoSection from '@/components/Sections/WhatIDoSection'
import ToolsAndTechsSection from '@/components/Sections/ToolsAndTechsSection'
// import Projects from '@/components/Sections/Projects'
import ContactSection from '@/components/Sections/ContactSection'

export default {
  components: {
    // AppObserveVisibility,
    IntroSection,
    WhatIDoSection,
    ToolsAndTechsSection,
    // Projects
    ContactSection
  },

  props: {
    currentRoute: {
      type: Number,
      default: 0
    }
  },

  methods: {
    changeRoute(isVisible, entry, { index, callback }) {
      if (isVisible) {
        this.$store.commit('setCurrentRoute', index)
      }

      if (callback) {
        callback(isVisible, entry)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';
</style>
