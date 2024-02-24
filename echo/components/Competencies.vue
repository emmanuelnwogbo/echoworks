<template>
    <div>
        <div class="competencies" id="competencies" v-if="!isLoading">
            <div class="competencies__top">
                <HoverCompImg />
                <div class="competencies__right">
                    <h3 class="competencies__h3">Competencies</h3>
                    <p class="competencies__copy">We are a brand consulting firm offering full-service marketing communications services to brands looking to build strong desire for their products and services and expand beyond their current territories</p>
                    <!--<div class="competencies__btn">
                        <NuxtLink to="/">View details</NuxtLink>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import utilityMixin from '@/mixins/utility.js';

    export default { 
        mixins: [utilityMixin],
        data() {
            return {
                isLoading: true,
            }
        },
        mounted() {
            this.isLoading = false;
            this.visible = true;
            this.setHomePageLoaded(this.visible);
        }
     }
</script>

<style lang="scss" scoped>
.competencies {
    position: relative;
    z-index: 2;
    background: #fff;
    padding-top: #{scaleValue(200)};

    &__top {
        display: flex;
        justify-content: space-between;
    }

    &__right {
        padding-top: #{scaleValue(120)};
    }

    &__h3 {
        font-size: #{scaleValue(70)};
        font-weight: 500;
        margin-bottom: #{scaleValue(40)};
    }

    &__copy {
        font-style: normal;
        font-weight: 200;
        font-size: #{scaleValue(25)};
        letter-spacing: #{scaleValue(0.16)};
        padding-left: #{scaleValue(180)};
        padding-right: #{scaleValue(120)};
        flex-shrink: 0;
        line-height: #{scaleValue(40)};
        width: #{scaleValue(820)};
    }

    &__btn {
        position: relative;
        background: none;
        margin-top: #{scaleValue(20)};

        padding-left:  #{scaleValue(200)};

        &::before {
            content: '';
            position: absolute;
            top: #{scaleValue(16)};
            right: #{scaleValue(460)};
            
            background: #EF5776;
            width:  #{scaleValue(18)};
            height: #{scaleValue(2)};
            border-radius: 3rem;
        }

        & a {
            text-decoration: none;
            color: inherit;
            font-weight: 300;
            font-size: #{scaleValue(20)};
        }
    }
}
</style>