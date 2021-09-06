<template>
  <div class="grey-ctn">
    <form @submit.prevent="submitProblem">
      <div class="text-left">
        <label for="whatProblem" class="text-white">{{ $t('problem.endRelation')}}</label>
        <select class="form-control" name="problem" v-model="endingReason" id="whatProblem">
          <option selected="true" disabled="disabled">{{ $t('problem.chooseOption')}}</option>
          <option value="noProblem">{{ $t('problem.noProblem')}}</option>
          <option value="unavailable">{{ $t('problem.unavailable')}}</option>
          <option value="noAffinity">{{ $t('problem.noAffinity')}}</option>
          <option value="communication">{{ $t('problem.communication')}}</option>
          <option value="weird">{{ $t('problem.weird')}}</option>
        </select>
      </div>
      <div class="d-flex text-left">
        <input type="checkbox" v-model="acceptCB" class="largerCheckbox">
        <p class="rgpd-text">{{ $t('problem.rgpd')}}</p>
      </div>
      <button :disabled="!endingReason || !acceptCB" class="btn mt-3 explorebtn" type="submit" value="Submit">{{ $t('problem.endRelationSubmit')}}</button>
    </form>

  </div>
</template>

<script>
export default {
  props: {
    relationId: Number
  },
  data: function ()  {
    return {
      endingReason: null,
      acceptCB: null,
    }
  },
  methods:{
    submitProblem: function (e) {
      console.log("Ending Relation with for = ", this.endingReason)
      console.log("Relation ID = ", this.relationId)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/app-variables";
@import "../scss/app";

.largerCheckbox{
  margin-top: 14px;
  margin-left: 4px;
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  padding: 10px;
}

.rgpd-text{
  margin-bottom: 0;
  text-align: left;
  padding-left: 12px !important;
  padding-top: 8px;
  font-size: 14px;
  color: $clear-main-color;
}
.grey-ctn{background-color:$main-color !important;}
.rgpd-text{color: $third-color}
.explorebtn{border: solid white 2px}
</style>
