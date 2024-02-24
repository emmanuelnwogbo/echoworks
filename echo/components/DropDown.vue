<template>
    <div>
      <div class="dropdown">
        
        <div class="dropdown__body">

            <div class="dropdown__top">
                <div class="dropdown__top--left">
                    <NuxtLink to="/">
                        <figure class="dropdown__logo">
                            <img src="@/assets/imgs/logo.svg"/>
                        </figure>
                    </NuxtLink>
                </div>

                <div class="dropdown__top--right">
                    <div class="dropdown__close" @click="toggleDropdown">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="dropdown__content" ref="dropdowncontent">
                <div class="dropdown__links">
                    <div class="dropdown__link" :class="{
                        current: true
                    }" @click="closedropdown"><a href="#howwethink">How We Think</a></div>
                    <div class="dropdown__link" @click="closedropdown"><a href="#competenciesmobile">Competencies</a></div>
                    <div class="dropdown__link" @click="closedropdown"><a href="#whowearemobile__copy">Who We Are</a></div>
                    <div class="dropdown__link" @click="closedropdown('/ourworksmob')"><a>0ur works</a></div>
                    <div class="dropdown__link" @click="open_link('https://billboards.echoafrica.co/')"><div>Billboards</div></div>
                    <div class="dropdown__link" @click="scrollToBottom"><div>Say Hello</div></div>
                </div>
                <div class="dropdown__contacts">
                    <div class="dropdown__contact">
                        <span class="dropdown__contact--label">Phone</span>
                        <span class="dropdown__contact--match">03-5829-6856</span>
                    </div>

                    <div class="dropdown__contact">
                        <span class="dropdown__contact--label">Enquiries</span>
                        <span class="dropdown__contact--match">hello@echo.co</span>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="dropdown__strokes">
            <div class="dropdown__stroke"></div>
            <div class="dropdown__stroke"></div>
            <div class="dropdown__stroke"></div>
            <div class="dropdown__stroke"></div>
        </div>

        <div class="dropdown__background"></div>

      </div>
    </div>
</template>
  
<script>
import dropdown from '@/mixins/dropdown.js';

export default {
    mixins: [dropdown],
    methods: {
        open_link(url) {
            window.open(url, '_blank');
            this.closedropdown();
        },
        scrollToBottom() {
            this.closedropdown();
            window.scrollTo(0,document.body.scrollHeight);
        },
        closedropdown(route) {
            if (route) {
                this.$router.push(route)
            }

            const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .2  }});

            tl.to('.dropdown__links', {
                'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                opacity: 0, 
                y: 'translateY(100px)', 
                duration: .3
            });

            tl.to('.dropdown__contacts', {
                'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                opacity: '0', 
                y: 'translateY(100px)',
                duration: .3
            });

            tl.to('.dropdown__content', {
                height: '0',
                'padding': '0',
                'marginTop': '0',
                duration: .1
            });

            tl.to('.dropdown__background', {
                height: '0',
                duration: .8
            });

            this.dropdownOpen = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.dropdown {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 5;

    &__body {
        position: relative;
        z-index: 3;
    }

    &__top {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: #{scaleValue(25)} #{scaleValue(200)};
        padding-top: #{scaleValue(60)};
        background: linear-gradient(89.85deg, #EF5776 44.74%, #F48939 121.53%);
    }

    &__logo {
        height: #{scaleValue(60)};

        & img {
            height: #{scaleValue(60)};
            width: auto
        }

        @media only screen and (max-width: 428px) {
            height: #{scaleValue(230)};
            transform: translateX(#{scaleValue(-100)});
            display: flex;
            align-items: center;

            & img {
                height: #{scaleValue(170)};
                width: auto
            }
        }
    }

    &__close {
        display: flex;
        flex-direction: column;
        height: #{scaleValue(60)};
        justify-content: space-between;
        padding: #{scaleValue(23)} 0;
        cursor: pointer;

        @media only screen and (max-width: 428px) {
            height: #{scaleValue(100)};
        }

        & span {
            display: inline-block;
            height: #{scaleValue(3)};
            width: #{scaleValue(40)};
            background: $white2;
            border-radius: 3rem;

            @media only screen and (max-width: 428px) {
                height: #{scaleValue(10)};
                width: #{scaleValue(140)};
            }
        }
    }

    &__content {
        position: relative;
        height: #{scaleValue(650)};
        padding: #{scaleValue(25)} #{scaleValue(250)};
        display: flex;
        justify-content: space-between;
        color: rgba(0, 0, 0, .9);
        z-index: 2;
        margin-top: #{scaleValue(100)};

        margin: 0;
        padding: 0;
        height: 0;

        @media only screen and (max-width: 428px) {
            margin-top: #{scaleValue(50)};
            flex-direction: column;
        }
    }

    &__links {
        font-size:  #{scaleValue(50)};
        line-height:  #{scaleValue(80)};

        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        opacity: 0;
        transform: translateY(100px);

        @media only screen and (max-width: 428px) {
            font-size:  #{scaleValue(140)};
            line-height:  #{scaleValue(260)};
        }
    }

    &__link {
        cursor: pointer;

        & a {
            text-decoration: none;
            color: rgba(0, 0, 0, .9);
        }

        &.current {
            position: relative;

            &::before {
                content: '';
                top: #{scaleValue(67)};
                position: absolute;
                left:  #{scaleValue(4)};
                height: #{scaleValue(2)};
                width: 30%;
                background: $white2;
                border-radius: 3rem;

                transition: all 1s ease-in;
                animation: growLinkLine 1s ease-in;

                @media only screen and (max-width: 428px) {
                    top: #{scaleValue(210)};
                    height: #{scaleValue(15)};
                 }
            }
        }
    }

    &__contacts {
        font-size:  #{scaleValue(15)};

        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        opacity: 0;
        transform: translateY(100px);

        @media only screen and (max-width: 428px) {
            font-size:  #{scaleValue(60)};
            transform: translateY(100px);
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;
        margin-bottom: #{scaleValue(50)};
        cursor: pointer;

        

        &--label {
            margin-bottom: #{scaleValue(5)};
            color: rgba(0,0,0,.7);
            font-weight: 500;
        }
    }

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        z-index: 1;
        background: linear-gradient(89.85deg, #EF5776 44.74%, #F48939 121.53%);

        height: 0;
    }

    &__strokes {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    &__stroke {
        width: 25%;
        height: 100%;
        background: rgba(0,0,0,0.7);

        height: 0;
    }
}
</style>
  