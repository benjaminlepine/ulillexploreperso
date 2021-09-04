<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('help.needHelp')}}</p>
    <div class="mainctn">
      <img :alt="$t('wait.oneUndredDay')" class="help-img" src="../assets/img/lifebuoy.svg">
      <p class="mb-0 help-text mt-4">{{ $t('help.rdvOn')}}</p>
      <div class="mb-3"><a class="help-text-link" href="http://ulillgo.fr/" target="_blank">{{ $t('help.ulillGoLink')}}</a></div>
      <p class="mb-0 help-text">{{ $t('help.contactUs')}}</p>
      <a href="mailto:ulillexplore@univ-lille.fr" class="mb-0 mb-2 help-text-link">{{ $t('help.mail')}}</a>
      <router-link to="/home"><button class="btn explorebtn mt-4">{{ $t('wait.back')}}</button></router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../scss/app-variables";
@import "../scss/app";
.help{
  &-img{
    max-width: 80px;
  }
  &-text{
    font-weight: 600;
  }
  &-text-link{
    color: $clear-main-color;
    font-size: 22px;
  }
}
</style>
