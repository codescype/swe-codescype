<template>
  <header id="home" class="section__intro overflow-hidden">
    <!-- intro -->
    <!-- TODO: Turn background into parallax -->
    <v-layout class="intro" justify-space-between dark>
      <div class="hidden-sm-and-down" style="flex-grow: 1;">
        <transition name="slide-x-reverse-transition" appear>
          <nav class="intro__side-bar-wrapper">
            <div class="intro__side-bar pt-1">
              <!-- NOTE: don't use margin-bottom, it breaks the wrapper -->
              <div class="side-bar__avatar mx-1">
                <h1 class="white--text headline text-center">
                  Opeyemi David
                </h1>
              </div>

              <div class="side-bar__nav-links mt-8">
                <a
                  v-for="(route, i) in routes"
                  :key="i"
                  :href="route.link"
                  :class="[
                    'nav-link d-block px-2 orange--text text-uppercase transition-swing',
                    currentRoute === i
                      ? 'nav-link--active py-3 title font-weight-regular'
                      : 'py-2'
                  ]"
                  @click.prevent="$vuetify.goTo(route.link)"
                >
                  <!-- TODO: Add Icons -->
                  <v-icon
                    :large="currentRoute === i"
                    color="orange"
                    class="mr-3"
                  >
                    {{ route.icon }}
                  </v-icon>
                  <span>{{ route.title }}</span>
                </a>
              </div>
            </div>
          </nav>
        </transition>
      </div>

      <!-- intro__content -->
      <div class="intro__content-wrapper">
        <v-layout
          tag="content"
          class="intro__content mx-auto text-center"
          column
          justify-end
          align-center
        >
          <!-- <img
            alt="opeyemi-david full-stack-image"
            src="~assets/img/drawkit-full-stack-man-colour-800px.png"
            style="height: 400px; width: max-width: 500px;"
          /> -->

          <div>
            <h2
              class="headline font-weight-bold mb-3"
              style="letter-spacing: 0.05rem !important"
            >
              FULL STACK <br class="hidden-sm-and-up" />WEB DEVELOPER
            </h2>

            <div class="d-flex justify-center">
              <v-layout
                v-for="tech in langAndTech"
                :key="tech.title"
                class="pa-1"
                style="max-width: 96px; flex-direction: column;"
                column
                align-center
              >
                <img :src="tech.imgSrc" style="width: 48px; height: 48px;" />

                <p v-text="tech.title" class="mt-1 mb-3"></p>
              </v-layout>
            </div>

            <a
              href="#tools-and-tech"
              class="text--secondary"
              style="text-decoration: underline;"
            >
              See all the Techs and Tools I'm familiar with</a
            >
            <br />

            <v-btn
              href="#contact"
              class="mx-auto mt-4 black--text"
              color="orange"
              light
              x-large
            >
              <v-icon left>
                {{ mdiContactPhone }}
              </v-icon>
              HIRE ME
            </v-btn>
          </div>
        </v-layout>
      </div>
      <!-- intro__content -->
    </v-layout>
    <!-- end-intro -->

    <app-bar class="intro__app-bar" hidden-md-and-up />
  </header>
</template>

<script>
import { mdiContactPhone } from '@mdi/js'

import AppBar from '../core/AppBar'

export default {
  components: { AppBar },

  data() {
    return {
      langAndTech: [
        {
          title: 'Vue',
          imgSrc: '/svg/icons/tools-and-techs/vue.svg'
        },
        {
          title: 'Flutter',
          imgSrc: '/svg/icons/tools-and-techs/flutter.svg'
        },
        {
          title: 'Firebase',
          imgSrc: '/svg/icons/tools-and-techs/firebase.png'
        },
        {
          title: 'Laravel',
          imgSrc: '/svg/icons/tools-and-techs/laravel-2.svg'
        }
      ],

      mdiContactPhone
    }
  },

  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },

    routes() {
      return this.$store.state.routes
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

$bg-image: url('~assets/img/backgrounds/developer-desk-3840-x-2160.jpg');
$bg-image-blurred: url('~assets/img/backgrounds/developer-desk-3840-x-2160-blurred.jpg');
$section-intro-padding: 24px;

.section__intro {
  position: relative;
  min-height: 100vh;
  // TODO: Use mixin for bg-img
  background: linear-gradient(#0002, #0004 calc(100% - 290px)), $bg-image;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 64px 24px 72px;
  border-bottom-left-radius: 50% 100px;
  border-bottom-right-radius: 50% 100px;

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 50px),
    calc(100% - 504px) calc(100% - 50px),
    calc(100% - (554px)) 100%,
    0 100%
  );

  @media #{map-get($display-breakpoints, 'sm-only')} {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 50px),
      calc(100% - 504px) calc(100% - 50px),
      calc(100% - (554px)) 100%,
      0 100%
    );
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    padding: $section-intro-padding $section-intro-padding 72px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(rgba(53, 35, 125, 1), rgba(82, 13, 147, 0.9));
    mix-blend-mode: multiply;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    min-height: 100vh;
    background: url('~assets/svg/bits-vector.svg');
    background-size: 128px;
    mix-blend-mode: multiply;
    z-index: -1;
  }
}

.intro {
  position: relative;

  &__app-bar {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
  }

  &__side-bar-wrapper {
    position: relative;
    width: fit-content;
    border-radius: 8px;
    overflow: hidden;
  }

  &__side-bar {
    position: relative;
    // min-height: calc(100vh - ($section-intro-padding * 2));
    min-height: calc(100vh - 48px);
    min-width: 256px;
    max-width: 320px;
    z-index: 1;
    background: rgba(#000, 50%);
  }

  &__content-wrapper {
    max-width: 960px;
    flex-grow: 1;
  }

  &__content {
    position: relative;
    max-width: 600px;
    min-height: calc(100vh - 48px);

    // padding: 24px;
    // background-color: #fff4;
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      padding: 30px;
    }

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding: 40px;
    }

    &__name {
      font-size: 30px;
      line-height: 32px;

      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        font-size: 42px;
        line-height: 45px;
      }
    }

    &__job-title {
      font-size: 45px;
      line-height: 47px;

      @media #{map-get($display-breakpoints, 'sm-only')} {
        font-size: 62px;
        line-height: 65px;
      }

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        font-size: 72px;
        line-height: 75px;
      }
    }
  }
}

.intro__side-bar-wrapper {
  border-bottom-left-radius: 100% 100px;

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    border-bottom-left-radius: 100% 80px;
  }
}

@supports (filter: blur()) {
  .intro__side-bar-wrapper {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -24px;
      left: -24px;
      width: calc(100% + (24px * 2));
      height: calc(100% + (24px * 2));
    }

    &::before {
      // TODO: Use mixin for bg-img
      background: $bg-image;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(20px);
    }

    &::after {
      background: linear-gradient(rgba(53, 35, 125, 1), rgba(82, 13, 147, 0.9));
      mix-blend-mode: multiply;
    }
  }

  // .intro__side-bar-wrapper::before,
  // .intro__side-bar-wrapper::after {
  //   content: '';
  //   position: absolute;
  //   top: -24px;
  //   left: -24px;
  //   width: calc(100% + (24px * 2));
  //   height: calc(100% + (24px * 2));
  // }

  // .intro__side-bar-wrapper::before {
  //   // TODO: Use mixin for bg-img
  //   background: $bg-image;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   filter: blur(20px);
  // }

  // .intro__side-bar-wrapper::after {
  //   background: linear-gradient(rgba(53, 35, 125, 1), rgba(82, 13, 147, 0.9));
  //   mix-blend-mode: multiply;
  // }
}

.side-bar {
  &__avatar {
    height: 196px;
    background: var(--v-primary-base)
      url('/img/opeyemi-david/opeyemi-david-face.png');
    background-size: cover;
    border-radius: 8px;
  }
}

.nav-link {
  font-size: 14px;
  text-decoration: none;

  // background: rgba(#000, 20%);
  &:hover,
  &:focus {
    background: rgba(#000, 20%);
  }

  &--active {
    background: rgba(#000, 50%);
  }
}
</style>
