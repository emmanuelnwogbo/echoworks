<template>
    <div>
        <div class="mobile">
            <JumbotronMobile />
            <SolutionsMobile />
            <CompetenciesMobile />
            <WhoWeAreMobile />
            <Brands />
            <EchoFooter />
        </div>
    </div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>
.mobile {
    padding-top: #{scaleValue(380)};
    display: none;

    @media only screen and (max-width: 428px) {
        display: block;
    }
}
</style>