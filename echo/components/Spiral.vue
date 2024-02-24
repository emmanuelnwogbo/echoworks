<template>
    <div>
        <div class="jumbotron__spiral">

        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            const container = document.querySelector('.jumbotron__spiral');
            const loader = new THREE.TextureLoader();

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(40, (window.innerWidth/3) / (window.innerHeight/3), 0.1, 1000);

            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize((window.innerWidth/3),( window.innerHeight/3));
            renderer.setClearColor( 0xffffff, 0);

            container.appendChild(renderer.domElement);

            const geometry = new THREE.PlaneGeometry(23, 8, 15, 9);
            const material = new THREE.MeshBasicMaterial({
                map: loader.load('/jumbotronspiral.png'),
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
        }
    }
</script>

<style lang="scss" scoped>
.jumbotron {

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
}
</style>