<template>
  <div class="header">
    <div>
      <i class="fa fa-bars fa-2x bar-menu"></i>
    </div>
    <router-link to="/">
      <img class="logo-univ" src="../assets/img/logo-univ.gif">
    </router-link>
    <div class="lang-ctn">
      <div>
        <img class="country" src="../assets/img/france.svg">
<!--        <img v-if="this.$i18n.locale === 'en'" class="country" src="../assets/img/united-kingdom.svg">-->
        ▼</div>
    </div>
  </div>
</template>

<script>
  // import store from '../store';

  // let handleOutsideClick;
  //
  // export default {
  //   name: 'Header',
  //   data: function ()  {
  //     return {
  //       showLang : false,
  //       store: store
  //     }
  //   },
  //   directives: {
  //     closable: {
  //       bind (el, binding, vnode) {
  //         handleOutsideClick = (e) => {
  //           e.stopPropagation()
  //           const { handler, exclude } = binding.value
  //           let clickedOnExcludedEl = false
  //           exclude.forEach(refName => {
  //             if (!clickedOnExcludedEl) {
  //               const excludedEl = vnode.context.$refs[refName]
  //               clickedOnExcludedEl = excludedEl.contains(e.target)
  //             }
  //           })
  //           if (!el.contains(e.target) && !clickedOnExcludedEl) {
  //             vnode.context[handler]()
  //           }
  //         }
  //         document.addEventListener('click', handleOutsideClick)
  //         document.addEventListener('touchstart', handleOutsideClick)
  //       },
  //       unbind () {
  //         document.removeEventListener('click', handleOutsideClick)
  //         document.removeEventListener('touchstart', handleOutsideClick)
  //       }
  //     }
  //   },
  //   methods: {
  //     openNav(){
  //       this.store.commit('toggleNav');
  //     },
  //     selectLanguage(lang) {
  //       localStorage.setItem('language', lang);
  //       this.$i18n.locale = lang;
  //       this.store.commit('setLanguage', lang);
  //       this.$apiService.loadData();
  //       this.showLang = false;
  //       if (this.$router.currentRoute.path != "/Home"){
  //         this.$router.push({ path: '/Home' });
  //       }
  //     },
  //     onClose () {
  //       this.showLang = false
  //     }
  //   }
  // }

</script>

<style lang="scss" scoped>
  @import "../scss/_app-variables.scss";
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
