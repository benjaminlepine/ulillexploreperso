<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <div class="mainctn">
            <img :alt="$t('wait.oneUndredDay')" src="../assets/img/hourglass.svg">
            <p class="mb-0 mt-4 sorry">{{ $t('wait.sorry')}}</p>
            <p class="mb-0 mb-2 sorry-text">{{ $t('wait.oneUndredDay')}}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../scss/app-variables";
    @import "../scss/app";
    .sorry{
        color: $clear-main-color;
        font-size: 22px;
        &-text{
            font-weight: 600;
        }
    }
</style>
