<template>
  <div>
    <div class="relation-godcard d-flex justify-content-between">
      <div class="d-flex">
        <img src="../assets/img/user2.svg">
        <div class="ml-2">
          <p class="text-left mb-0 text-white">{{ relation.firstname + ' ' + relation.lastname }}</p>
          <p class="text-left mb-0 relation-godcard-link-color">{{relation.email}}</p>
        </div>
      </div>
      <div v-on:click="displayEndRelation = !displayEndRelation"><i class="fas fa-exclamation-triangle relation-godCardIcon"></i></div>
    </div>
    <end-of-relation v-if="displayEndRelation" :relationId="relation.id"></end-of-relation>
  </div>
</template>

<script>
import EndOfRelation from "./EndOfRelation";
export default {
  components: {EndOfRelation},
  props: {
    relation: Object,
  },
  data: function ()  {
    return {
      displayEndRelation: false
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
