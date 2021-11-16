<template>
  <div class="login-ctn">
    <p class="mb-0 mainTitle text-yellow">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('login.login')}}</p>
    <p class="mb-0 text-white mt-2" v-html="$t('login.noteAboutUnivlille')"></p>
    <hr class="separator-line">
    <form @submit.prevent="handleSignIn">
      <input v-model="user.username" class="form-control mb-3" :placeholder="$t('login.email')" id="name" required>
      <input v-model="user.password" class="form-control mb-3" :placeholder="$t('login.password')" id="password" type="password" required>
      <button type="submit" class="btn explorebtn">{{ $t('login.login')}}<br></button>
    </form>
    <router-link to="/forgotpassword" ><p class="mt-4 mb-2 forgot">{{ $t('login.forgotPassword')}}</p></router-link>
    <router-link to="/signup" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.signUp')}}<br></router-link>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  components: {},
  props: {},
  data: function ()  {
    return {
      loading: false,
      user: new User('', ''),
      message: '',
    };
  },
  compute: {
    signIn(){
      return this.$store.auth.getters.signIn;
    },
  },

  methods:{
    handleSignIn(){
      this.loading = true;
      // formulaire validate
      if (this.user.username && this.user.password){
        this.$store.dispatch('auth/signin', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              Bus.$emit('DisplayMessage', {text: this.$t('login.wrongPassword'), type: 'error'});
              this.message = (error.response && error.response.data) || error.message || error.toString();
            }
        );
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.separator-line{
  height: 2px;
  background-color: $third-color;
  border: none;
  width: 60%;
  margin-top: 25px;
}

.explorebtn--login{
  background-color: $second-color;
  &:hover{background-color: darken($second-color, 10%);}
}

.forgot{
  text-decoration: underline;
  color: white;
  &:hover{
    cursor: pointer;
    opacity:0.8;
  }
}

.explorebtn--signup{
  background-color: transparent;
  border: solid 3px $third-color;
  color: $third-color;
  transition: background-color 300ms;
  &:hover{background-color: transparent; color: $third-color; opacity: 0.8}
}

</style>
