<template>
  <v-dialog
    v-model="isShown"
    content-class="app-nav-drawer primary darken-4 px-sm-3 py-sm-4 text-center"
    origin="0%"
    fullscreen
    scrollable
  >
    <v-container fluid class="pt-sm-0">
      <v-row justify="center" justify-sm="space-around">
        <v-col
          cols="12"
          sm="5"
          class="mb-4 mb-sm-0 position-relative"
          style="max-width: 25rem;"
        >
          <div class="app-nav-drawer__avatar mx-auto mb-3">
            <h1 class="white--text headline text-center">
              Opeyemi David
            </h1>
          </div>

          <h2
            class="headline font-weight-bold mb-sm-6"
            style="letter-spacing: 0.05rem !important;"
          >
            FULL STACK <br class="hidden-sm-and-up" />WEB DEVELOPER
          </h2>

          <p class="text--secondary hidden-xs-only mb-sm-4">
            I am a courageous, optimistic, and keen individual, a Software
            Engineer, who likes to make the best exploit of every resource he
            has to build and contribute to systems that can revolutionize life.
          </p>

          <div class="hidden-xs-only">
            <div class="d-flex justify-center hidden-xs-only">
              <a
                v-for="social in socialLinks"
                :key="social.title"
                target="_blank"
                rel="noopener"
                title="social.title"
                class="px-1"
              >
                <img :src="social.imgSrc" style="width: 40px; height: 40px;" />
              </a>
            </div>
          </div>

          <transition
            :duration="1000"
            name="app-nav-drawer__menu-btn-transition"
            enter-active-class="app-nav-drawer__menu-btn--hidden"
            leave-active-class="app-nav-drawer__menu-btn--hidden"
          >
            <v-btn
              v-show="isShown"
              class="app-nav-drawer__menu-btn rounded-1 transition-swing"
              color="red"
              elevation="20"
              @click.stop="toggleVisibility(false)"
            >
              <div :class="{ 'hamburger-menu': true, close: isShown }">
                <div class="hamburger-menu__bars transition-swing">
                  <div
                    class="hamburger-menu__bar hamburger-menu__bar--1 transition-swing"
                  />

                  <div
                    class="hamburger-menu__bar hamburger-menu__bar--2 transition-swing"
                  />

                  <div
                    class="hamburger-menu__bar hamburger-menu__bar--3 transition-swing"
                  />
                </div>
              </div>
            </v-btn>
          </transition>
        </v-col>

        <v-col>
          <transition name="slide-y-transition">
            <div v-show="isShown" class="app-nav-drawer__nav-links mt-sm-8">
              <a
                v-for="(route, i) in routes"
                :key="i"
                :href="route.link"
                :class="[
                  'nav-link d-block px-2 orange--text text-uppercase transition-swing',
                  currentRoute === i
                    ? 'nav-link--active py-3 title font-weight-regular elevation-1'
                    : 'py-2'
                ]"
                @click="goTo(route.link)"
              >
                <v-icon :large="currentRoute === i" color="orange" class="mr-3">
                  {{ route.icon }}
                </v-icon>
                <span>{{ route.title }}</span>
              </a>
            </div>
          </transition>
        </v-col>

        <v-col cols="12" class="hidden-sm-and-up">
          <div class="d-flex justify-center">
            <a
              v-for="contact in socialLinks"
              :key="contact.title"
              :title="contact.title"
              target="_blank"
              rel="noopener"
              class="px-1"
            >
              <img :src="contact.imgSrc" style="width: 40px; height: 40px;" />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppNavDrawer',

  computed: {
    isShown: {
      get() {
        return this.$store.state.navDrawerIsShown
      },

      set(state) {
        this.$store.commit('setNavDrawerVisibility', state)
      }
    },

    currentRoute() {
      return this.$store.state.currentRoute
    },

    routes() {
      return this.$store.state.routes
    },

    socialLinks() {
      return this.$store.state.contacts.social
    }
  },

  methods: {
    toggleVisibility(state) {
      this.$store.commit('setNavDrawerVisibility', state)
    },

    goTo(route) {
      this.$vuetify.goTo(route)
      this.toggleVisibility(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav-drawer {
  &__avatar {
    height: 196px;
    min-width: 256px;
    max-width: 320px;
    background: var(--v-primary-base)
      url('/img/opeyemi-david/opeyemi-david-face.png');
    background-size: cover;
    border-radius: 8px;
  }

  .nav-link {
    font-size: 14px;
    text-decoration: none;

    &:hover,
    &:focus {
      background: rgba(#fff, 3%);
      filter: drop-shadow(0 2px 16px rgba(#3f5ee7, 0.5));
    }

    &--active {
      background: rgba(#fff, 5%);
      filter: drop-shadow(0 2px 16px rgba(#3f5ee7, 0.5));
    }
  }

  &__menu-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    transform: rotateZ(-27deg);

    &--hidden {
      // opacity: 0;
      // pointer-events: none;
      // transform: rotateZ(0deg);
      animation: 1s rotateRightAndBack;
    }
  }

  @keyframes rotateRightAndBack {
    0% {
      transform-origin: 0 0;
      transform: rotateZ(-27deg);
      opacity: 0;
    }
    30% {
      transform: rotateZ(0deg);
      transform-origin: 0 0;
      opacity: 1;
    }
    70% {
      transform: rotateZ(-35deg);
      transform-origin: 50% 50%;
    }
    100% {
      transform: rotateZ(-27deg);
    }
  }

  .hamburger-menu {
    // transform: rotateZ(27deg);

    &__bars {
      height: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__bar {
      height: 2.4px;
      // background: var(--v-accent-base);
      background: map-deep-get($material-dark, 'text', 'primary');
      border-radius: 1px;

      &--1 {
        width: 20px;
      }

      &--2 {
        width: 20px;
      }

      &--3 {
        width: 20px;
      }
    }

    &:hover,
    &:focus {
      &__bar {
        background: var(--v-orange-base);
      }
    }
  }

  .hamburger-menu.close {
    .hamburger-menu__bar {
      &s {
        transform: translateX(3.8px);
      }

      &--1 {
        transform-origin: top left;
        transform: rotate(45deg);
      }

      &--2 {
        transform: rotate(180deg) scale(0);
      }

      &--3 {
        transform-origin: bottom left;
        transform: rotate(-45deg) translate(-1px);
        width: 20px;
      }
    }
  }
}
</style>
