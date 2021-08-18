<template>
  <div class="rgpd-paragraph">
    <h4>{{ $t('rgpd.titleGodChild')}}</h4>
    <p>{{ $t('rgpd.rgpdGFC01')}}</p>
    <p>{{ $t('rgpd.rgpdGFC02')}}</p>
    <p>{{ $t('rgpd.rgpdGFC99')}}</p>
    <p>{{ $t('rgpd.rgpdGFC04')}}</p>
    <p>
      {{ $t('rgpd.rgpdGFC05')}}
      <a href="http://cnil.fr/">{{ $t('rgpd.rgpdGFC06')}}</a>{{ $t('rgpd.rgpdGFC07')}}
    </p>
    <p>
      {{ $t('rgpd.rgpdGFC08')}}
      <a href="mailto:ulillexplore@univ-lille.fr">{{ $t('rgpd.rgpdGFC09')}}</a>
      {{ $t('rgpd.rgpdGFC10')}}
      <a href="mailto:dpo@univ-lille.fr">{{ $t('rgpd.rgpdGFC11')}}</a>
    </p>
    <p>{{ $t('rgpd.rgpdGFC12')}}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";
</style>
