<template>
  <div class="login-ctn">
    <p class="mb-0 mainTitle text-yellow">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('login.login')}}</p>
    <button class="btn explorebtn explorebtn--login" @click="casSignIn()">
      {{ $t('login.iHaveUlillAdress')}}<br>
      {{ $t('login.iClickHere')}}
    </button>
    <p class="mb-0 text-white mt-2">{{ $t('login.noteAboutUnivlille')}}</p>
    <hr class="separator-line">
    <router-link class="mb-0 text-white mt-4 mb-3" to="/signinWithoutCAS"><b>{{ $t('login.iDontHaveAddress')}}</b></router-link>
  </div>
</template>
<script>
import R from '../resources';

export default {
  components: {},
  props: {},
  data: function ()  {
    return {};
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

</style>
