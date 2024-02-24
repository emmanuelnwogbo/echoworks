<template>
    <div>
        <div class="mobileripplephoto">
            <figure class="mobileripplephoto__fig">
                <img :src="imgitem"/>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgitem']
}
</script>

<style lang="scss" scoped>
.mobileripplephoto {


    &__fig {
        width: #{scaleValue(1450)};
        height: #{scaleValue(2400)};

        & img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
}
</style>