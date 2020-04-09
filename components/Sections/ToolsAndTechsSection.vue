<template>
  <section
    id="tools-and-techs"
    class="py-6 py-sm-12 tools-and-techs position-relative"
  >
    <v-container class="position-relative">
      <h2
        ref="tools-and-techs__heading"
        :class="[
          $vuetify.breakpoint.smAndUp ? 'headline' : 'title',
          'text-center mb-4 mb-sm-6 text--secondary filter-elevation'
        ]"
      >
        <strong
          ref="tools-and-techs__heading__strong"
          :class="[
            $vuetify.breakpoint.smAndUp ? 'display-2' : 'display-1',
            'red--text font-weight-bold'
          ]"
        >
          TOOLS AND TECHNOLOGIES
        </strong>
        I USE
      </h2>

      <v-row justify="center" justify-sm="space-around">
        <v-col
          cols="12"
          sm="5"
          order="1"
          order-sm="2"
          style="max-width: 296px;"
          class="tools-and-techs__languages elevation-20 rounded-2"
        >
          <template v-for="(language, i) in languages">
            <div
              :key="language.name"
              class="tools-and-techs__tech pa-1 d-flex align-center rounded-1 transition-swing"
            >
              <img
                :src="language.imgSrc"
                style="width: 56px; height: 56px;"
                class="flex-shrink-1 mr-2"
              />
              <p class="mb-0 flex-grow-1" v-text="language.name"></p>
            </div>

            <v-divider
              v-if="i !== languages.length - 1"
              :key="language.name + '-divider'"
              class="my-2"
              color="orange"
            />
          </template>
        </v-col>

        <v-col
          cols="12"
          sm="7"
          order="2"
          order-sm="1"
          style="max-width: 720px;"
          class="tools-and-techs__others pa-2 elevation-24 rounded-2"
        >
          <v-row>
            <v-col
              v-for="tech in techs"
              :key="tech.title"
              class="tools-and-techs__tech d-flex flex-column align-center rounded-1 transition-swing"
              style="max-width: 128px;"
            >
              <img :src="tech.imgSrc" style="width: 72px; height: 72px;" />

              <p class="mt-1 mb-0" v-text="tech.name"></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ToolsAndTechSection',

  computed: {
    languages() {
      return this.$store.state.toolsAndTechs.languages
    },

    techs() {
      return this.$store.state.toolsAndTechs.others
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-and-techs {
  // TODO: make image instead
  background: url('~assets/img/backgrounds/tech-board.jpg');
  background-attachment: fixed;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(map-get($material-dark, 'background'), 0.7);
    mix-blend-mode: multiply;
  }

  &__languages {
    border: 1px solid var(--v-orange-base);

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      position: sticky;
      top: 88px;
      left: 0;
    }
  }

  &__tech:hover,
  &__tech:focus {
    filter: drop-shadow(0 2px 16px rgba(#e91e63, 0.5));
  }
}
</style>
