<template>
    <div class="ourworks" id="ourworks">
        <div class="ourworks__content">
            <section class="ourworks__section" v-for="(item, index) in items"
            :class="{}"
            :style="{}"
            >
                <figure @click="gotolink(item.link)">
                    <div class="ourworks__title">
                        <h1>{{ item.name }}</h1>
                    </div>
                    <img :src="item.img" />
                </figure>
            </section>
        </div>
    </div>
</template>

<script>
import url from '@/mixins/url.js';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            current: 0
        }
    },
    mixins: [url],
    methods: {
        ...mapActions('loaded', ['setMobileWorksLoaded']),
        gotolink(link) {
            window.location.href = `${this.url}/${link}`;
        },
        isElementAtTop(element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 0;
        },
        handleVisibility() {
            const ourworks = document.getElementById('ourworks');
            ourworks.classList.add('visible');

            this.setMobileWorksLoaded();
        },
        handleScroll() {
            const sections = document.querySelectorAll('.ourworks__section');

            sections.forEach((section, index) => {
                const section_figure = section.firstElementChild;

                if (this.isElementAtTop(section)) {
                    section_figure.style.position = 'fixed';
                    section_figure.style.top = '0';
                    section_figure.style.left = '0';
                } else if (!this.isElementAtTop(section)) {
                    section_figure.style.position = 'relative';
                    section_figure.style.top = '0';
                    section_figure.style.left = '0';
                }
            } )
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('DOMContentLoaded', this.handleVisibility);

        this.setMobileWorksLoaded();

        if (this.mobile_works_loaded) {
            const ourworks = document.getElementById('ourworks');
            ourworks.classList.add('visible');
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        ...mapState({
            mobile_works_loaded: state => state.loaded.mobileWorksLoaded,
        }),
        items: function() {
            return [
                {
                    link: 'moneypigeon',
                    id: 0,
                    name: 'Money Pigeon',
                    img: 'https://res.cloudinary.com/dqmgqhman/image/upload/q_10/v1687504409/CRYPTO_r6v7kc.jpg'
                },
                {
                    link: 'oraimo',
                    id: 1,
                    name: 'Oraimo open audio',
                    img: 'https://res.cloudinary.com/dqmgqhman/image/upload/q_10/v1687504357/open-audio-newArtboard-2_m3erin.png'
                },
                {
                    link: 'oraimowaye',
                    id: 2,
                    name: 'Oraimo Waye',
                    img: 'https://res.cloudinary.com/dqmgqhman/image/upload/q_10/v1687504445/O-11_u80wtb.jpg'
                },
                {
                    link: 'pernodricard',
                    id: 3,
                    name: 'Pernod Ricard',
                    img: 'https://res.cloudinary.com/dqmgqhman/image/upload/q_10/v1687504482/Screenshot_2023-02-02_at_03.34.22_uszym3.png'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.ourworks {
    background: $footerblack;
    min-height: 100vh;

    visibility: hidden;

    &.visible {
        visibility: visible;
    }

    &__title {
        position: absolute;
        top: 0;
        left: 0;
        height: #{scaleValue(3250)};
        width: 100vw;
        background: rgba(0, 0, 0, .6);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        & h1 {
            color: $white;
            text-transform: uppercase;
            font-size: #{scaleValue(170)};
            font-weight: 500;
            transform: translateY(#{scaleValue(-300)});
            text-align: center;
        }
    }
    
    &__content {
        margin-top: #{scaleValue(315)};
        overflow: hidden;
    }

    &__section {
        height: #{scaleValue(3250)};
        position: relative;

        & figure {
            height:  #{scaleValue(3250)};
            width: 100vw;
            position: relative;

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>