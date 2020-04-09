<template>
  <v-container fluid class="py-0" style="max-width: 100vw;">
    <div class="d-flex justify-space-between">
      <!-- TODO: add internal animations -->
      <!-- <div
        ref="app-bar__menu-btn-container"
        v-show="isShown"
        :class="[
          'app-bar__menu-btn-container transition-swing',
          hiddenMdAndUp && !$vuetify.breakpoint.smAndDown
            ? 'app-bar__menu-btn-container--hidden'
            : ''
        ]"
        enter-class="app-bar__menu-btn-container--hidden"
        leave-to-class="app-bar__menu-btn-container--hidden"
      > -->
      <transition
        name="app-bar__menu-btn-container-transition"
        enter-class="app-bar__menu-btn-container--hidden"
        leave-to-class="app-bar__menu-btn-container--hidden"
      >
        <div
          v-show="isShown"
          ref="app-bar__menu-btn-container"
          :class="[
            'app-bar__menu-btn-container transition-swing',
            hiddenMdAndUp && !$vuetify.breakpoint.smAndDown
              ? 'app-bar__menu-btn-container--hidden'
              : ''
          ]"
          style="z-index: 300;"
        >
          <v-btn
            class="app-bar__menu-btn rounded-1"
            color="accent"
            elevation="20"
            @click.stop="$store.commit('setNavDrawerVisibility', true)"
          >
            <div :class="{ 'hamburger-menu': true, close: appDrawerIsShown }">
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

          <h1 class="app-bar__name headline filter-elevation">Opeyemi David</h1>
        </div>
      </transition>

      <transition name="scale-transition" appear>
        <div
          v-show="isShown"
          class="app-bar__nav-btn-container rounded-1 primary elevation-5"
        >
          <v-btn
            :href="previousRouteLink"
            :disabled="!previousRouteLink"
            class="app-bar__nav-btn--left"
            text
            @click.stop="$vuetify.goTo(previousRouteLink)"
          >
            <v-icon>{{ mdiChevronLeft }}</v-icon>
          </v-btn>

          <span class="text--disabled">/</span>

          <v-btn
            :href="nextRouteLink"
            :disabled="!nextRouteLink"
            class="app-bar__nav-btn--right"
            text
            @click.stop="$vuetify.goTo(nextRouteLink)"
          >
            <v-icon>{{ mdiChevronRight }}</v-icon>
          </v-btn>
        </div>
      </transition>
    </div>
  </v-container>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default {
  name: 'AppBar',

  props: {
    isShown: {
      type: Boolean,
      default: true
    },
    hiddenMdAndUp: {
      type: Boolean,
      default: false
    }
    // TODO: Change to required after finding way to pass to eventBus
    /* nextRouteLink: {
      type: String,
      default: ''
    },
    previousRouteLink: {
      type: String,
      default: ''
    } */
  },

  data() {
    return {
      appDrawerIsShown: false,
      mdiChevronLeft,
      mdiChevronRight
    }
  },

  computed: {
    nextRouteLink() {
      return this.$store.getters.nextRouteLink
    },

    previousRouteLink() {
      return this.$store.getters.previousRouteLink
    }

    /* isShownSynced() {
      return this.isShown
    } */
  } /* ,

  methods: {
    set isShownSynced(bool) {
      return this.$emit('is-shown:update', bool)
    }
  } */
}
</script>

<style lang="scss" scoped>
.app-bar {
  &__menu-btn {
    &-container {
      transform: rotateZ(-27deg);

      &--hidden {
        opacity: 0;
        pointer-events: none;
        transform: rotateZ(-45deg);
      }
    }
  }

  &__name {
    position: absolute;
    top: 100%;
    left: 0;
  }

  &__nav-btn-container--hidden {
    .app-bar__nav-btn--left {
      transform: translateX(10px);
    }
  }
}

.hamburger-menu {
  transform: rotateZ(27deg);

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
</style>
