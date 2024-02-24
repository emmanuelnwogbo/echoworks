<template>
    <div>
        <div class="whowearemobile">
            <div class="whowearemobile__photoarea">
                <div></div>
                <MobileRipplePhoto :imgitem="`O-2.jpg`"/>
            </div>
            <div class="whowearemobile__copy" id="whowearemobile__copy">
                <h2 class="whowearemobile__copy--h2">Who We Are...</h2>
                <div class="whowearemobile__copy--padleft">
                    <h3 class="whowearemobile__copy--h3">Passionate Optimists</h3>
                    <p class="whowearemobile__copy--p">Crazy enough to believe, tenacious enough to make it happen.</p>
                </div>
            </div>

            <div class="whowearemobile__cards">
                <div class="whowearemobile__card">
                    <p class="header">Bold</p>
                    <p class="subheader">
                        Unafraid to re-imagine brands in a way others won’t consider.
                    </p>
                </div>

                <div class="whowearemobile__card">
                    <p class="header">Direct</p>
                    <p class="subheader">
                        Straightforward, matter of fact. Transparent, and committed
                    </p>
                </div>

                <div class="whowearemobile__card">
                    <p class="header">With Heart</p>
                    <p class="subheader">
                        The passion and conviction to create experiences that truly moves people
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.whowearemobile {
    margin-top: #{scaleValue(400)};

    &__photoarea {
        display: flex;
        justify-content: space-between;
    }

    &__copy {

        padding-right: #{scaleValue(130)};
        padding-left: #{scaleValue(70)};
        margin-top: #{scaleValue(180)};

        &--h2 {
            font-weight: 400;
            font-size: #{scaleValue(180)};
            margin-bottom: #{scaleValue(100)};
        }

        &--h3 {
            font-weight: 300;
            font-size: #{scaleValue(110)};
            margin-bottom: #{scaleValue(20)};
        }

        &--p {
            font-size: #{scaleValue(70)};
            margin-bottom: #{scaleValue(70)};
            font-weight: 300;
        }

        &--padleft {
            padding-left: #{scaleValue(100)};
        }
    }
    &__card {
        padding: #{scaleValue(70)} #{scaleValue(165)};

        & p {

            &.header {
                font-weight: 400;
                font-size: #{scaleValue(70)};
                margin-bottom: #{scaleValue(50)};
            }

            &.subheader {
                font-weight: 300;
                font-size: #{scaleValue(66)};
                margin-bottom: #{scaleValue(70)};
                line-height: #{scaleValue(100)};
            }
        }
    }
}
</style>