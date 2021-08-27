<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <!--    <p class="mb-0 mainTitle">{{ $t('ambassador.becomeAmbassador')}}</p>-->
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form @submit="submitAmbassador" class="text-left">
        <div class="personal_infos">
          <h5>{{ $t('ambassador.form.personalInfos')}}</h5>
          <input class="form-control mb-3" v-model="ambaLastname" :placeholder="$t('ambassador.form.ambaLastname')">
          <input class="form-control mb-3" v-model="amFirstname" :placeholder="$t('ambassador.form.amFirstname')">
          <input class="form-control mb-3" v-model="amMail" :placeholder="$t('ambassador.form.amMail')">
          <input class="form-control mb-3" v-model="amCountry" :placeholder="$t('ambassador.form.amCountry')">
          <input class="form-control mb-3" v-model="amUniversity" :placeholder="$t('ambassador.form.amUniversity')">
          <input class="form-control mb-3" v-model="amExchange" :placeholder="$t('ambassador.form.amExchange')">
          <input class="form-control mb-3" v-model="amComposante" :placeholder="$t('ambassador.form.amComposante')">
        </div>
        <h5 class="mt-4">{{ $t('ambassador.form.amBefore')}}</h5>
        <label class="mb-0" for="amDoPortrait">{{ $t('ambassador.form.amDoPortrait')}}</label>
        <textarea class="form-control mb-3" id="amDoPortrait" v-model="amDoPortrait" rows="5" cols="33"></textarea>
        <label class="mb-0" for="amDoInterview">{{ $t('ambassador.form.amDoInterview')}}</label>
        <p class="mb-0"><b>{{ $t('ambassador.form.amChooseInterview')}}</b></p>
        <input class="form-control mb-3" v-model="amDoInterview" id="amDoInterview" type="date">
        <label class="mb-0">{{ $t('ambassador.form.amDoPhoto')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 7)"
               id="amDoPhoto" v-on="amDoPhoto" multiple>
        <p v-if="errorsTab.indexOf('amDoPhoto') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amDoPubli">{{ $t('ambassador.form.amDoPubli')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amProposition')}}</p>
        <textarea class="form-control mb-3" v-model="amDoPubli" id="amDoPubli"></textarea>
        <label class="mb-0" for="amDoPostal">{{ $t('ambassador.form.amDoPostal')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amAdress')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amFizer')}}</p>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 7)"
               id="amDoPostal" v-on="amDoPostal" multiple>
        <p v-if="errorsTab.indexOf('amDoPostal') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amRepresent">{{ $t('ambassador.form.amRepresent')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 4)"
               id="amRepresent" v-on="amRepresent" multiple>
        <p v-if="errorsTab.indexOf('amRepresent') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
        <textarea class="form-control mb-3" v-model="amBlog" id="amBlog" ></textarea>
        <label class="mb-0" for="amCarnet">{{ $t('ambassador.form.amCarnet')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 4)"
               id="amCarnet" v-on="amCarnet" multiple>
        <p v-if="errorsTab.indexOf('amCarnet') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amPlan">{{ $t('ambassador.form.amPlan')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 4)"
               id="amPlan" v-on="amPlan" multiple>
        <p v-if="errorsTab.indexOf('amPlan') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amPromotion">{{ $t('ambassador.form.amPromotion')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 4)"
               id="amPromotion" v-on="amPromotion" multiple>
        <p v-if="errorsTab.indexOf('amPromotion') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.amIdea')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amParticipate')}}</p>

        <!-- UE Module Only-->
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.UEInter')}}</p>
        <hr>
        <label class="mb-0" for="amRecueil">{{ $t('ambassador.form.amRecueil')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 1)"
               id="amRecueil" v-on="amRecueil">
        <p v-if="errorsTab.indexOf('amRecueil') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amRapport">{{ $t('ambassador.form.amRapport')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" type="file" @change="validateFiles($event, 1)"
               id="amRapport" v-on="amRapport">
        <p v-if="errorsTab.indexOf('amRapport') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <button type="submit" :disabled="isDisabled" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.validate')}}<br></button>
      </form>
    </div>
  </div>
</template>

<script>
import router from 'vue'
export default {
  components: {},
  props: {
    ambaLastname:null,
    amFirstname:null,
    amMail:null,
    amCountry:null,
    amUniversity:null,
    amExchange:null,
    amComposante:null,
    amDoPortrait:null,
    amDoInterview:null,
    amDoPhoto: null,
    amDoPubli:null,
    amDoPostal:null,
    amRepresent:null,
    amBlog:null,
    amCarnet:null,
    amPlan:null,
    amPromotion:null,
    amRecueil:null,
    amRapport:null,
    inputtest:null,
    inputtestu:null,
    isDisabled:false,
    inputtesterrors:false,
  },
  data: function ()  {
    return {
      acceptCB: false,
      amDoPhotosg: [],
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      errorsTab:[]
    }
  },
  methods:{
    becomeAmbassador(){
      console.log("becomeAmbassador = OK")
    },
    validateFiles(event, maxFileNumber) {
      let elementId = event.target.id
      let files = event.target.files
      let filesSize = [];
      if(files.length > maxFileNumber){
        this.errorsTab.push(elementId)
        this.isDisabled = true;
      } else{
        const idx = this.errorsTab.indexOf(elementId);
        if (idx > -1){
          this.errorsTab.splice(this.errorsTab.indexOf(elementId),1);
        }
      }
      for (let i = 0; i < files.length; i++) {
        filesSize.push(files[i].size/ 1024 / 1024)
      }
      for (let i = 0; i < filesSize.length; i++) {
        if (filesSize[i] > 2) {
          this.errorsTab.push(elementId)
          this.isDisabled = true
          return(-1);
        } else {
          const idx = this.errorsTab.indexOf(elementId);
          if (idx > -1){
            this.errorsTab.splice(this.errorsTab.indexOf(elementId),1);
          }
          this.isDisabled = false
        }
      }
    },
    submitAmbassador(){
      console.log("submit form")
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

.personal_infos{
  background-color: #f0f0f0;
  padding: 15px;
}

</style>

