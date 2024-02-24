<template>
    <div class="jumbotron">

        <div class="jumbotron__loading" id="page-loading" :class="{ loaded: homePageLoaded.length >= 7 }">
            <figure>
                <img src="@/assets/imgs/logo.svg"/>
            </figure>
            
            <p id="page-loading-counter" v-if="!homePageLoaded.length">0</p>
            <p id="page-loading-counter" v-if="homePageLoaded.length">{{ homePageLoaded.length <= 6 ? `${homePageLoaded.length}0` : 100 }}</p>
        </div>

        <div class="jumbotron__desktop" v-if="!isLoading">
            <div class="jumbotron__background" :class="{ visible }">

            </div>
            <div class="jumbotron__content" :class="{ visible }">
                <div class="jumbotron__copy">
                    <span class="jumbotron__copy--line">The young and vibrant creative</span>
                    <span class="jumbotron__copy--line scroll-trigger-we-are-echo">collective, adopting</span>
                    <span class="jumbotron__copy--line">a culture forward</span>
                    <span class="jumbotron__copy--line">approach to brand building</span>
                </div>
            </div>

            <div class="jumbotron__scolltext--area">
                <div class="jumbotron__scolltext" id="jumbotron__scolltext">
                    <p class="jumbotron__weareecho black">echo africa</p>
                    <p class="jumbotron__weareecho transparent">echo africa</p>
                </div>

            <div class="jumbotron__howwethink" id="howwethink">
                <div class="jumbotron__howwethink--header">
                    How we think
                </div>
                <div class="jumbotron__howwethink--copy">
                    <p><span>As bold challengers,</span> we believe our thinking needs to be transformed to create things people actually want and welcome. We believe that people are the core of any business, therefore understanding people, their barriers, aspirations and problems is the first step to innovative solutioning.</p>

                    <!--<div class="jumbotron__btn">
                            <NuxtLink to="/howwethink">View details</NuxtLink>
                        </div>-->
                 </div>
                </div>
            </div>
        </div>


        <div class="jumbotron__desktop">
            <Competencies />
            <WhoWeAre />
            <Brands />
            <EchoFooter />
        </div>

        <Mobile />
    </div>
</template>

<script>
import jumbotronMixin from '@/mixins/jumbotron.js';
import utilityMixin from '@/mixins/utility.js';

export default {
    mixins: [jumbotronMixin, utilityMixin],
    mounted() {
        this.isLoading = false;

        setTimeout(() => {
            document.addEventListener('DOMContentLoaded', () => {
                const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

                tl.to('.jumbotron__copy--line', {
                    stagger: .3,
                    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                    opacity: 1,  
                    duration: 1
                });

                gsap.to('.jumbotron__scolltext', {
                    x: '-530%',
                    ease: 'power4.inOut',
                    duration: 14,
                    scrollTrigger: {
                        trigger: '.jumbotron__scolltext',
                        start: '-=800', // Offset of 200 pixels from the original position
                        end: '+=1000', //
                        scrub: true
                    }
                });  
            })

            const container = document.querySelector(".jumbotron__background");
            const loader = new THREE.TextureLoader();
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGL1Renderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);
            const geometry = new THREE.PlaneGeometry(15, 10, 15, 9);
            const material = new THREE.MeshBasicMaterial({
                map: loader.load("spiralwhite.png"),
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            camera.position.z = 5;
            const count = geometry.attributes.position.count;
            const clock = new THREE.Clock();
            function animate() {
                const time = clock.getElapsedTime();
                for (let i = 0; i < count; i++) {
                    const x = geometry.attributes.position.getX(i);
                    const y = geometry.attributes.position.getY(i);
                    const anim1 = 0.25 * Math.sin(x + time * 0.9);
                    geometry.attributes.position.setZ(i, anim1);
                    geometry.computeVertexNormals();
                    geometry.attributes.position.needsUpdate = true;
                }
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();
            
            setTimeout(() => {
                this.visible = true;
                this.setHomePageLoaded(this.visible);
            }, 7000);
        }, 1000);
    }
}
</script>

<style lang="scss" scoped>
.jumbotron {

    &__loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #fff;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        padding: 0 #{scaleValue(300)};
        font-size: #{scaleValue(55)};
        align-items: center;

        transition: all 1s ease;

        &.loaded {
            transform: translateY(-100%);
        }

        & figure {

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        & p {
            color: #F16961;
        }
    }
    
    &__background {
        opacity: 0;
        height: #{scaleValue(1000)};
        width: 100vw;
        transition: all .5s ease;

        &.visible {
            opacity: 1;
        }
    }

    &__desktop {

        @media only screen and (max-width: 428px) {
            display: none;
            background: red;
        }
    }

    &__content {
        position: fixed;
        height: #{scaleValue(1000)};
        width: 100vw;
        top: 0;
        left: 0;
        padding: #{scaleValue(160)};
        padding-top: #{scaleValue(380)};
        z-index: 1;
        transition: all .5s ease;
        opacity: 0;

        &.visible {
            opacity: 1;
        }
    }

    &__copy {
        color: $jumbotron-black;
        display: flex;
        flex-direction: column;
        font-weight: 300;
        font-size: #{scaleValue(60)};
        letter-spacing: #{scaleValue(0.1)};
        line-height: #{scaleValue(90)};
        position: relative;
        padding-bottom: #{scaleValue(100)};
    }

    &__spiral {
        position: absolute;
        top: 0;
        right: 0;
        height: #{scaleValue(800)};
        width: #{scaleValue(800)};

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

    &__scolltext {
        padding: #{scaleValue(100)} 0;
        display: flex;
        //transform: translateX(#{scaleValue(200)});
        transition: all .3s ease;
        margin-left: #{scaleValue(1300)};

        &--area {
            position: relative;
            z-index: 2;
            background:#fff;
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

            & span {
                font-weight: 500;
            }

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