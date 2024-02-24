<template>
  <div>
    <div class="home" v-if="!mobile">
      <div class="home__body">
        <Jumbotron />
        <Brands />
      </div>
      <Footer />
    </div>

    <div class="home__mobile" v-if="mobile">
      <Jumbotron />
      <Brands />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false
    }
  },
  mounted() {
    const x = window.matchMedia("(max-width: 428px)");

    if (!x.matches) {
      this.mobile = false;
    } else {
      this.mobile = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;

  &__body {
    position: relative;
    z-index: 2;
    margin-bottom: #{scaleValue(800)};
    background: $white; 
  }
}
</style>
