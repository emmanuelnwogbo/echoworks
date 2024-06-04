<template>
    <div>
        <footer class="footer" id="footer" v-if="!isLoading">
            <div class="footer__left">
                <figure class="footer__logo">
                    <img src="@/assets/imgs/logo.svg"/>
                </figure>

                <h2 class="footer__h2">
                    <span>We Would Love</span>
                    <span>To Hear From You</span>
                </h2>

                <p class="footer__feelfree">
                    Feel free to reach out if you want to collaborate
                </p>
                <p class="footer__feelfree">
                    with us, or simply have a chat
                </p>

                <span class="footer__email">
                    hello@echoafrica.co
                </span>

                <!--<span class="footer__bbe">
                    A B-BBEE Level 2 contributor
                </span>-->
            </div>

            <div class="footer__right" id="footer__right">

                <div class="footer__rightarea">
                    <div class="footer__rightarea--header">
                        <span class="footer__small">Follow Us</span>
                    </div>

                    <div class="footer__socialitems">
                        <a class="footer__socialitems--svg" target="_blank" href="https://www.linkedin.com/company/echoafrica/">
                            <svg class="linkedin">
                                <use xlink:href="@/assets/imgs/sprite.svg#icon-linkedin"/>
                            </svg>
                        </a>
                        <a class="footer__socialitems--svg" target="_blank" href="https://instagram.com/echoafrica.co?igshid=Zjc2ZTc4Nzk=">
                            <svg class="instagram">
                                <use xlink:href="@/assets/imgs/sprite.svg#icon-instagram"/>
                            </svg>
                        </a>
                        <a class="footer__socialitems--svg" target="_blank" href="https://m.facebook.com/echoafricaa.co?locale=hi_IN">
                            <svg class="facebook">
                                <use xlink:href="@/assets/imgs/sprite.svg#icon-facebook"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="footer__rightarea">
                    <div class="footer__rightarea--header">
                        <span class="footer__small">Address</span>
                    </div>

                    <div class="footer__addresses">
                        <!--<span class="footer__small">The Culture Foundry Co</span>
                        <span class="footer__small">C/0 Workshop17</span>
                        <span class="footer__small">146 Campground Rd</span>-->
                        <span class="footer__small">13 Chief Albert Iyorah Street, Lekki Lagos.</span>
                    </div>
                </div>

                <div class="footer__rightarea">
                    <span class="footer__yellow">
                        <NuxtLink to="/privacy"></NuxtLink>
                    </span>
                </div>

                <div class="footer__rightarea">
                    <span class="footer__yellow">
                        <NuxtLink to="paia"></NuxtLink>
                    </span>
                </div>

            </div>
        </footer>
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
        },
        methods: {
            open_link(url) {
                window.open(url, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background: #000;
    color: $white2;

    display: flex;
    justify-content: space-between;
    padding: #{scaleValue(100)} #{scaleValue(200)};

    z-index: 2;

    @media only screen and (max-width: 428px) {
        flex-direction: column;
        padding: #{scaleValue(100)} #{scaleValue(100)};
    }

    &__left {
        display: flex;
        flex-direction: column;
    }

    &__logo {
        height: #{scaleValue(65)};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: #{scaleValue(10)};

        @media only screen and (max-width: 428px) {
            height: #{scaleValue(150)};
            margin-bottom: #{scaleValue(50)};
        }

        & img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            transform: translateX(#{scaleValue(-102)});

            @media only screen and (max-width: 428px) {
                transform: translateX(#{scaleValue(-552)});
            }
        }
    }

    &__feelfree {
        opacity: .6;
        margin-bottom: #{scaleValue(7)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(70)};
            line-height: #{scaleValue(100)};
        }
    }

    &__email {
        text-decoration: underline;
        font-size: #{scaleValue(14)};
        margin-top: #{scaleValue(17)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(60)};
            margin-top: #{scaleValue(60)};
            margin-bottom: #{scaleValue(60)};
        }
    }

    &__bbe {
        font-size: #{scaleValue(17)};
        margin-top: #{scaleValue(20)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(60)};
            margin-bottom: #{scaleValue(60)};
        }
    }

    &__h2 {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: #{scaleValue(35)};
        line-height: #{scaleValue(47)};
        margin-bottom: #{scaleValue(15)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(100)};
            line-height: #{scaleValue(140)};
        }
    }

    &__right {
        display: flex;
        flex-direction: column; 
    }

    &__rightarea {
        display: flex;
        flex-direction: column; 
        margin-bottom: #{scaleValue(30)};

        &--header {
            font-size: #{scaleValue(14)};
            margin-bottom: #{scaleValue(16)};

            @media only screen and (max-width: 428px) {
                font-size: #{scaleValue(80)};
                margin-bottom: #{scaleValue(90)};
            }
        }
    }

    &__socialitems {
        display: flex;
        align-items: center;

        &--svg {
            width: #{scaleValue(35)};
            height: #{scaleValue(35)};
            display: flex;
            justify-content: center;
            align-items: center;
            background: $white2;
            border-radius: 100%;
            cursor: pointer;
            margin-right: #{scaleValue(40)};

            @media only screen and (max-width: 428px) {
                width: #{scaleValue(140)};
                height: #{scaleValue(140)};
                margin-right: #{scaleValue(100)};
            }

            & svg {
                width: #{scaleValue(20)};
                height: #{scaleValue(20)};

                @media only screen and (max-width: 428px) {
                    width: #{scaleValue(80)};
                    height: #{scaleValue(80)};
                }

                &.linkedin {
                    
                }

                &.instagram {

                }

                &.facebook {

                }
            }
        }
    }

    &__addresses {
        display: flex;
        flex-direction: column; 
        line-height: #{scaleValue(25)};
        font-size: #{scaleValue(14)};

        @media only screen and (max-width: 428px) {
            font-size: #{scaleValue(60)};
            line-height: #{scaleValue(120)};
        }
    }

    &__small {
        opacity: .8;
    }
}
</style>