<template>
  <div>
    <!--    <p class="mb-0 title">{{ $t('home.ulillexplore')}}</p>-->
    <h1 class="mb-0 title">{{ $t('home.welcome')}}</h1>
    <p class="mb-0 subtitle">{{ $t('home.on')}}<span> {{ $t('home.ulillexplore')}}</span></p>
    <router-link to="/buddy" class="homecard">
      <div class="homecard-text">
        <p class="mb-0 homecard-text--title">{{ $t('home.buddySystem')}}</p>
        <p class="mb-0 homecard-text--subtitle">{{ $t('home.findYourGodfather')}}</p>
      </div>
      <img class="homecard-picto" :alt="$t('home.findYourGodfather')" src="../assets/img/buddy2.svg">
    </router-link>

    <router-link to="/ambassador" class="homecard">
      <div class="homecard-text">
        <p class="mb-0 homecard-text--title">{{ $t('home.ambassador')}}</p>
        <p class="mb-0 homecard-text--subtitle">{{ $t('home.shareYourExperience')}}</p>
      </div>
      <img class="homecard-picto" :alt="$t('home.shareYourExperience')" src="../assets/img/postal.svg">
    </router-link>

    <router-link to="/profile" class="homecard">
      <div class="homecard-text">
        <p class="mb-0 homecard-text--title">{{ $t('home.profile')}}</p>
        <p class="mb-0 homecard-text--subtitle">{{ $t('home.myInfos')}}</p>
      </div>
      <img class="homecard-picto" src="../assets/img/user.svg">
    </router-link>

  </div>
</template>

<script>
  import store from '../store';
  export default {
    name: 'Ambassador',
    props: {
      msg: String
    },
    data() {
      return {
        store: store
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/_app-variables.scss";
  @import "../scss/app.scss";
  .title{
    font-size: 35px;
    color: white;
  }

  .subtitle{
    color: white;
    font-size: 16px;
    & span{color: $third-color}
  }
</style>
