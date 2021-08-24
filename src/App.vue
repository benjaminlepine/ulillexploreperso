<template>
  <div id="app">
    <NavHeader></NavHeader>
    <NavMenu></NavMenu>
    <router-view class="pt-4"></router-view>
  </div>
</template>

<script>
  import NavHeader from "./components/NavHeader";
  import NavMenu from "./components/NavMenu";
  import store from './store';
  export default {
    name: 'App',
    components: {NavHeader, NavMenu},
    data: function () {
      return {
        store: store,
      }
    },
    mounted(){
        this.$i18n.locale = this.$store.getters['header/language'];
    },
  }

</script>

<style lang="scss">
  @import "./scss/_app-variables.scss";
  #app {
    margin-top: 70px;
    min-height: 100%;
    background-color: var(--background-main);
    padding-bottom: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-image: url("./assets/img/worldmap.svg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 65px;
  }

  /*
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
