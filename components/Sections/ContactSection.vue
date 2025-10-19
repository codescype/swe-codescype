<template>
  <v-container id="contact" class="my-12">
    <h2
      ref="contact__heading"
      :class="[
        $vuetify.breakpoint.smAndUp ? 'headline' : 'title',
        'mb-4 mb-sm-6 text--secondary filter-elevation'
      ]"
    >
      <strong
        ref="contact__heading__strong"
        :class="[
          $vuetify.breakpoint.smAndUp ? 'display-1' : 'headline',
          'red--text font-weight-bold'
        ]"
        >CONTACT</strong
      ><br />ME
    </h2>

    <v-row justify="center" justify-sm="space-around">
      <v-col
        cols="12"
        sm="5"
        class="mb-4 mb-sm-0 position-relative"
        style="max-width: 28rem"
      >
        <img
          src="/img/opeyemi-david/Opeyemi-David-portrait.jpg"
          alt="Opeyemi David"
          style="width: 100%; height: auto; border-radius: 32px"
        />

        <div class="mt-4 title">
          <p
            v-for="(contact, i) in mainContacts"
            :key="i"
            :class="[
              'nav-link d-block px-2 orange--text transition-swing mb-1'
            ]"
          >
            <v-icon color="orange" class="mr-2">
              {{ contact.icon }}
            </v-icon>
            <span>{{ contact.value }}</span>
          </p>
        </div>

        <!-- <transition
            :duration="1000"
            name="app-nav-drawer__menu-btn-transition"
            enter-active-class="app-nav-drawer__menu-btn--hidden"
            leave-active-class="app-nav-drawer__menu-btn--hidden"
          >
            <v-btn
              v-show="isShown"
              @click.stop="toggleVisibility(false)"
              class="app-nav-drawer__menu-btn rounded-1 transition-swing"
              color="red"
              elevation="20"
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
          </transition> -->
      </v-col>

      <v-col style="max-width: 34rem">
        <p class="title text--secondary mb-4">
          I am a courageous, optimistic, and keen individual, a Software
          Engineer, who likes to make the best exploit of every resource he has
          to build and contribute to systems that can revolutionize life.
        </p>

        <!-- <transition name="slide-y-transition" appear> -->
        <p class="display-1 mb-2"><span class="red--text">@</span>codescype</p>

        <!-- <div v-show="isShown" class="app-nav-drawer__nav-links mt-sm-8"> -->
        <div v-show="true" class="app-nav-drawer__nav-links">
          <a
            v-for="contact in socialLinks"
            :key="contact.title"
            :title="contact.title"
            :href="contact.link"
            target="_blank"
            rel="noopener"
            class="px-2"
          >
            <img :src="contact.imgSrc" style="width: 64px; height: 64px" />
          </a>
        </div>
        <!-- </transition> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactSection',

  computed: {
    mainContacts() {
      return this.$store.state.contacts.main
    },

    socialLinks() {
      return this.$store.state.contacts.social
    }
  }
}
</script>

<style lang="scss" scoped></style>
