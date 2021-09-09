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
      <buddy-system></buddy-system>
      <hr>
      <!-- Ambassador section -->
      <ambassador-component></ambassador-component>
    </div>
  </div>
</template>

<script>

import EndOfRelation from "../components/EndOfRelation";
import RelationInfos from "../components/RelationInfos";
import AmbassadorComponent from '../components/ambassadorComponent.vue';
import BuddySystem from "../components/BuddySystem";
export default {
  name: 'Profile',
  components: {BuddySystem, RelationInfos, EndOfRelation, AmbassadorComponent, },
  data: function () {
    return {}
  },
  beforeMount(){
    this.$store.dispatch('user/fetchGodfatherProfile').then(
      (p) => {},
      err =>{}
    );
    this.$store.dispatch('user/fetchGodchildProfile').then(
      (p) => {},
      err =>{}
    );
    this.$store.dispatch('user/fetchAmbassadorProfile').then(
      (p) => {},
      err =>{}
    );
  },
  beforeMount(){
     this.$store.dispatch('user/fetchGodfatherProfile').then(
      (p) => {},
      err =>{}
    );
    this.$store.dispatch('user/fetchGodchildProfile').then(
      (p) => {},
      err =>{}
    );
    this.$store.dispatch('user/fetchAmbassadorProfile').then(
      (p) => {},
      err =>{}
    );
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
      return "N/A";
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

<style lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";


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


</style>
