<template>
  <div>
    <div v-if="userGodStatus.isGodfather">
      <p class="text-left mb-0">{{ $t('profil.myGodchild')}}</p>
    </div>
    <div v-if="userGodStatus.isGodchild">
      <p class="text-left mb-0">{{ $t('profil.myGodfather')}}</p>
      <div v-for="(godchfa, index) in godchfas" :key="index" class="relation-godcard d-flex justify-content-between">
        <div class="d-flex">
          <img src="../assets/img/user2.svg">
          <div class="ml-2">
            <p class="text-left mb-0 text-white">{{godchfa.name}}</p>
            <p class="text-left mb-0 relation-godcard-link-color">{{godchfa.email}}</p>
          </div>
        </div>
        <i class="fas fa-exclamation-triangle relation-godCardIcon"></i>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {userGodStatus: Object},
  data: function ()  {
    return {
      godchfas: [{name:'Frodon', email:'frodon.saquet@univ-lille.fr'},{name:'Arthur', email:'arthur.minimoy@univ-lille.fr'}]
    }
  },
  methods:{}
}
</script>

<style scoped lang="scss">
@import "../scss/app-variables";
@import "../scss/app";

.relation{
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
  &-godlink{
    padding: 8px 12px;
    background-color: $second-color;
    border-radius: 12px;
    margin: 2px;
    & > a{
      color: white;
      text-decoration:underline ;
    }
  }
  &-godCardIcon{
    color: $third-color;
    font-size: 22px;
    opacity: 0.8;
    margin-top: 12px;
    &:hover{cursor: pointer;}
  }
}
</style>
