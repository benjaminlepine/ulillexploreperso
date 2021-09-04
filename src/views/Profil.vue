<template xmlns="http://www.w3.org/1999/html">
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('profil.myProfil')}}</p>
    <div class="mainctn">
      <!-- Name section -->
      <div class="d-flex justify-content-between">
        <span class="profil-name">{{userFullName}}</span>
        <img :alt="$t('wait.oneUndredDay')" class="profil-picto" src="../assets/img/user.svg">
      </div>
      <hr>
      <!-- Infos & update password section -->
      <div>
        <p class="text-left mb-0">{{ $t('profil.contactEmail')}}</p>
        <p class="mb-2 text-left mb-0 profil-info">{{userEmail}}</p>
        <p class="text-left mb-0">{{ $t('profil.subscribedFrom')}}</p>
        <p class="mb-2 text-left mb-0 profil-info montserrat">{{registrationDate}}</p>
      </div>
      <hr>
      <!-- Parrain / Filleuls section -->
      <div>
        <div class="grey-ctn" v-if="!userGodStatus.isGodchild && !userGodStatus.isGodfather">
          <p class="text-left">{{ $t('profil.noRelations')}}</p>
          <div class="d-flex justify-content-between">
            <div class="w-50 text-center profil-godlink"><router-link to="/becomeGodfather">{{ $t('sideMenu.becomeGodfather')}}</router-link></div>
            <div class="w-50 text-center profil-godlink"><router-link to="/becomeGodchild">{{ $t('sideMenu.becomeGodchild')}}</router-link></div>
          </div>
        </div>
        <div v-else>
          <relation-infos :userGodStatus="userGodStatus"></relation-infos>
        </div>
      </div>

      <hr>
      <!-- Ambassador section -->
      <div>
        <p class="text-left">{{ $t('profil.ambassador')}}</p>
        <div class="profil-ambassador">
          <p class="text-left mb-0 font-weight-bold mb-3">{{ $t('profil.isAmbassador')}}</p>
          <router-link to="/ambassador" class="btn explorebtn mb-3">{{ $t('profil.seeMyForm')}}</router-link>
          <button class="btn" @click="unsubscribe">{{ $t('profil.unsubscribe')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faSubscript } from '@fortawesome/free-solid-svg-icons';
import store from '../store.js';
import EndOfRelation from "../components/EndOfRelation";
import RelationInfos from "../components/RelationInfos";
export default {
  name: 'Profil',
  components: {RelationInfos, EndOfRelation},
  data: function () {
    return {
      store: store,

    }
  },

  updated() {
    //console.log("user = ", this.$store.getters['auth/user']);
    console.log("userGodStatus = ", this.userGodStatus);
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

.profil{
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
