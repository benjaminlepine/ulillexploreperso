<template>
  <div class="grey-ctn">
    <form @submit.prevent="submitProblem">
      <div class="text-left">
        <label for="whatProblem" class="text-white">{{ $t('problem.endRelation')}}</label>
        <select class="form-control" name="problem" v-model="endingReason" id="whatProblem">
          <option selected="true" disabled="disabled">{{ $t('problem.chooseOption')}}</option>
          <option value="0">{{ $t('problem.noProblem')}}</option>
          <option value="1">{{ $t('problem.unavailable')}}</option>
          <option value="2">{{ $t('problem.noAffinity')}}</option>
          <option value="3">{{ $t('problem.communication')}}</option>
          <option value="4">{{ $t('problem.weird')}}</option>
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
    relationId: Number,
    isGodfather: Boolean
  },
  data: function ()  {
    return {
      endingReason: -1,
      acceptCB: null,
    }
  },
  methods:{
    submitProblem: function (e) {

      const payload = { unmatch: parseInt(this.endingReason) };
      if (this.isGodfather){
        payload.godchild = this.relationId;
        console.log("payload ", payload);
        this.$store.dispatch("user/deleteGodfatherMatchWithGodchild", payload).then((message) => {
          console.log("payload ", message);
        }).catch((err) => {
          Bus.$emit('DisplayMessage', {text: err, type: 'error'});
          console.log("err = ", err)
        });
      }else {
        payload.godfather = this.relationId;
        console.log("payload ", payload);
        this.$store.dispatch("user/deleteGodchildMatchWithGodfather", payload).then((message) => {
          console.log("payload ", message);
        }).catch((err) => {
          Bus.$emit('DisplayMessage', {text: err, type: 'error'});
          console.log("err = ", err)
        });
      }
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
