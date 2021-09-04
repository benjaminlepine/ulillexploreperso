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
      <div class="grey-ctn" v-if="!userGodStatus.isGodchild && !userGodStatus.isGodfather">
        <p class="text-left">{{ $t('profile.noRelations')}}</p>
        <div class="d-flex justify-content-between">
          <div class="w-50 text-center profile-godlink"><router-link to="/becomeGodfather">{{ $t('sideMenu.becomeGodfather')}}</router-link></div>
          <div class="w-50 text-center profile-godlink"><router-link to="/becomeGodchild">{{ $t('sideMenu.becomeGodchild')}}</router-link></div>
        </div>
      </div>
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
      <hr>
      <!-- Ambassador section -->
      <p class="text-left">{{ $t('profile.ambassador')}}</p>
      <div v-if="isAmbassador && isAmbassador.ambassador">
        <div class="profile-ambassador">
          <p class="text-left mb-0 font-weight-bold mb-3">{{ $t('profile.isAmbassador')}}</p>
          <router-link to="/becomeAmbassador" class="btn explorebtn mb-3">{{ $t('profile.seeMyForm')}}</router-link>
          <button class="btn" @click="unsubscribe">{{ $t('profile.unsubscribe')}}</button>
        </div>
      </div>
      <div v-else>
        <div class="profile-ambassador">
          <p class="text-left mb-0 font-weight-bold mb-3">{{ $t('profile.becomeAmbassador')}}</p>
          <router-link to="/ambassador" class="btn explorebtn mb-3">{{ $t('profile.becomeAmbassadorValid')}}</router-link>
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
      //if (user && user.profile){ return {isGodfather: user.profile.godfather, isGodchild: user.profile.godchild};}
      if (user && user.profile){ return {isGodfather: user.profile.godfather, isGodchild: true};}
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
    unsubscribe(){
      console.log("unsubscribe");
    }
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
}
</style>
