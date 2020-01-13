<script>
export default {
  props: {
    transition: {
      type: String,
      default: 'fade-transition'
    },

    isVueTransition: {
      type: Boolean,
      default: true
    },

    delay: {
      type: Number,
      default: 0
    },

    options: {
      type: Object,
      default: undefined
    }
  },

  data() {
    return {
      isVisible: false
    }
  },

  computed: {
    computedOptions() {
      return {
        once: true,
        intersection: {
          threshold: 0.6
        },
        throttle: 300,
        throttleOptions: {
          leading: 'visible'
        },
        ...this.options
      }
    },

    // TODO: Complete
    enterClass() {
      if (!this.isVueTransition) return this.transition

      if (typeof this.transition === 'string') {
        return this.transition.concat('-enter')
      } else {
        return ''
      }
      /* else {
        // probably an array TODO: check in future
        return this.transition.map((name: string) => name.concat('-enter'))
      } */
    },

    attrs() {
      return this.isVisible
        ? {
            class: 'secondary-transition-time'
          }
        : {
            class: `secondary-transition-time ${this.transition}-enter`
          }
    }
  },

  methods: {
    visibilityChanged(isVisible) {
      // if already visible no need to re-enable
      if (this.isVisible) return

      // eslint-disable-next-line no-console
      console.info(['visibility: ', isVisible])
      if (isVisible) {
        // eslint-disable-next-line no-console
        console.info(['visibility: setting timeout'])
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.info(['visibility: should be set now'])
          this.isVisible = isVisible
        }, this.delay)
      }
    }
  },

  render() {
    return this.$scopedSlots.default({
      isVisible: this.isVisible,
      attrs: this.attrs,
      visibilityOptions: this.computedOptions,
      visibilityHandler: this.visibilityChanged
    })
  }
}
</script>
<style scoped></style>
