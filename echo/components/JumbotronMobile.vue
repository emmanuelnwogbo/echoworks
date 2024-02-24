<template>
    <div>
        <div class="jumbotronmobile">
            <span class="jumbotronmobile__copy">
                The young and vibrant creative collective, 
                adopting a culture forward
                approach to brand building
            </span>

            <figure class="jumbotronmobile__image">
                <img src="@/assets/imgs/spiralsvg.svg"/>
            </figure>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.jumbotronmobile {
    position: relative;
    font-size: #{scaleValue(130)};
    line-height: #{scaleValue(178)};
    display: flex;
    flex-direction: column;
    font-weight: 300;
    padding-left: #{scaleValue(130)};
    padding-right: #{scaleValue(100)};
    padding-top: #{scaleValue(1000)};
    height: #{scaleValue(2500)};

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        height: #{scaleValue(1600)};
        width: #{scaleValue(1600)};
        opacity: .7;

        & img {
            object-fit: cover;
            height: 100;
            width: 100%;
        }
    }
}
</style>