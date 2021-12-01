<template>
  <div id="app">
    <div class="spinner-ctn" v-if="loading">
      <Spinner line-fg-color="#06a099" class="spinner" size="88" ></Spinner> 
      <p class="spinner-txt">{{ $t('home.loading') }}</p>
    </div>
    <DisplayMessage></DisplayMessage>
    <NavHeader></NavHeader>
    <NavMenu></NavMenu>
    <router-view class="pt-4 view-container"></router-view>
  </div>
</template>

<script>
  import NavHeader from "./components/NavHeader";
  import NavMenu from "./components/NavMenu";
  import DisplayMessage from './components/DisplayMessage';
  import Spinner from 'vue-simple-spinner';

  export default {
    name: 'App',
    components: {NavHeader, NavMenu, DisplayMessage, Spinner},
    mounted(){
        this.$i18n.locale = this.$store.getters['header/language'];
    },
    computed: {
      loading (){
        return this.$store.getters['auth/loading'];
      }
    }

  }

</script>

<style lang="scss">
  @import "./scss/_app-variables.scss";
  #app {
    height: 100vh;
    min-height: 100%;
    background-color: var(--background-main);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
  }
  
  .view-container{
    height: calc(100% - 80px);
    width: 100%;
    background-image: url("./assets/img/worldmap.svg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 65px;
    overflow: scroll;
  }

  .spinner{
    margin-top: 20%;
    &-txt{
      color: white;
      font-size: 25px;
      margin-top: 10px;
    }
    &-ctn{
      position: fixed;
      z-index: 99;
      background-color: rgb(29,29,29,0.8);
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }

</style>
