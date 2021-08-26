<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <div class="mainctn">
            <h3 class="mb-4">{{ $t('matching.weFinGodfather')}}</h3>
            <img :alt="$t('matching.weFinGodfather')" src="../assets/img/parrainboring.svg">
            <p class="mb-3 mt-4">{{ $t('matching.youCanContact')}}</p>
          <div class="info-match">
            <a class="info info--email mb-0"
               href="mailto:arthur.livingston@univ.lille.eu">
                <i class="fas fa-envelope mr-2"></i>
                arthur.livingston@univ.lille.eu
            </a><br>
          </div>
<!--            <a class="info info&#45;&#45;phone"-->
<!--               href="tel:+33627552136">-->
<!--                <i class="fas fa-phone mr-2"></i>-->
<!--                +33627552136-->
<!--            </a>-->
            <router-link to="/problem">
                <p class="mb-0 mt-4"><b>{{ $t('matching.aboutProblem')}}</b></p>
            </router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../scss/app-variables";
    @import "../scss/app";
    .info{
        font-size: 18px;
        &--email{color: $text-color;}
        &--phone{color: $second-color;}
      &-match{
        border-radius: 20px;
        background-color: $third-color;
        padding: 8px 18px;
      }
    }

</style>
