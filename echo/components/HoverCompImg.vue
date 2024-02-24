<template>
    <div>
        <div class="hovercomp">
            <figure class="disp">

            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            var myAnimation = new hoverEffect({
                parent: document.querySelector('.disp'),
                intensity: 0.3,
                image1: 'oraimo_4.jpeg',
                image2: 'oraimo_9.jpg',
                displacementImage: '4.png',
                imagesRatio: 200/130
            });
        }
    }
</script>

<style lang="scss" scoped>
.hovercomp {
    width: #{scaleValue(500)};

    & figure {
        position: relative;
        width: #{scaleValue(500)};
        height: #{scaleValue(750)};
        cursor: pointer;

        & img {
            position: absolute;
            display: none;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    }
}
</style>