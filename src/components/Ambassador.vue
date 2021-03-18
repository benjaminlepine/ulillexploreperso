<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('ambassador.becomeAmbassador')}}</p>
    <div class="mainctn">
      <h4>{{ $t('ambassador.charte.cgAmbassador')}}</h4>
      <div class="text-left">
        <p>{{ $t('ambassador.charte.cgrepresent')}}</p>
        <p><b>{{ $t('ambassador.charte.cgBeforeMob')}}</b></p>
        <p class="mb-0">{{ $t('ambassador.charte.cgDoPortrait')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgDoInterview')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgAddAdress')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgSendPostal')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgBlogAuthor')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgWritePlans')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgMyBack')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgMyBack')}}</p>
        <p class="mb-0">{{ $t('ambassador.charte.cgDoOrga')}}</p>
        <p>{{ $t('ambassador.charte.cgDoOrga')}}</p>
        <p class="mt-4">{{ $t('ambassador.charte.cgRepresent')}}</p>
        <form @submit="acceptAmbassadorCG" class="text-center">
          <input v-model="acceptCB" id="ambassadorCG" class="cbAmbassador" type="checkbox" required>
          <label for="ambassadorCG" class="ml-3">{{ $t('ambassador.charte.cgAccept')}}</label>
          <button type="submit" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.validate')}}<br></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data: function ()  {
      return {
        acceptCB: false
      }
    },
    methods:{
      acceptAmbassadorCG(){
        this.$router.push('/becomeAmbassador');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/_app-variables.scss";
  @import "../scss/app.scss";

  .cbAmbassador{
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
  }


</style>

