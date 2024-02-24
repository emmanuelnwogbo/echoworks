<template>
    <div>
        <div class="competenciesmobile" id="competenciesmobile">
            <MobileRipplePhoto :imgitem="`oraimo_4.jpeg`"/>
            <div class="competenciesmobile__copy">
                <h2 class="competenciesmobile__copy--h2">Competencies</h2>
                <p class="competenciesmobile__copy--p">
                    We are a brand consulting firm offering full-service marketing communications services to brands looking to build strong desire for their products and services and expand beyond their current territories
                </p>
               <!--<div class="competenciesmobile__viewmore">
                    <span class="competenciesmobile__viewmore--btn">View Details</span>
                    <span class="competenciesmobile__viewmore--slash"></span>
               </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.competenciesmobile {
    margin-top: #{scaleValue(400)};

    &__copy {
        padding-left: #{scaleValue(130)};
        padding-right: #{scaleValue(70)};
        margin-top: #{scaleValue(180)};

        &--h2 {
            font-weight: 400;
            font-size: #{scaleValue(180)};
            margin-bottom: #{scaleValue(70)};
        }

        &--p {
            font-weight: 200;
            font-size: #{scaleValue(80)};
            line-height: #{scaleValue(130)};
        }
    }

    &__viewmore {
        position: relative;
        font-size: #{scaleValue(75)};
        margin-top: #{scaleValue(180)};
        font-weight: 300;

        &--slash {
            position: absolute;
            content: '';
            background: #ef5776;
            width: #{scaleValue(100)};
            height: #{scaleValue(5)};
            left: #{scaleValue(500)};
            top: #{scaleValue(50)};
        }
    }
}
</style>