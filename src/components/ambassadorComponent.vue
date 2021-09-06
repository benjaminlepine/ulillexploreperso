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
      <p class="text-left mt-2 font-weight-bold mb-3"> {{ $t('home.lastUpdate')}}:{{ lastSubmitDate() }}</p>
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

import utils from '../utils';

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
          const d = new Date(this.ambassador.submitTimestamp);
          return d.getDate() + '/'+ (d.getMonth()+1)+'/'+d.getFullYear();
      }
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.profile{
  &-name{
    padding-top: 4px;
    font-size: 22px !important;
    color: $second-color;
  }
  &-info{
    color: $clear-main-color;
  }
  &-picto{
    max-width: 45px;
  }
  &-ambassador{
    padding: 12px;
    background-color: $third-color;
    border-radius: 10px;
  }
  &-godlink{
    padding: 14px 12px;
    background-color: $main-color;
    border-radius: 12px;
    margin: 2px;
    & > a{
      color: white;
      text-decoration:underline ;
    }
  }
}

.profile{
  &-ctn{
    padding: 12px 8px 8px 8px;
    border-radius: 12px;
    &-buddy{background-color: $second-color;}
    &-ambassador{background-color: $third-color;}
  }
  &-title{font-size: 22px}
  &-picto{max-width: 65px}
  &-card{
    border-radius: 12px;
    background-color: #f0f0f0;
    padding: 15px;
    text-decoration: none;
    transition: background-color 180ms, color 300ms;
    &:hover{
      cursor: pointer;
      background-color: $main-color;
      & h5 {color: white} p {color: lighten($clear-main-color, 45%)}
    }
  }
}
</style>
