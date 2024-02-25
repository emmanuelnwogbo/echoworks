<template>
    <div>
        <div class="header">
            <div class="header__logoarea header__area">
                <NuxtLink to="/">
                    <figure class="header__logo">
                        <img src="@/assets/imgs/logo.svg"/>
                    </figure>
                </NuxtLink>
            </div>

            <div class="header__menuarea header__area">
                <div class="header__menuitem">
                    <a href="#howwethink">How we think</a>
                </div>
                <div class="header__menuitem">
                    <a href="#competencies">Competencies</a>
                </div>
                <div class="header__menuitem">
                    <a href="#whoweare">Who we are</a>
                </div>
                <div class="header__menuitem">
                    <a href="https://works.echoafrica.co/">Our works</a>
                </div>
                <div class="header__menuitem" @click="open_link('https://billboards.echoafrica.co/')">
                    <div class="header__menuitem--item">Billboards</div>
                </div>
                <div class="header__menuitem">
                    <a href="#footer">Say Hello</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        open_link(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    background: rgba(241, 106, 131, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: #{scaleValue(15)} #{scaleValue(100)};

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 3;
    height: #{scaleValue(100)};

    &__area {
        display: flex;
        align-items: center;
    }

    &__logo {
        height: #{scaleValue(60)};
        display: flex;
        align-items: center;

        & img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }

    &__menuitem {
        margin-left: #{scaleValue(35)};

        &--item {
            text-decoration: none;
            color: rgba(255, 255, 255, 1);
            font-size: #{scaleValue(16)};
            font-size: 600;
            text-transform: capitalize;
            cursor: pointer;
        }

        & a {
            text-decoration: none;
            color: rgba(255, 255, 255, 1);
            font-size: #{scaleValue(16)};
            font-size: 600;
            text-transform: capitalize;
        }
    }
}
</style>