<template>
    <div class="loader"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data: function ()  {return {}},
  methods:{}
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.loader {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 8px solid $main-color;
  border-radius: 50%;
  border-top: 8px solid $third-color;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
