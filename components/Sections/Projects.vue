<template>
  <v-container id="projects" tag="section" class="py-6 projects">
    <h2 class="headline text-center">
      <strong class="display-3 secondary--text font-weight-bold"
        >PROJECTS</strong
      >
      <br />
      <span class="d-block" style="margin-top: -8px">I'VE WORKED ON</span>
    </h2>

    <!-- TODO: Change element to v-grid -->
    <content class="d-block mt-5">
      <div v-for="i in 4" :key="i" class="project-wrapper mb-4 mr-4">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 40">
          <path
            fill="#35237D"
            d="M20 20V0C9 0 0 6 0 17s9 23 20 23V20z"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 40px;
              height: 100%;
              transform: translateX(-100%);
            "
          />
        </!-->

        <article class="project w-100 h-100 primary">
          <div class="project__content">
            <h3
              class="project__content__name text-center mt-2 grey--text text--lighten-5"
            >
              Project Name
            </h3>

            <img
              src="/img/opeyemi-david/opeyemi-david-face.png"
              alt="Project Name"
              class="project__content__img w-100 my-3"
              style="height: auto; max-height: 240px; object-fit: contain"
            />
          </div>
          <div class="project__logo secondary"></div>
          <v-btn color="accent" class="project__cta ma-0" fab x-large>
            <v-icon>remove_red_eye</v-icon></v-btn
          >
        </article>
      </div>
    </content>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project-wrapper {
  position: relative;
  min-height: 384px;
  min-width: 288px;
  // height: 100%;
  // width: 100%;
  height: 100%;
  width: 100%;
  max-height: 534px;
  max-width: 400px;
  padding: 28px;
}

.project {
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--v-accent-base);
  min-height: 384px;
  // min-height: calc(inherit - 56px);

  /* &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 100%;
    border-radius: 50%;
    background: var(--v-primary-base);
      transform: translateX(-50%);
  } */

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background: url('~assets/svg/project-top.svg');
    background-repeat: no-repeat;
    transform: translateY(-100%);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background: url('~assets/svg/project-left.svg');
    background-repeat: no-repeat;
    transform: translateX(-100%);
  }

  &__content {
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background-color: rgba(#fff, 20%);
    }

    &__name {
      width: calc(100 - 28px);
      margin-left: 28px;
    }
  }

  &__logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }

  &__cta {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(calc(50% - 2px), calc(50% - 2px));
  }
}
</style>
