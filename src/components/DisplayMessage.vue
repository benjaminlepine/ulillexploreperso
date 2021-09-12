<template>
  <div class="msg-ctn" v-if="message" >
    <div class="msg-ctn-color d-flex justify-content-between"
         :class="{'msg-error': message.type === 'error','msg-success': message.type === 'success', 'msg-info': message.type === 'info'}">
        <p class="mb-0 p-4">{{message.text}}</p>
        <p v-if="message.error" class="mb-0">{{message.error}}</p>
      <div class="text-right pr-2" v-on:click="close()"><i class="fa fa-times fa-2x msg-cross" v-on:click="close()"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    selectedLanguage: String,
  },
  data: function (){
    return {
      message: null
    }
  },
  methods: {
    close(){
      console.log("close")
      this.message = null;
    }
  },
  mounted() {
    Bus.$on('DisplayMessage', (message) => {
      let testu = "bonjour"
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 6000);
    });

    console.log("message = ", this.message)
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.msg{
  &-ctn{
    width: 100%;
    position: fixed;
    bottom: 15px;
    z-index: 30;
    padding: 12px;
    &-color{
      margin: 2%;
      border-radius: 12px;
    }
  }
  &-close{
    background-color: transparent;
    border: none;
    font-size: 30px;
    text-align: right;
    padding: 0;
    &:focus{
      border: none;
      outline: none;
    }
  }
  &-success{background-color: #c0dac0;}
  &-error{background-color: #f3c0c0;}
  &-info{background-color: #c0c0dc;}
  &-cross{
    color: black;
    margin-top: 2px;
  }
}
</style>
