<template>
  <v-container id="what-i-do" tag="section" class="py-6 py-sm-12 what-i-do">
    <h2
      ref="what-i-do__heading"
      :class="[
        $vuetify.breakpoint.smAndUp ? 'headline' : 'title',
        'what-i-do__heading pl-md-3 mb-4 text--secondary'
      ]"
    >
      <strong
        ref="what-i-do__heading__strong"
        :class="[
          $vuetify.breakpoint.smAndUp ? 'display-2' : 'display-1',
          'secondary--text font-weight-bold'
        ]"
        >WHAT I CAN DO</strong
      ><br />FOR YOU
    </h2>

    <v-layout wrap class="what-i-do justify-center justify-md-space-between">
      <v-flex
        xs12
        sm10
        md6
        lg5
        xl4
        class="px-3 pl-md-0 pr-md-6 mb-4 mb-sm-6 mb-md-0 what-i-do__img-container"
      >
        <full-stack-developer-vector class="what-i-do__img filter-elevation" />
      </v-flex>

      <v-flex
        xs12
        sm10
        md6
        class="what-i-do__description"
        style="max-width: 34rem"
      >


        <div xs12 class=" mb-4 ml-n3">
          <v-layout wrap>
            <v-flex
              v-for="(item, i) in items"
              :key="i"
              shrink
              class="what-i-do__item py-3 px-4 elevation-15 ma-2 heading overflow-hidden"
              v-text="item"
            />
          </v-layout>
        </div>

        <p>
          You don't just get applications that are beautiful but
          lacks on performance, accessibility and efficiency.

          <br />
          <br />
          With my experience as a Senior Full-Stack Software Developer, you get
          <strong>(Web, Mobile or Desktop) Apps and Scripts</strong> that are
          intuitive, fast, robust and scales well; I try to give you the
          best solution for your scenario.

          <br />
          <br />
          Either it's a new development project, or it's an existing
          one you want to improve, or it's a bug you want to fix, I am right here.
        </p>



        <v-btn color="accent" class="ml-n1" href="#contact">Let's Work Together</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FullStackDeveloperVector from '../FullStackDeveloperVector'

export default {
  components: { FullStackDeveloperVector },

  data() {
    return {
      frontendBuild: [
        {
          title: 'Web Apps',
          imgSrc: '/svg/icons/tools-and-techs/devices.svg'
        },
        {
          title: 'Mobile Apps',
          imgSrc: '/svg/icons/tools-and-techs/cellphone-iphone.svg'
        },
        {
          title: 'Desktop Apps',
          imgSrc: '/svg/icons/tools-and-techs/monitor.png'
        },
        {
          title: 'Mock Ups',
          imgSrc: '/svg/icons/tools-and-techs/laravel2.svg'
        }
      ],

      frontendUpgrade: [
        {
          title: 'Speed Improvements',
          imgSrc: '/svg/icons/tools-and-techs/vue.svg'
        },
        {
          title: 'Performance Improvements',
          imgSrc: '/svg/icons/tools-and-techs/flutter.svg'
        },
        {
          title: 'UI/UX Improvements',
          imgSrc: '/svg/icons/tools-and-techs/firebase.png'
        },
        {
          title: 'Add Features',
          imgSrc: '/svg/icons/tools-and-techs/laravel2.svg'
        },
        {
          title: 'Mock Ups',
          imgSrc: '/svg/icons/tools-and-techs/laravel2.svg'
        }
      ],

      items: [
        'Web Apps',
        // mdiDevices,
        'Mobile Apps',
        // mdiCellphoneIphone,
        'Desktop Apps',
        // mdiMonitor,
        'APIs',
        // mdiTransitConnectionVariant
        'Databases',
        // mdiDatabaseSettings
        'Servers',
        // mdiServerNetwork
        // 'Script'
        // mdiScriptTextOutline
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/variables.styl';

.what-i-do {
  &__heading {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-left: 50%;
    }
  }

  &__img {
    &-container {
      min-height: 60vh;
    }
    width: 100%;
    max-width: 560px;
    height: auto;
    max-height: calc(100% - 160px);

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      position: sticky;
      top: 88px;
      left: 0;
      margin-top: -48px;
    }
  }

  /* &__description {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding-left: 16px;
    }
  } */

  &__item {
    background: 1px solid var(--v-accent-base);
    border-radius: 16px;
  }
}
</style>
