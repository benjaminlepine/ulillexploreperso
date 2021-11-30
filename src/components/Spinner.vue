<template>
    <div class="spinner-container">
        <div class="spinner-shadow"/>
        <div class="spinner-middle">
            <div class="spinner round"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Spinner',
}
</script>

<style lang="scss" scoped>
    @import "../scss/_app-variables.scss";
    @import "../scss/app.scss";

    $spinner-color: $second-color;
    $spinner-accent: $third-color;
    $spinner-size: 30px;

    @import "./node_modules/scss-spinners/spinners";

    $size: 30px;

    .spinner-container{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
        .spinner-shadow {
            background-color: #1D1D1D;
            opacity: 0.6;
            position: fixed;
            top: 0;
            min-height: 100%;
            min-width: 100%;
        }
        .spinner-middle {
            position: absolute;
            top: calc(50% - #{$size / 2});
            left: calc(50% - #{$size / 2});
            z-index: 2;
        }
    }
</style>