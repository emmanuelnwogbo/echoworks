<template>
    <div>
      <div class="footer">
        <div class="footer__overlay"></div>

        <div class="footer__left">
            <figure class="footer__logo">
                <img src="@/assets/imgs/logo.svg"/>
            </figure>

            <h2 class="footer__h2">
                <span>We would love</span>
                <span>to hear from you</span> 
            </h2>
            <div class="footer__feelfree">
                <span>Feel free to reach out if you want to collaborate</span>
                <span>with us, or simply have a chat.</span>
            </div>
            <span class="footer__email">hello@echoafrica.co</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import gsap from "gsap";

  export default {
    mounted() {
        const x = window.matchMedia("(max-width: 428px)")

        if (!x.matches) {
            var tl = new TimelineMax({ onUpdate: updatePercentage });
            var tl2 = new TimelineMax({ onUpdate: updatePercentage });
            const controller = new ScrollMagic.Controller();

            tl.to('.footer__left', 2, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' });

            tl2.to('.footer__overlay', 2, { y: '800px' });
        
            const scene = new ScrollMagic.Scene({
                triggerElement: ".brands__conveyor",
                triggerHook: "onEnter", //onEnter, onCenter
                duration: "140%"
            })
            .setTween(tl)
            .addTo(controller);

            const scene2 = new ScrollMagic.Scene({
                triggerElement: ".brands__conveyor",
                triggerHook: "onEnter", //onEnter, onCenter
                duration: "180%"
            })
            .setTween(tl2)
            .addTo(controller);

            function updatePercentage() {
                tl.progress();
                tl2.progress();
            }
        }
    }
  }
  </script>

<style lang="scss" scoped>
.footer {
    height: #{scaleValue(700)};
    width: 100vw;
    background: $footerblack;
    padding: #{scaleValue(130)} #{scaleValue(80)};
    color: $white;
    display: flex;
    flex-direction: column;
    bottom: 0;
    position: fixed;
    bottom: 0; 
    right: 0; 
    left: 0;
    z-index: 0;
    overflow: hidden;

    @media only screen and (max-width: 428px) {
        position: relative;
        height: #{scaleValue(2800)};
    }

    &__overlay {
        background: rgba(0,0,0,0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: #{scaleValue(1000)};
        height: 100%;
        z-index: 1;

        @media only screen and (max-width: 428px) {
            display: none;
        }
    }

    &::before {
        position: absolute;
        top: 0;
        content: '';
        right: 0;
        background: $white;
        width: #{scaleValue(280)};
        height: 100%;
        z-index: 2;

        @media only screen and (max-width: 428px) {
            width: #{scaleValue(100)};
        }
    }

    &__left {
        //clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }

    &__logo {
        margin-bottom: #{scaleValue(50)};
        
        & img {
            height: #{scaleValue(80)};
            width: auto
        }
    }

    &__h2 {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: #{scaleValue(64)};
        line-height: #{scaleValue(73)};
        letter-spacing: #{scaleValue(0.16)};
        margin-bottom: #{scaleValue(50)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(200)};
            line-height: #{scaleValue(250)};
            margin-bottom: #{scaleValue(170)};
        }
    }

    &__feelfree {
        display: flex;
        flex-direction: column;
        font-weight: 100;
        font-size: #{scaleValue(32)};
        margin-bottom: #{scaleValue(50)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(140)};
            line-height: #{scaleValue(200)};
            margin-bottom: #{scaleValue(100)};
        }
    }

    &__email {
        font-weight: 300;
        font-size: #{scaleValue(40)};
        position: relative;

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(110)};
            line-height: #{scaleValue(200)};
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            background: $white;
            height: #{scaleValue(2)};
            width: #{scaleValue(133)};
            bottom: #{scaleValue(-2)};
            border-radius: 3rem;

            @media only screen and (max-width: 428px) {
                width: #{scaleValue(300)};
                height: #{scaleValue(12)};
                bottom: #{scaleValue(-32)};
            }
        }
    }
}
</style>
  