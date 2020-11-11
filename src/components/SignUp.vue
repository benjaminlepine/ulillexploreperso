<template>
  <div>
      <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
      <p class="mb-0 mainTitle">{{ $t('signup.signup')}}</p>
      <div class="mainctn">
          <input class="form-control mb-3" :placeholder="$t('signup.lastname')" id="lastname" type="text">
          <input class="form-control mb-3" :placeholder="$t('signup.firstname')" id="firstname" type="text">
          <input class="form-control mb-3" :placeholder="$t('signup.email')" id="email" type="text">
          <input class="form-control mb-3" :placeholder="$t('signup.password')" id="password" type="password">
          <div class="d-flex text-left">
              <input type="checkbox" class="largerCheckbox">
              <p class="rgpd-text">{{ $t('signup.rgpd')}}</p>
          </div>
          <button class="btn mt-3 explorebtn explorebtn--signup">{{ $t('signup.register')}}<br></button>
      </div>
  </div>
</template>

<script>
  export default {
    props: {}
  }
</script>

<style scoped lang="scss">
  @import "../scss/_app-variables.scss";
  @import "../scss/app.scss";

  .largerCheckbox{
      margin-top: 14px;
      margin-left: 4px;
      -ms-transform: scale(1.5); /* IE */
      -moz-transform: scale(1.5); /* FF */
      -webkit-transform: scale(1.5); /* Safari and Chrome */
      -o-transform: scale(1.5); /* Opera */
      transform: scale(1.5);
      padding: 10px;
  }

  .rgpd-text{
      margin-bottom: 0;
      text-align: left;
      padding-left: 12px !important;
      padding-top: 8px;
      font-size: 14px;
      color: $clear-main-color;
  }



</style>
