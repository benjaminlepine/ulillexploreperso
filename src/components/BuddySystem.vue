<template>
  <div class="profile-ctn profile-ctn-buddy">
    <div class="d-flex justify-content-between">
      <div>
        <p class="mb-0 profile-title text-left text-white">{{ $t('home.buddySystem')}}</p>
        <p class="mb-0 text-white text-left">{{ $t('home.findYourGodfather')}}</p>
      </div>
      <img class="profile-picto" :alt="$t('home.findYourGodfather')" src="../assets/img/buddy2.svg">
    </div>
    <!-- Onboarding No PROFILE - NI PARRAIN NI FILLEUL -->
    <div>
      <div class="grey-ctn mt-3 mb-0" >
        <p class="text-left">{{ $t('profile.noRelations')}}</p>
      </div>
    </div>

    <!-- Si PARRAIN -->
    <div v-if="userRole !== 'STUDENT_EXTERN'">
      <div v-if="godfatherProfile" class="grey-ctn mt-2 mb-0">
        <div class="d-flex justify-content-between">
          <h5 class="text-left pt-2 mb-0">{{ $t('profile.myGodfatherProfile')}}</h5>
          <router-link to="/becomeGodfather">
            <button class="btn buddy-btn">
              <span class="mb-0 text-white mr-2">
                {{ $t('profile.edit')}}
                <i class="fas fa-edit buddy-edit-button ml-2"></i>
              </span>
            </button>
          </router-link>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <label class="el-switch pink">
            <input type="checkbox" @change="updateGodfatherStatus($event)" v-model="godfatherProfile.active" name="switch">
            <span class="el-switch-style"></span>
          </label>
          <p v-if="godfatherProfile.active" class="text-left ml-2" v-html="$t('profile.thisNotDeleteRelation')"></p>
          <i18n v-else class="text-left ml-2" path="profile.yourAccountInactive">Lilord</i18n>
        </div>
        <div v-if="godchilds && godchilds.length > 0">
          <hr class="buddy-line">
          <h5 class="text-left mb-0">{{ $t('profile.myGodchild')}}</h5>
          <div v-bind:class="{ desaturate: !godfatherProfile.active }" v-for="(godchild, index) in godchilds" :key="index">
            <relation-infos :relation="godchild"></relation-infos>
          </div>
          <div v-if="godchilds && godchilds.length > 0">
            <hr class="buddy-line">
            <h5 class="text-left mb-0">{{ $t('profile.myGodchild')}}</h5>
            <div v-bind:class="{ desaturate: !godfatherProfile.active }" v-for="(godchild, index) in godchilds" :key="index">
              <relation-infos :relation="godchild"></relation-infos>
            </div>
          </div>
          <div v-else>
            <p>{{ $t('profile.noGodchildYet')}}</p>
            <loader></loader>
          </div>
        </div>
      </div>
      <div v-else>
        <router-link to="/becomeGodfather" class="profile-card d-flex justify-content-between mt-2">
          <div>
            <h5 class="mb-0 text-left">{{ $t('buddy.iWantBeGodfather')}}</h5>
            <p class="mb-0 text-left ">{{ $t('buddy.toBeClassy')}}</p>
          </div>
          <img :alt="$t('buddy.iWantBeGodfather')" class="ml-2" src="../assets/img/parrainboring.svg">
        </router-link>
      </div>
    </div>

    <!-- SI FILLEUL -->
    <div v-if="godchildProfile" class="grey-ctn mt-2 mb-0">
      <div class="d-flex justify-content-between">
        <h5 class="text-left pt-2 mb-0">{{ $t('profile.myGodchildProfile')}}</h5>
        <router-link to="/becomeGodchild">
          <button class="btn buddy-btn">
              <span class="mb-0 text-white mr-2">
                {{ $t('profile.edit')}}
                <i class="fas fa-edit buddy-edit-button ml-2"></i>
              </span>
          </button>
        </router-link>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <label class="el-switch pink" >
          <input type="checkbox" @change="updateGodchildStatus($event)" v-model="godchildProfile.active" name="switch">
          <span class="el-switch-style"></span>
        </label>
        <p v-if="godchildProfile.active" class="text-left ml-2" v-html="$t('profile.thisNotDeleteRelation')"></p>
        <i18n v-else class="text-left ml-2" path="profile.yourAccountInactive">Lilot</i18n>
      </div>
      <div v-if="godfather">
        <hr class="buddy-line">
        <h5 class="text-left mb-3">{{ $t('profile.myGodfather')}}</h5>
        <relation-infos :relation="godfather" v-bind:class="{ desaturate: !godchildProfile.active}"></relation-infos>
      </div>
      <div v-else>
        <p>{{ $t('profile.noGodfatherYet')}}</p>
        <loader></loader>
      </div>
    </div>
    <div v-else>
      <router-link to="/becomegodchild" class="profile-card d-flex justify-content-between mt-2">
        <div>
          <h5 class="mb-0 text-left">{{ $t('buddy.iSearchAGodfather')}}</h5>
          <p class="mb-0 text-left ">{{ $t('buddy.iNeedGodfather')}}</p>
        </div>
        <img :alt="$t('buddy.iSearchAGodfather')" class="ml-2" src="../assets/img/search.svg">
      </router-link>
    </div>

    <!-- POP UP ERROR - On ne peux pas activer les 2 -->
    <Popup v-if="showPopup" @close="showPopup=false">
      <p slot="body">{{$t('profile.youCantBeBooth')}}</p>
    </Popup>
  </div>
</template>
<script>
import RelationInfos from "./RelationInfos";
import Popup from "./Popup";
import Loader from "./Loader";

export default {
  components: {Loader, Popup, RelationInfos},
  data: function ()  {
    return {
      godfatherProfile: this.$store.getters['user/godfatherProfile'],
      godchildProfile: this.$store.getters['user/godchildProfile'],
      godchilds: this.$store.getters['user/godchildren'],
      godfather: this.$store.getters['user/godfather'],
      showModal: true,
      userRole: null,
      showPopup: false
    };
  },
  beforeMount(){
    this.userRole = this.$store.getters['auth/user'].roles[0];
    if (this.godchildProfile){
      this.active = this.godchildProfile.active;
    }
  },
  methods:{
    updateGodfatherStatus(e){
      if (this.godfatherProfile.active && this.godchildProfile && this.godchildProfile.active){
        this.showPopup = true;
        this.godfatherProfile.active = false;
        e.target.checked = false;
      }else {
        e.target.checked = !e.target.checked;
        this.$store.dispatch("user/updateGodfatherStatus", {active: this.godfatherProfile.active}).then(
            (message) => {
              Bus.$emit('DisplayMessage', {text: message, type: 'success'});
              this.$store.dispatch('user/fetchGodfatherProfile');
            },
            err => {
              if(err.response.status === 401){ this.$router.push('/signin'); }
              if (err.response.data && err.response.data.messages){
                Bus.$emit('DisplayMessage', {text: err.response.data.messages, type: 'error'});
              }else {
                Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen'), type: 'error'});
              }
            }
        );
      }
    },
    updateGodchildStatus(e){
      //console.log("0 checked = "+e.target.checked +", p.active = "+this.godchildProfile.active);
      if (this.godchildProfile.active && this.godfatherProfile && this.godfatherProfile.active){
        this.showPopup = true;
        this.godchildProfile.active = false;
        e.target.checked = false;
      }else {
        e.target.checked = !e.target.checked;
        this.$store.dispatch("user/updateGodchildStatus", {active: this.godchildProfile.active}).then(
            (message) => {
              Bus.$emit('DisplayMessage', {text: message, type: 'success'});
              this.$store.dispatch('user/fetchGodchildProfile');
            },
            err => {
              if(err.response.status === 401){ this.$router.push('/signin'); }
              if (err.response.data && err.response.data.messages){
                Bus.$emit('DisplayMessage', {text: err.response.data.messages, type: 'error'});
              }else {
                Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen'), type: 'error'});
              }
            }
        );
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";
@import "../scss/toogleswitch";

.explorebtnbuddy{
  background-color: $second-color;
  border-radius: 40px;
  padding: 8px 25px;
  width: 100%;
  font-weight: bolder;
  filter: none;
  color: white;
  &:hover{ background-color: darken($second-color, 10%); color: white; }
  &:disabled{ background-color: #707070; color: white; }
}

.buddy{
  &-edit-button{ max-width: 18px; }
  &-line{ background: $main-color; }
  &-btn{
    background-color: $main-color;
    color: white;
    border-radius: 40px;
    &:hover{color: white}
  }
  &-mini-ctn{
    padding: 8px 4px;
    border-radius: 12px;
    background-color: #707070;
  }
}

</style>

