<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <div class="mainctn">
            <h3 class="mb-0">{{ $t('matching.weFinGodfather')}}</h3>
            <img :alt="$t('matching.weFinGodfather')" src="../assets/img/parrainboring.svg">
            <p class="mb-0 mt-4">{{ $t('matching.youCanContact')}}</p>
            <p class="info info--email mb-0"><i class="fas fa-envelope mr-2"></i>arthur.livingston@univ.lille.eu</p>
            <p class="info info--phone"><i class="fas fa-phone mr-2"></i>+33627552136</p>
            <p class="mb-0"><b>{{ $t('matching.aboutProblem')}}</b></p>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../scss/app-variables";
    @import "../scss/app";
    .info{
        font-size: 24px;
        &--email{color: $clear-main-color;}
        &--phone{color: $second-color;}
    }

</style>
