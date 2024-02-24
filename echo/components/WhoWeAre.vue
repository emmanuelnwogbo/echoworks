<template>
    <div>
        <div class="whoweare" id="whoweare" v-if="!isLoading">
            <div class="whoweare__left">
                <h3 class="whoweare__h3">Who We Are...</h3>
                <p class="whoweare__copy">Passionate Optimists</p>
                <p class="whoweare__crazyen">Crazy enough to believe, tenacious enough to make it happen.</p>
                <div class="whoweare__boxes">
                    <div class="whoweare__box">
                        <p class="header">Bold</p>
                        <p class="sub">Unafraid to re-imagine brands in a way others won’t consider.</p>
                    </div>
                    <div class="whoweare__box">
                        <p class="header">Direct</p>
                        <p class="sub">Unafraid to re-imagine brands in a way others won’t consider.</p>
                    </div>
                    <div class="whoweare__box">
                        <p class="header">With Heart</p>
                        <p class="sub">Unafraid to re-imagine brands in a way others won’t consider.</p>
                    </div>
                </div>
            </div>
            <div class="whoweare__right">
                <figure class="whoweare__photo">

                </figure>
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

            setTimeout(() => {
                const container = document.querySelector('.whoweare__photo');
                const loader = new THREE.TextureLoader();

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(70, 500 / 700, 0.1, 1000);

                const renderer = new THREE.WebGL1Renderer();
                renderer.setSize(500, 750);

                container.appendChild(renderer.domElement);

                const geometry = new THREE.PlaneGeometry(6, 8, 15, 9);
                const material = new THREE.MeshBasicMaterial({
                    map: loader.load('O-2.jpg'),
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
    
                        const anim1 = 0.25 * Math.sin(x + time * 0.7);
                        const anim2 = 0.35 * Math.sin((x * 1) + time * 0.7);
                        const anim3 = 0.1 * Math.sin((y * 15) + time * 0.7);
    
                        geometry.attributes.position.setZ(i, anim1 + anim2 + anim3);
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
                }, 1000);
            }, 1000)
        }
    }
</script>

<style lang="scss">
    .whoweare {
        position: relative;
        background: #fff;
        z-index: 2;
        display: flex;
        justify-content: space-between;

       height: #{scaleValue(680)};

        &__h3 {
            font-size: #{scaleValue(70)};
            font-weight: 500;
            margin-bottom: #{scaleValue(20)};
        }

        &__copy {
            font-style: normal;
            font-weight: 300;
            font-size: #{scaleValue(30)};
            letter-spacing: #{scaleValue(0.16)};
            padding-left: #{scaleValue(40)};
            padding-right: #{scaleValue(120)};
            flex-shrink: 0;
            line-height: #{scaleValue(40)};
            width: #{scaleValue(820)};
        }

        &__crazyen {
            font-weight: 200;
            font-size: #{scaleValue(23)};
            padding-left: #{scaleValue(40)};
        }

        &__left {
            padding-top: #{scaleValue(180)};
            padding-left: #{scaleValue(120)};
        }

        &__right {
            position: relative;
            transform: translateY(#{scaleValue(-250)});
            padding-top: #{scaleValue(120)};
        }

        &__boxes {
            display: flex;
            margin-top: #{scaleValue(30)};
            padding-left: #{scaleValue(40)};
            justify-content: space-between;
        }

        &__box {
            width: #{scaleValue(300)};
            flex-shrink: 0;
            padding-right: #{scaleValue(40)};


            & p {

                &.header {
                    font-weight: 500;
                    font-size: #{scaleValue(15)};
                    margin-bottom: #{scaleValue(10)};
                }

                &.sub {
                    font-weight: 200;
                    font-size: #{scaleValue(15)};
                }
            }
        }
    }
</style>