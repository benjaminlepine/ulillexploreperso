<template>
  <div class="login-ctn">
    <p class="mb-0 mainTitle text-yellow">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('login.login')}}</p>
<!--    <button class="btn explorebtn explorebtn&#45;&#45;login" @click="casSignIn()">-->
<!--      {{ $t('login.iHaveUlillAdress')}}<br>-->
<!--      {{ $t('login.iClickHere')}}-->
<!--    </button>-->
    <p class="mb-0 text-white mt-2">{{ $t('login.noteAboutUnivlille')}}</p>
    <hr class="separator-line">
    <!--    <router-link class="mb-0 text-white mt-4 mb-3" to="/signinWithoutCAS"><b>{{ $t('login.iDontHaveAddress')}}</b></router-link>-->
    <form @submit.prevent="handleSignIn">
      <input v-model="user.email" class="form-control mb-3" :placeholder="$t('login.email')" id="name" type="email" required>
      <input v-model="user.password" class="form-control mb-3" :placeholder="$t('login.password')" id="password" type="password" required>
      <button type="submit" class="btn explorebtn">{{ $t('login.login')}}<br></button>
    </form>
    <router-link to="/forgotpassword" ><p class="mt-4 mb-2 forgot">{{ $t('login.forgotPassword')}}</p></router-link>
    <router-link to="/signup" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.signUp')}}<br></router-link>
  </div>
</template>
<script>
import R from '../resources';
import User from "../models/user";

export default {
  components: {},
  props: {},
  data: function ()  {
    return {
      loading: false,
      user: new User('', ''),
      message: '',
      email: null,
      password: null,
    };
  },
  beforeMount(){
    if (this.$route.query.cookie && this.$route.query.cookie.startsWith(process.env.VUE_APP_CAS_COOKIE_NAME)){
      const cookie = this.$route.query.cookie;
      this.$store.dispatch("auth/casSignin", cookie).then(
          () => { this.$router.push('/profile'); },
          err => { console.error(err); }
      );
    }else {
      if (!document.cookie){ return; }
      const cookie = document.cookie.split(';').find(row => row.startsWith(process.env.VUE_APP_CAS_COOKIE_NAME));
      if (!cookie){ return; }
      this.$store.dispatch("auth/casSignin", cookie).then(
          () => { this.$router.push('/profile'); },
          err => { console.error(err); }
      );
    }
  },
  compute: {
    signIn(){
      return this.$store.auth.getters.signIn;
    },
  },

  methods:{
    casSignIn(){
      window.location.href = R.endpoint.casSignin();
    },
    handleSignIn(){
      this.loading = true;
      // formulaire validate
      if (this.user.email && this.user.password){
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
