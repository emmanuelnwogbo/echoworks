export { default as Brands } from '../../components/Brands.vue'
export { default as Competencies } from '../../components/Competencies.vue'
export { default as CompetenciesMobile } from '../../components/CompetenciesMobile.vue'
export { default as DropDown } from '../../components/DropDown.vue'
export { default as EchoFooter } from '../../components/EchoFooter.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HoverCompImg } from '../../components/HoverCompImg.vue'
export { default as Jumbotron } from '../../components/Jumbotron.vue'
export { default as JumbotronMobile } from '../../components/JumbotronMobile.vue'
export { default as Mobile } from '../../components/Mobile.vue'
export { default as MobileRipplePhoto } from '../../components/MobileRipplePhoto.vue'
export { default as Solutions } from '../../components/Solutions.vue'
export { default as SolutionsMobile } from '../../components/SolutionsMobile.vue'
export { default as Spiral } from '../../components/Spiral.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as WhoWeAre } from '../../components/WhoWeAre.vue'
export { default as WhoWeAreMobile } from '../../components/WhoWeAreMobile.vue'
export { default as Works } from '../../components/Works.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
