<template>
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
        <p class="text-left mb-0">{{ $t('profil.myGodchild')}}</p>
        <p class="text-left mb-0">{{ $t('profil.myGodfather')}}</p>
        <div v-for="godchfa in godchfas" class="profil-godcard d-flex justify-content-between">
          <div>
            <p class="text-left mb-0 text-white">{{godchfa.name}}</p>
            <p class="text-left mb-0 profil-godcard-link-color">{{godchfa.email}}</p>
          </div>
          <img src="../assets/img/user2.svg">
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
export default {
  name: 'Profil',
  data: function () {
    return {
      store: store,
      godchfas: [{name:'Frodon', email:'frodon.saquet@univ-lille.fr'},{name:'Arthur', email:'arthur.minimoy@univ-lille.fr'}]
    }
  },
  computed:{
    userFullName(){
      const user = this.$store.getters['auth/user'];
      if (user){
        if (user.firstname && user.lastname){
          return user.firstname + ' ' + user.lastname;
        }else if ( user.firstname){
          return user.firstname;
        }else if (user.lastname){
          return user.lastname;
        }
      }
      return "N/A"
    },
    userEmail(){
      const user = this.$store.getters['auth/user'];
      if (user && user.email){
        return user.email;
      }
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
      console.log("unsubscribe")
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
  &-godcard{
    background-color: $main-color;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 8px;
    &-link-color{
      color:$third-color;
    }
  }
  &-ambassador{
    padding: 12px;
    background-color: $third-color;
    border-radius: 10px;
  }
}
</style>
