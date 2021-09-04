<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('login.createNewPassword')}}</p>
    <div class="mainctn">
      <form @submit.prevent="updatePassword">
        <div class="text-left">
          <label class="mb-0" for="oldPassword">{{ $t('login.enterOldPassword')}}</label>
          <input class="form-control mb-3" id="oldPassword" v-model="oldPassword" ref="oldPassword" type="password" name="oldPassword">
        </div>
        <div class="text-left">
          <label class="mb-0" for="newPassword">{{ $t('login.enterNewPassword')}}</label>
          <input class="form-control mb-3" id="newPassword" v-model="newPassword" ref="newPassword" type="password" name="newPassword">
        </div>
        <div class="text-left">
          <label class="mb-0" for="repeatNewPassword">{{ $t('login.repeatNewPassword')}}</label>
          <input class="form-control mb-3" id="repeatNewPassword" v-model="repeatNewPassword" ref="repeatNewPassword" type="password" name="repeatNewPassword">
        </div>
        <div class="errors-ctn mt-3" v-if="errors.length > 0 ">
          <p class="text-danger" v-if="errors.length"><b>{{ $t('home.correctErrors')}}</b></p>
          <ul>
            <p class="text-danger errors-list mb-0" v-for="(error, index) in errors" :key="index">• {{ error }}</p>
          </ul>
        </div>
        <button class="btn mt-3 explorebtn" type="submit" value="Submit">{{ $t('login.validate')}}</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data: function ()  {
    return {
      lang: this.$i18n.locale,
      oldPassword: null,
      newPassword: null,
      repeatNewPassword: null,
      errors: [],
    }
  },
  methods:{
    checkForm: function (e) {
      this.errors = [];
      if (!this.oldPassword) { this.errors.push(this.$t("errorsMsg.passwordRequired")); }
      if (!this.newPassword) { this.errors.push(this.$t("errorsMsg.samePasswordRequired")); }
      e.preventDefault();
    },
    updatePassword: function (e) {
      this.checkForm(e);
      const payloader = {
        email: this.$store.getters["auth/user"].email,
        oldPassword: this.oldPassword,
        newPassword:this.newPassword,
      };
      console.log("payloader = ", this.payloader)
    },
  }
}
</script>
<style scoped lang="scss">
@import "../scss/app-variables";
@import "../scss/app";
</style>
