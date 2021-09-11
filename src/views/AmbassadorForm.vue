<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form @submit.prevent="submitAmbassador" ref="formAmba" class="text-left">
        <div class="grey-ctn">
          <h5>{{ $t('ambassador.form.personalInfos')}}</h5>
          <input class="form-control mb-3" v-model="form.texts.country" :placeholder="$t('ambassador.form.amCountry')" required>
          <input class="form-control mb-3" v-model="form.texts.university" :placeholder="$t('ambassador.form.amUniversity')" required>
          <input class="form-control mb-3" v-model="form.texts.exchange" :placeholder="$t('ambassador.form.amExchange')" required>
          <input class="form-control mb-3" v-model="form.texts.component" :placeholder="$t('ambassador.form.amComposante')" required>
        </div>
        <h5 class="mt-4">{{ $t('ambassador.form.amBefore')}}</h5>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amDoPortrait')}}</label>
          <upload-files :files="form.images.portrait" :maxFiles="3" :isText=true @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0" for="amDoInterview">{{ $t('ambassador.form.amDoInterview')}}</label>
          <p class="mb-0"><b>{{ $t('ambassador.form.amChooseInterview')}}</b></p>
          <input class="form-control mb-3" v-model="form.texts.interview" id="amDoInterview" type="date" required>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amDoPhoto')}}</label>
          <upload-files :files="form.images.photo" :maxFiles="10" :isText=false @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0" for="amDoPubli">{{ $t('ambassador.form.amDoPubli')}}</label>
          <p class="mb-0">{{ $t('ambassador.form.amProposition')}}</p>
          <textarea class="form-control mb-3" v-model="form.texts.publication" id="amDoPubli"></textarea>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amDoPostal')}}</label>
          <p class="mb-0">{{ $t('ambassador.form.amAdress')}}</p>
          <p class="mb-0">{{ $t('ambassador.form.amFizer')}}</p>
          <upload-files :files="form.images.postcard" :maxFiles="2" :isText=false @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amRepresent')}}</label>
          <upload-files :files="form.images.represent" :maxFiles="10" :isText=false @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
          <textarea class="form-control mb-3" v-model="form.texts.blog" id="amBlog" ></textarea>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amCarnet')}}</label>
          <upload-files :files="form.images.logbook" :maxFiles="2" :isText=false @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amPlan')}}</label>
          <upload-files :files="form.images.tips" :maxFiles="2" :isText=true @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>
        <div class="grey-ctn">
          <label class="mb-0">{{ $t('ambassador.form.amPromotion')}}</label>
          <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
          <upload-files :files="form.images.promotion" :maxFiles="10" :isText=false @disabled="disableForm" class="mt-2 mb-3"></upload-files>
        </div>

        <hr>
        <p class="mb-0">{{ $t('ambassador.form.amIdea')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amParticipate')}}</p>

        <!--------------------------------------------------------------------------------------------------->
        <!-------------------------------------------- UE MODULE -------------------------------------------->
        <!--------------------------------------------------------------------------------------------------->
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.UEInter')}}</p>
        <div class="w-100 text-center mt-3" >
          <input type="checkbox" class="cbAmbassador" v-model="form.texts.isUE">
        </div>
        <hr>
        <div v-if="form.texts.isUE">
          <div class="grey-ctn">
            <label class="mb-0">{{ $t('ambassador.form.amRecueil')}}</label>
            <upload-files :files="form.images.ueTips" :maxFiles="2" :isText=true @disabled="disableForm" class="mt-2 mb-3"></upload-files>
          </div>
          <div class="grey-ctn">
            <label class="mb-0">{{ $t('ambassador.form.amRapport')}}</label>
            <upload-files :files="form.images.ueReport" :maxFiles="2" :isText=true @disabled="disableForm" class="mt-2 mb-3"></upload-files>
          </div>
        </div>
        <!--------------------------------------------------------------------------------------------------->
        <!-------------------------------------------- UE MODULE -------------------------------------------->
        <!--------------------------------------------------------------------------------------------------->
        <button type="submit" :disabled="isDisabled" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('ambassador.form.sendForm')}}<br></button>
      </form>
      <button class="btn explorebtnsecondary" @click="saveForm()">{{ $t('ambassador.form.saveForm')}}<br>{{ $t('ambassador.form.exceptImages')}}</button>
      <button class="btn explorebtnsecondary explorebtn-delete mt-3" @click="deleteForm()">
        <i class="fas fa-exclamation-triangle"></i>   {{ $t('ambassador.form.deleteForm')}}   <i class="fas fa-exclamation-triangle"></i> </button>
    </div>
  </div>
</template>

<script>
import UploadFiles from "../components/UploadFiles";

export default {
  components: {UploadFiles},
  props: {},
  data: function ()  {
    return {
      form:{
        images:{
          portrait: [],
          photo: [],
          postcard:[],
          represent:[],
          logbook:[],
          tips:[],
          promotion:[],
          ueTips:[],
          ueReport:[],
        },
        texts:{
          country: null,
          university: null,
          exchange: null,
          component: null,
          interview: null,
          publication: null,
          blog: null,
          isUE: false,
        }
      },
      isDisabled:false,
    }
  },

  beforeMount() {
    if(localStorage.getItem("ambassadorForm")){
      this.form.texts = JSON.parse(localStorage.getItem("ambassadorForm"));
    }
  },

  methods: {
    saveForm(){
      localStorage.setItem("ambassadorForm", JSON.stringify(this.form.texts));
    },
    deleteForm(){
      this.$refs['formAmba'].reset()
      localStorage.removeItem('ambassadorForm');
    },

    checkForm(){
      //required 5 / 11 - for UE 8/11
      let n = 0;
      if (this.form.images.portrait[0]){ n++;}
      if (this.form.texts.publication){ n++;}
      if (this.form.texts.blog){ n++;}
      if (this.form.images.photo && this.form.images.photo.length > 0){ n++;}
      if (this.form.images.postcard && this.form.images.postcard.length > 0){ n++;}
      if (this.form.images.represent && this.form.images.represent.length > 0){ n++;}
      if (this.form.images.logbook && this.form.images.logbook.length > 0){ n++;}
      if (this.form.images.tips && this.form.images.tips.length > 0){ n++;}
      if (this.form.images.promotion && this.form.images.promotion.length > 0){ n++;}
      if (this.form.images.ueTips && this.form.images.ueTips.length > 0){ n++;}
      if (this.form.images.ueReport && this.form.images.ueReport.length > 0){ n++;}
      return n >= 5;
    },
    submitAmbassador(){
      if (!this.checkForm()){
        Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen'), type: 'error'});
        return ;
      }
      const form = new FormData(); // 5 / 11 -  8/11
      form.append('country', this.form.texts.country);//required
      form.append('university', this.form.texts.university);//required
      form.append('exchange', this.form.texts.exchange);//required
      form.append('component', this.form.texts.component);//required
      form.append('isUE', this.form.texts.isUE);//required
      form.append('interview', this.form.texts.interview.toString()); //required

      form.append('portrait', this.form.images.portrait[0].file);
      form.append('publication', this.form.texts.publication);
      form.append('blog', this.form.texts.blog);

      this.form.images.photo.forEach((file) => {
        form.append("photo", file.file);
      });
      this.form.images.postcard.forEach((file) => {
        form.append("postcard", file.file);
      });
      this.form.images.represent.forEach((file) => {
        form.append("represent", file.file);
      });
      this.form.images.logbook.forEach((file) => {
        form.append("logbook", file.file);
      });
      this.form.images.tips.forEach((file) => {
        form.append("tips", file.file);
      });
      this.form.images.promotion.forEach((file) => {
        form.append("promotion", file.file);
      });
      if (this.form.images.ueTips && this.form.images.ueTips.length > 0){
        this.form.images.ueTips.forEach((file) => {
          form.append("ueTips", file.file);
        });
      }
      if (this.form.images.ueReport && this.form.images.ueReport.length > 0){
        this.form.images.ueReport.forEach((file) => {
          form.append("ueReport", file.file);
        });
      }
      this.$store.dispatch("user/sendAmbassadorForm", form).then(
          (value) => {
            Bus.$emit('DisplayMessage', {text: this.$t('profile.successGen'), type: 'success'});
          },
          err => {
            Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen')+ " = " + err, type: 'error'});
          }
      );
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

</style>

