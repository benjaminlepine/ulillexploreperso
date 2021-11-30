<template>
  <div id="app">
    <DisplayMessage></DisplayMessage>
    <NavHeader></NavHeader>
    <NavMenu></NavMenu>
    <router-view class="pt-4 view-container"></router-view>
    <Spinner v-if="loading"></Spinner>
  </div>
</template>

<script>
  import NavHeader from "./components/NavHeader";
  import NavMenu from "./components/NavMenu";
  import DisplayMessage from './components/DisplayMessage';
  import Spinner from "./components/Spinner.vue";

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

</style>
