<template>
    <div>
      <div class="brands" v-if="!isLoading">
        <div class="brands__conveyor">
            <img src="@/assets/imgs/fanthingy.jpeg"/>
            <img src="@/assets/imgs/oraimo-logo.png"/>
            <img src="@/assets/imgs/kantar.jpeg"/>
            <img src="@/assets/imgs/pigeon.jpeg"/>
            <img src="@/assets/imgs/pillow.jpeg"/>
            <img src="@/assets/imgs/trendwatching.png"/>
            <img src="@/assets/imgs/fanthingy.jpeg"/>
            <img src="@/assets/imgs/oraimo-logo.png"/>
            <img src="@/assets/imgs/kantar.jpeg"/>
            <img src="@/assets/imgs/pigeon.jpeg"/>
            <img src="@/assets/imgs/pillow.jpeg"/>
            <img src="@/assets/imgs/trendwatching.png"/>
            <img src="@/assets/imgs/fanthingy.jpeg"/>
            <img src="@/assets/imgs/oraimo-logo.png"/>
            <img src="@/assets/imgs/kantar.jpeg"/>
            <img src="@/assets/imgs/pigeon.jpeg"/>
            <img src="@/assets/imgs/pillow.jpeg"/>
            <img src="@/assets/imgs/trendwatching.png"/>
            <img src="@/assets/imgs/fanthingy.jpeg"/>
            <img src="@/assets/imgs/oraimo-logo.png"/>
            <img src="@/assets/imgs/kantar.jpeg"/>
            <img src="@/assets/imgs/pigeon.jpeg"/>
            <img src="@/assets/imgs/pillow.jpeg"/>
            <img src="@/assets/imgs/trendwatching.png"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import utilityMixin from '@/mixins/utility.js';

  export default {
    mixins: [utilityMixin],
    mounted() {
      this.isLoading = false;
      this.visible = true;
      this.setHomePageLoaded(this.visible);
    }
  }
  </script>

<style lang="scss" scoped>
.brands {
    background: $white2;
    position: relative;
    z-index: 2;

    @media only screen and (max-width: 428px) {
         overflow-y: hidden;
         padding-bottom: #{scaleValue(80)};
    }

    &__conveyor {
        display: flex;
        align-items: center;
        position: relative;
        min-height: #{scaleValue(200)};
        width: 100%;

        animation: moveleft 30s linear infinite;

        & img {
            height: #{scaleValue(100)};
            margin-right: #{scaleValue(80)};

            @media only screen and (max-width: 428px) {
              height: #{scaleValue(300)};
              margin-right: #{scaleValue(70)};
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>