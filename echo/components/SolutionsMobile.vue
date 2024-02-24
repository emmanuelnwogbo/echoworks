<template>
    <div>
        <div class="solutionsmobile">
            <div class="solutionsmobile__scrolltextarea">
                <p class="solutionsmobile__scrolltextarea--black">echo africa</p>
                <p class="solutionsmobile__scrolltextarea--transparent">echo africa</p>
            </div>
            <div class="solutionsmobile__copy">
                <h2 class="solutionsmobile__copyh2">Solutions</h2>
                <p class="solutionsmobile__copyp">
                    <span>As bold challengers, </span>we believe our thinking needs to be transformed to create things people actually want and welcome. We believe that people are the core of any business, therefore understanding people, their barriers, aspirations and problems is the first step to innovative solutioning.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.solutionsmobile {
    padding-left: #{scaleValue(130)};
    padding-right: #{scaleValue(100)};
    overflow: hidden;

    &__scrolltextarea {
        display: flex;
        font-size: #{scaleValue(300)};
        font-weight: 500;
        margin-bottom: #{scaleValue(300)};

        &--black {
            flex-shrink: 0;
            transform: translateX(#{scaleValue(-120)});
        }

        &--transparent {
            flex-shrink: 0;
            color: transparent;
            -webkit-text-stroke: #EF5776;
            -webkit-text-stroke-width: 1px;
            margin-left: #{scaleValue(120)};
        }
    }

    &__copyh2 {
        font-weight: 300;
        font-size: #{scaleValue(120)};
        margin-bottom: #{scaleValue(110)};
    }

    &__copyp {
        font-weight: 200;
        font-size: #{scaleValue(80)};
        line-height: #{scaleValue(130)};

        & span {
            font-weight: 500;
        }
    }
}
</style>