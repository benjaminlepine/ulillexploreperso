<template>
  <div>
    <div>
      <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
      <div class="mainctn">
        <h5>{{ $t('login.createNewPassword')}}</h5>
        <form class="mt-4">
          <input v-model="password" class="form-control mb-3" :placeholder="$t('login.enterNewPassword')" id="newPassword" type="password" required>
          <input v-model="passwordConfirm" class="form-control mb-3" :placeholder="$t('login.repeatNewPassword')" id="newPasswordConfirm" type="password" required>
        </form>
        <p v-if="!samePassword" class="alert-password">{{ $t('login.samePassword')}}</p>
        <button @click="changePassword" class="btn mt-3 explorebtn">{{ $t('login.validate')}}<br></button>
        <router-link to="/signin" ><p class="mt-4 mb-2 forgot">{{ $t('login.alreadyRegister')}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function ()  {
    return {
      password: null,
      passwordConfirm: null,
      samePassword: true,
      id: 9,
    }
  },

  // https://example.com/?product=shirt&color=blue&newuser&size=m
  // http://localhost:8080/resetpassword?
  computed:{
    loading(){
      return this.$store.state.auth.getters.loading;
    },
  },
  methods:{
    changePassword(e) {
      e.preventDefault();
      if(this.password !== this.passwordConfirm || this.password === null || this.password.length < 6){
        this.samePassword = false;

      } else{
        this.samePassword = true;
        const form = { token: this.$route.query.token, password: this.password, confirmPassword: this.passwordConfirm };
        this.$store.dispatch('auth/resetPassword', form).then(
            (data) => {
              Bus.$emit('DisplayMessage', {text: this.$t('profile.successGen'), type: 'success'});
              this.$router.push('/signin');
            },
            error => {
              Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen')+ " = " + error, type: 'error'});
            }
        );
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.alert-password{
  padding: 20px;
  margin: 20px 0;
  background-color: rgba(255, 0, 0, .1);
  border-radius: 15px;
  color: red;
}
</style>
