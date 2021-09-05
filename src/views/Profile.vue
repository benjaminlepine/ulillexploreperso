<template xmlns="http://www.w3.org/1999/html">
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('profile.myProfile')}}</p>
    <div class="mainctn">
      <!-- Name section -->
      <div class="d-flex justify-content-between">
        <span class="profile-name">{{userFullName}}</span>
        <img :alt="$t('wait.oneUndredDay')" class="profile-picto" src="../assets/img/user.svg">
      </div>
      <hr>
      <!-- Infos & update password section -->
      <div>
        <p class="text-left mb-0">{{ $t('profile.contactEmail')}}</p>
        <p class="mb-2 text-left mb-0 profile-info">{{userEmail}}</p>
        <p class="text-left mb-0">{{ $t('profile.subscribedFrom')}}</p>
        <p class="mb-2 text-left mb-0 profile-info montserrat">{{registrationDate}}</p>
      </div>
      <hr>
      <!-- Parrain / Filleuls section -->
      <div class="profile-ctn profile-ctn-buddy">
        <div class="d-flex justify-content-between">
          <div>
            <p class="mb-0 profile-title text-left text-white">{{ $t('home.buddySystem')}}</p>
            <p class="mb-0 text-white text-left">{{ $t('home.findYourGodfather')}}</p>
          </div>
          <img class="profile-picto" :alt="$t('home.findYourGodfather')" src="../assets/img/buddy2.svg">
        </div>
        <!-- Onboarding Si NI PARRAIN NI FILLEUL -->
        <div v-if="!userGodStatus.isGodchild && !userGodStatus.isGodfather">
          <div class="grey-ctn mt-3 mb-0" >
            <p class="text-left">{{ $t('profile.noRelations')}}</p>
          </div>
          <router-link to="/becomeGodfather" class="profile-card d-flex justify-content-between mt-2">
            <div>
              <h5 class="mb-0 text-left">{{ $t('buddy.iWantBeGodfather')}}</h5>
              <p class="mb-0 text-left ">{{ $t('buddy.toBeClassy')}}</p>
            </div>
            <img :alt="$t('buddy.iWantBeGodfather')" class="ml-2" src="../assets/img/parrainboring.svg">
          </router-link>
          <router-link to="/becomegodchild" class="profile-card d-flex justify-content-between mt-2">
            <div>
              <h5 class="mb-0 text-left">{{ $t('buddy.iSearchAGodfather')}}</h5>
              <p class="mb-0 text-left ">{{ $t('buddy.iNeedGodfather')}}</p>
            </div>
            <img :alt="$t('buddy.iSearchAGodfather')" class="ml-2" src="../assets/img/search.svg">
          </router-link>
        </div>
        <!-- Si PARRAIN ou FILLEUL -> Liste des relations -->
        <div v-else>
          <div v-if="userGodStatus.isGodfather">
            <p class="text-left mb-0">{{ $t('profile.myGodchild')}}</p>
            <div v-for="(godchild, index) in godchilds" :key="index">
              <relation-infos :relation="godchild"></relation-infos>
            </div>
          </div>
          <div v-if="userGodStatus.isGodchild">
            <p class="text-left mb-0">{{ $t('profile.myGodfather')}}</p>
            <relation-infos :relation="godfather"></relation-infos>
          </div>
        </div>
      </div>
      <hr>
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
        <div v-if="isAmbassador && isAmbassador.ambassador">
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
    </div>
  </div>
</template>

<script>

import EndOfRelation from "../components/EndOfRelation";
import RelationInfos from "../components/RelationInfos";
export default {
  name: 'Profile',
  components: {RelationInfos, EndOfRelation},
  data: function () {
    return {
      godchilds: this.$store.getters['user/godchildren'],
      godfather: this.$store.getters['user/godfather'],
    }
  },
  beforeMount(){
    console.log(this.$store);
  },

  computed:{
    userFullName(){
      return this.$store.getters['user/fullName'];
    },
    userEmail(){
      const user = this.$store.getters['auth/user'];
      if (user && user.email){
        return user.email;
      }
      return "N/A"
    },
    isAmbassador(){
      const user = this.$store.getters['auth/user'];
      if (user && user.profile){
        return user.profile;
      }
      return "N/A"
    },
    userGodStatus(){
      const user = this.$store.getters['auth/user'];
      if (user && user.profile){ return {isGodfather: user.profile.godfather, isGodchild: user.profile.godchild};}
      //if (user && user.profile){ return {isGodfather: user.profile.godfather, isGodchild: true};}
      //if (user && user.profile){ return {isGodfather: true, isGodchild: user.profile.godchild};}
      return "N/A"
    },
    registrationDate(){
      const user = this.$store.getters['auth/user'];
      if (user && user.createAt){
        const date = new Date(user.createAt);
        return [this.pad(date.getDate()), this.pad(date.getMonth()), this.pad(date.getFullYear())].join('/');
      }
      return "N/A"
    },
  },
  methods: {
    pad(n){
      return n < 10 ? '0'+ n : n;
    },
    // unsubscribe(){
    //   console.log("unsubscribe");
    // }
  }
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
