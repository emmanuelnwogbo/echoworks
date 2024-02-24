<template>
    <div>
      <div class="jumbotron">
        <div class="jumbotron__area">
            <h1 class="jumbotron__copy">
                <span class="jumbotron__copy--line">We are a marketing</span>
                <span class="jumbotron__copy--line">agency that focuses</span>
                <span class="jumbotron__copy--line">on strategy and</span>
                <span class="jumbotron__copy--line">design</span>
            </h1>

            <figure class="jumbotron__spiral">
                <img src="@/assets/imgs/spiralsvg.svg"/>
            </figure>

            <div class="jumbotron__scolltext">
                <p class="jumbotron__weareecho black">We are Echo</p>
                <p class="jumbotron__weareecho transparent">We are Echo</p>
            </div>

            <div class="jumbotron__howwethink">
                <div class="jumbotron__howwethink--header">
                    How we think
                </div>
                <div class="jumbotron__howwethink--copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div class="jumbotron__btn">
                        <NuxtLink to="/howwethink">View details</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jumbotronMixin from '@/mixins/jumbotron.js';

  export default {
    mixins: [jumbotronMixin]
  }
  </script>

  <style lang="scss" scoped>
  .jumbotron {
    padding: #{scaleValue(25)} #{scaleValue(200)};
    padding-top: #{scaleValue(550)};
    position: relative;

    @media only screen and (max-width: 428px) {
        padding: #{scaleValue(25)} #{scaleValue(120)};
        padding-top: #{scaleValue(1000)};
        overflow: hidden;
    }

    &__spiral {
        position: absolute;
        top: #{scaleValue(220)};
        right: #{scaleValue(25)};
        z-index: -1;
        opacity: .4;
        height: #{scaleValue(800)};
        width: #{scaleValue(800)};

        @media only screen and (max-width: 428px) {
            height: #{scaleValue(1600)};
            width: #{scaleValue(1600)};
            top: #{scaleValue(600)};
            right: #{scaleValue(-300)};
        }

        & img {
            object-fit: contain;
            height: #{scaleValue(800)};
            width: #{scaleValue(800)};
            position: absolute;
            top: 0;
            left: 0;
            animation: pulse .3s ease-in;

            @media only screen and (max-width: 428px) {
                height: #{scaleValue(1600)};
                width: #{scaleValue(1600)};
            }
        }
    }
        
    &__copy {
        color: $jumbotron-black;
        display: flex;
        flex-direction: column;
        font-weight: 300;
        font-size: #{scaleValue(90)};
        letter-spacing: #{scaleValue(0.16)};
        line-height: #{scaleValue(120)};
        position: relative;
        padding-bottom: #{scaleValue(100)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(130)};
            line-height: #{scaleValue(210)};
        }
        
        &--line {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
            opacity: 0;
        }
    }

    &__scolltext {
        padding: #{scaleValue(100)} 0;
        display: flex;
        transform: translateX(#{scaleValue(-200)});

        @media only screen and (max-width: 428px) {
            transform: translateX(#{scaleValue(100)});
            margin-top: #{scaleValue(270)};
        }

        & p {
            flex-shrink: 0;
            margin-left: #{scaleValue(30)};
        }
        & p.transparent {
            color: transparent;
            -webkit-text-stroke: #EF5776;
            -webkit-text-stroke-width: 1px;
            margin-left: #{scaleValue(120)};
        }
    }

    &__weareecho {
        font-size: #{scaleValue(190)};
        font-weight: 600;

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(260)};
            font-weight: 400;
        }
    }

    &__howwethink {
        display: flex;
        padding-left: #{scaleValue(190)};
        margin-top: #{scaleValue(120)};

        @media only screen and (max-width: 428px) {
            flex-direction: column;
            padding-left: 0;
        }

        &--header {
            font-size: #{scaleValue(45)};
            flex-shrink: 0;
            @media only screen and (max-width: 428px) {
                font-size: #{scaleValue(120)};
            }
        }

        &--copy {
            font-style: normal;
            font-weight: 200;
            font-size: #{scaleValue(25)};
            letter-spacing: #{scaleValue(0.16)};
            padding-left: #{scaleValue(180)};
            padding-right: #{scaleValue(120)};
            flex-shrink: 0;
            line-height: #{scaleValue(40)};
            width: #{scaleValue(820)};

            @media only screen and (max-width: 428px) {
                padding-left: 0;
                margin-top: #{scaleValue(130)};
                font-size: #{scaleValue(90)};
                line-height: #{scaleValue(120)};
                width: 100%;
            }
        }
    }

    &__btn {
        position: relative;
        background: none;
        margin-top: #{scaleValue(50)};

        @media only screen and (max-width: 428px) {
            margin-top: #{scaleValue(140)};
        }

        &::before {
            content: '';
            position: absolute;
            top: #{scaleValue(16)};
            left: #{scaleValue(180)};
            
            background: #EF5776;
            width:  #{scaleValue(24)};
            height: #{scaleValue(2)};
            border-radius: 3rem;

            @media only screen and (max-width: 428px) {
                width:  #{scaleValue(100)};
                height: #{scaleValue(10)};
                top: #{scaleValue(57)};
                left: #{scaleValue(560)};
            }
        }

        & a {
            text-decoration: none;
            color: inherit;
            font-weight: 400;
        }
    }
  }
  </style>