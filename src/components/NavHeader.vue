<template>
  <div class="header">
    <div v-on:click.prevent="openNav">
      <i class="fa fa-bars fa-2x bar-menu"></i>
    </div>
    <router-link to="/">
      <img class="logo-univ" src="../assets/img/logo-univ.gif">
    </router-link>
    <div class="lang-ctn">
      <div @click="showLang = !showLang" ref="button">
        <img v-if="this.$i18n.locale === 'fr'" class="country" src="../assets/img/flags/french.svg">
        <img v-if="this.$i18n.locale === 'en'" class="country" src="../assets/img/flags/english.svg">
        ▼</div>
      <div v-if="showLang === true"
           v-closable="{ exclude: ['button'], handler: 'onClose'}"
           onclick="showLang = false" class="language-pop-in">
        <div @click="selectLanguage('fr')" class="d-flex language-row maxheightSafari">
          <img class="country" src="../assets/img/flags/french.svg">
          <span class="ml-2 text-dark">{{ $t('lang.fr') }}</span>
        </div>
        <div @click="selectLanguage('en')" class="d-flex language-row maxheightSafari">
          <img class="country" src="../assets/img/flags/english.svg">
          <span class="ml-2 text-dark">{{ $t('lang.en') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let handleOutsideClick;
  export default {
    name: 'Header',
    data: function () {
      return {
        showLang: false,
      }
    },
    directives: {
      closable: {
        bind (el, binding, vnode) {
          handleOutsideClick = (e) => {
            e.stopPropagation()
            const { handler, exclude } = binding.value
            let clickedOnExcludedEl = false
            exclude.forEach(refName => {
              if (!clickedOnExcludedEl) {
                const excludedEl = vnode.context.$refs[refName]
                clickedOnExcludedEl = excludedEl.contains(e.target)
              }
            })
            if (!el.contains(e.target) && !clickedOnExcludedEl) {
              vnode.context[handler]()
            }
          }
          document.addEventListener('click', handleOutsideClick)
          document.addEventListener('touchstart', handleOutsideClick)
        },
        unbind () {
          document.removeEventListener('click', handleOutsideClick)
          document.removeEventListener('touchstart', handleOutsideClick)
        }
      }
    },
    methods: {
      openNav(){
        this.$store.commit('header/toggleNav');
      },
      selectLanguage(lang) {
        this.$i18n.locale = lang;
        this.$store.commit('header/setLanguage', lang);
        this.showLang = false;
      },
      onClose () {
        this.showLang = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/_app-variables.scss";
@import "../scss/app.scss";

  .header{
    box-shadow: 1px 1px 3px #006a60;
    top: 0;
    position: fixed;
    z-index: 6;
    width: 100%;
    background-color: $main-color;
    padding: 10px 0;
    color: white;
    display: flex;
    justify-content: space-between;
  }

  .country{
    width: 25px;
  }

  .language-row{
    padding: 12px;
    border-radius: 9px;
  }

  .language-row:hover{
    cursor: pointer;
    background-color: $main-color;
    opacity: 0.9;
  }

  .language-row:hover > span{
    color: white !important;
  }

  .bar-menu{
    margin-top: 8px;
    margin-left: 15px;
  }

  .lang-ctn{
    margin-right: 15px;
    margin-top: 12px;
  }

  .language-pop-in{
    z-index: 10;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    right: 0
  }

  .logo-univ{
    width: 130px;
  }


</style>
