<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" v-on:click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen" class="sidebar-panel">
                <div v-on:click="closeSidebarPanel" class="side-header">
                  <div class="d-flex">
                    <img class="side-header--ico" src="../assets/img/cap.svg">
                    <i class="fas fa-arrow-left fa-2x sidebar-panel-arrow"></i>
                  </div>
                  <p v-if="!isAuth" class="ml-3 mb-0 mt-2 text-white" >{{ $t('sideMenu.signIn')}}</p>
                  <p v-if="isAuth" class="ml-3 mb-0 mt-2 text-white">{{ $t('sideMenu.welcome')}}
                    <span class="sidebar-fullname"><b>{{userFullName}}</b></span>
                  </p>
                </div>
                <ul v-on:click="closeSidebarPanel" class="sidebar-panel-nav">
                    <li >
                        <i class="fas fa-home fa-2x sidebar-panel-nav--icon"></i>
                        <router-link to="/">{{ $t('sideMenu.home')}}</router-link>
                    </li>
                  <li >
                    <i class="fas fa-user fa-2x sidebar-panel-nav--icon"></i>
                    <router-link to="/profile">{{ $t('sideMenu.profile')}}</router-link>
                  </li>
                    <li >
                        <i class="fas fa-user-graduate fa-2x sidebar-panel-nav--icon"></i>
                        <router-link to="/becomeGodfather">{{ $t('sideMenu.becomeGodfather')}}</router-link>
                    </li>
                    <li >
                        <i class="fas fa-users fa-2x sidebar-panel-nav--icon"></i>
                        <router-link to="/becomeGodchild">{{ $t('sideMenu.becomeGodchild')}}</router-link>
                    </li>
                    <li >
                        <i class="fas fa-globe fa-2x sidebar-panel-nav--icon"></i>
                        <router-link to="/ambassador">{{ $t('sideMenu.ambassador')}}</router-link>
                    </li>
                    <li @click="logout">
                        <i class="fas fa-sign-out-alt fa-2x sidebar-panel-nav--icon"></i>
                        <span v-if="isAuth" class="uexplore-link">{{ $t('sideMenu.logout')}}</span>
                        <span v-if="!isAuth" class="uexplore-link">{{ $t('sideMenu.login')}}</span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: function ()  {
            return {}
        },
        computed: {
            isPanelOpen() {
                return this.$store.getters['header/isNavOpen'];
            },
            userFullName(){
              return this.$store.getters['user/fullName'];
            },
            isAuth(){
              return this.$store.getters['auth/isAuth'];
            },
        },

      methods: {
            closeSidebarPanel(){
                this.$store.commit('header/setIsNavOpen', false);
            },
            logout(){
                this.$store.dispatch('auth/signout').then(
                    () => {
                        // FIXME Success message
                        if (this.$router.history.current.fullPath != "/signin"){
                            this.$router.push('/signin');
                        }
                    },
                    () => {
                        // FIXME Error message
                    }
                );
            }
        },
    }
</script>
<style lang="scss">
    @import "../scss/_app-variables.scss";

    .side-header{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 220px;
        background-color: $main-color;
        text-align: left;
        display: block;
        &--ico{
            padding-top: 50px;
            width: 140px;
            padding-left: 25px;
            display: block;
        }
        &--name{
            color: white;
            padding-left: 15px;
            &-op{
                color: white;
                opacity: 0.4
            }
        }
    }

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: #303839;
        opacity: 0.8;
        z-index: 8;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: white;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 9;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
        &-arrow{
            color: white;
            position: absolute;;
            right: 17px;
            top: 10px;
        }
        &-nav{
            padding-top: 220px;
            padding-left: 0;
            & > li{
                text-align: left;
                margin-bottom: 30px;
                list-style-type: none;
                position: relative;
                & > a, & > span {
                    font-size: 18px;
                    font-weight: 500;
                    color: $text-color !important;
                }
            }
            &--icon{
                width: 24px !important;
                margin-right: 15px;
                vertical-align: bottom;
                color: $text-color !important;
            }
        }
    }
    .uexplore-link{
      &:hover{
      text-decoration: underline;
      cursor: pointer;
      }
    }
    .sidebar-fullname{
      color: $third-color;
    }
</style>
