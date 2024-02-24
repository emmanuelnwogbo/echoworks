<template>
    <div>
      <div class="headerarea">
        <div class="headerarea__desktop">
          <Header />
        </div>
        <div class="headerarea__mobile">
          <DropDown />
        </div>
      </div>
      <Nuxt />
    </div>
  </template>

  <style lang="scss" scoped>
  .test {
    height: 100vh;
    background: red;
    padding-top: 200px;
    font-size: 100px;
  }

  .headerarea {

    &__desktop {
      display: block;

      @media only screen and (max-width: 428px) {
        display: none;
      }
    }

    &__mobile {
      display: none;

      @media only screen and (max-width: 428px) {
        display: block;
        z-index: 24;
        position: fixed;
        top: 0;
        left: 0;
      }
    }
  }
  </style>