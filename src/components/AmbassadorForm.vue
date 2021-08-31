<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form @submit.prevent="submitAmbassador" class="text-left">
        <div class="personal_infos">
          <h5>{{ $t('ambassador.form.personalInfos')}}</h5>
          <input class="form-control mb-3" v-model="formFinal.texts.amCountry" :placeholder="$t('ambassador.form.amCountry')" required>
          <input class="form-control mb-3" v-model="formFinal.texts.amUniversity" :placeholder="$t('ambassador.form.amUniversity')" required>
          <input class="form-control mb-3" v-model="formFinal.texts.amExchange" :placeholder="$t('ambassador.form.amExchange')" required>
          <input class="form-control mb-3" v-model="formFinal.texts.amComposante" :placeholder="$t('ambassador.form.amComposante')" required>
        </div>
        <h5 class="mt-4">{{ $t('ambassador.form.amBefore')}}</h5>
        <label class="mb-0" for="amDoPortrait">{{ $t('ambassador.form.amDoPortrait')}}</label>
        <textarea class="form-control mb-3" id="amDoPortrait" v-model="formFinal.texts.amDoPortrait" rows="5" cols="33"></textarea>
        <label class="mb-0" for="amDoInterview">{{ $t('ambassador.form.amDoInterview')}}</label>
        <p class="mb-0"><b>{{ $t('ambassador.form.amChooseInterview')}}</b></p>
        <input class="form-control mb-3" v-model="formFinal.texts.amDoInterview" id="amDoInterview" type="date" required>
        <label class="mb-0">{{ $t('ambassador.form.amDoPhoto')}}</label>
        <upload-files :files="formFinal.images.amDoPhoto" :maxImages="10" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0" for="amDoPubli">{{ $t('ambassador.form.amDoPubli')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amProposition')}}</p>
        <textarea class="form-control mb-3" v-model="formFinal.texts.amDoPubli" id="amDoPubli"></textarea>
        <label class="mb-0">{{ $t('ambassador.form.amDoPostal')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amAdress')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amFizer')}}</p>
        <upload-files :files="formFinal.images.amDoPostal" :maxImages="2" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0">{{ $t('ambassador.form.amRepresent')}}</label>
        <upload-files :files="formFinal.images.amRepresent" :maxImages="10" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
        <textarea class="form-control mb-3" v-model="formFinal.texts.amBlog" id="amBlog" ></textarea>
        <label class="mb-0">{{ $t('ambassador.form.amCarnet')}}</label>
        <upload-files :files="formFinal.images.amCarnet" :maxImages="2" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0">{{ $t('ambassador.form.amPlan')}}</label>
        <upload-files :files="formFinal.images.amPlan" :maxImages="2" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0">{{ $t('ambassador.form.amPromotion')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
        <upload-files :files="formFinal.images.amPromotion" :maxImages="10" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.amIdea')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amParticipate')}}</p>
        <!-- UE Module Only-->
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.UEInter')}}</p>
        <hr>
        <label class="mb-0">{{ $t('ambassador.form.amRecueil')}}</label>
        <upload-files :files="formFinal.images.amRecueil" :maxImages="2" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <label class="mb-0">{{ $t('ambassador.form.amRapport')}}</label>
        <upload-files :files="formFinal.images.amRapport" :maxImages="2" @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        <div class="d-flex"></div>
        <button type="submit" :disabled="isDisabled" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('ambassador.form.sendForm')}}<br></button>
      </form>
      <button class="btn explorebtnsecondary" @click="saveForm()">{{ $t('ambassador.form.saveForm')}}<br>{{ $t('ambassador.form.exceptImages')}}</button>
      <button class="btn explorebtnsecondary explorebtn-delete mt-3" @click="deleteForm()">
        <i class="fas fa-exclamation-triangle"></i>   {{ $t('ambassador.form.deleteForm')}}   <i class="fas fa-exclamation-triangle"></i> </button>
    </div>
  </div>
</template>

<script>
import UploadFiles from "./UploadFiles";

export default {
  components: {UploadFiles},
  props: {},
  data: function ()  {
    return {
      formFinal:{
        images:{
          amDoPhoto: [],
          amDoPostal:[],
          amRepresent:[],
          amCarnet:[],
          amPlan:[],
          amPromotion:[],
          amRecueil:[],
          amRapport:[],
        },
        texts:{
          amCountry: null,
          amUniversity: null,
          amExchange: null,
          amComposante: null,
          amDoPortrait: null,
          amDoInterview: null,
          amDoPubli: null,
          amBlog: null,
        }
      },
      isDisabled:false,
    }
  },

  beforeMount() {
    this.formFinal = {
      images:{ amDoPhoto: [], amDoPostal:[], amRepresent:[], amCarnet:[], amPlan:[], amPromotion:[], amRecueil:[], amRapport:[],},
      texts:{amCountry: "", amUniversity: "", amExchange: "", amComposante: "", amDoPortrait: "", amDoInterview: Date, amDoPubli: "", amBlog: "",}
    }
    if(localStorage.getItem("ambassadorForm")){
      this.formFinal.texts = JSON.parse(localStorage.getItem("ambassadorForm"));
    }
  },

  methods: {
    becomeAmbassador() {
      console.log("becomeAmbassador = OK")
    },
    saveForm(){
      localStorage.setItem("ambassadorForm", JSON.stringify(this.formFinal.texts));
    },
    deleteForm(){
      localStorage.removeItem('ambassadorForm');
    },
    submitAmbassador(){
      console.log("Ambassador Form = ", this.formFinal)
    },
    disableForm(isDisabled){
      this.isDisabled = isDisabled
    },
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";


.personal_infos{
  background-color: #f0f0f0;
  padding: 15px;
}

</style>

