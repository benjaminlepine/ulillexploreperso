<template>
  <!-- Ambassador section -->
  <div class="profile-ctn profile-ctn-ambassador">
    <div class="d-flex justify-content-between">
      <div>
        <p class="mb-0 profile-title text-left"><b>{{ $t('home.ambassador')}}</b></p>
        <p class="mb-0 text-left">{{ $t('home.shareYourExperience')}}</p>
      </div>
      <img class="profile-picto" :alt="$t('home.findYourGodfather')" src="../assets/img/map.svg">
    </div>
    <!-- Si ambassadeur -->
    <div v-if="ambassador">
      <p v-if="ambassador.lastSubmit" class="text-left mt-2 font-weight-bold mb-3"> {{ $t('home.lastUpdate')}}:{{ " " + lastSubmitDate() }}</p>
      <p class="text-left mt-2 font-weight-bold mb-3">{{ $t('profile.isAmbassador')}}</p>
      <router-link to="/becomeAmbassador" class="btn explorebtn mb-3">{{ $t('profile.seeMyForm')}}</router-link>
    </div>
    <!-- Si PAS ambassadeur -->
    <div v-else>
      <p class="mb-0 font-weight-bold mb-3" v-html="$t('profile.becomeAmbassador')"></p>
      <router-link to="/ambassador" class="profile-card d-flex justify-content-between mt-2">
        <div>
          <h5 class="mb-0 text-left">{{ $t('home.ambassador')}}</h5>
          <p class="mb-0 text-left ">{{ $t('home.shareYourExperience')}}</p>
        </div>
        <img :alt="$t('home.shareYourExperience')" class="ml-2" src="../assets/img/postal.svg">
      </router-link>
    </div>
  </div>
</template>

<script>

import { utils } from '../utils';

export default {
  name: 'AmbassdorComponent',
  props: {},
  data () {
    return {
      ambassador: this.$store.getters['user/ambassador'],
    }
  },
  watch: {},
  methods: {
    lastSubmitDate(){
      if (this.ambassador.lastSubmit){
        const date = new Date(this.ambassador.lastSubmit);
        return [utils.pad(date.getDate()), utils.pad(date.getMonth()), utils.pad(date.getFullYear())].join('/');
      }
      return null;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";


</style>
