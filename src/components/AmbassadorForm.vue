<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form @submit.prevent="submitAmbassador" class="text-left">
        <div class="personal_infos">
          <h5>{{ $t('ambassador.form.personalInfos')}}</h5>
          <input class="form-control mb-3" v-model="amCountry" :placeholder="$t('ambassador.form.amCountry')" required>
          <input class="form-control mb-3" v-model="amUniversity" :placeholder="$t('ambassador.form.amUniversity')" required>
          <input class="form-control mb-3" v-model="amExchange" :placeholder="$t('ambassador.form.amExchange')" required>
          <input class="form-control mb-3" v-model="amComposante" :placeholder="$t('ambassador.form.amComposante')" required>
        </div>
        <h5 class="mt-4">{{ $t('ambassador.form.amBefore')}}</h5>
        <label class="mb-0" for="amDoPortrait">{{ $t('ambassador.form.amDoPortrait')}}</label>
        <textarea class="form-control mb-3" id="amDoPortrait" v-model="amDoPortrait" rows="5" cols="33"></textarea>
        <label class="mb-0" for="amDoInterview">{{ $t('ambassador.form.amDoInterview')}}</label>
        <p class="mb-0"><b>{{ $t('ambassador.form.amChooseInterview')}}</b></p>
        <input class="form-control mb-3" v-model="amDoInterview" id="amDoInterview" type="date" required>
        <label class="mb-0">{{ $t('ambassador.form.amDoPhoto')}}</label>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amDoPhoto, 7)" id="amDoPhoto" multiple required>
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
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amDoPostal, 7)" id="amDoPostal" multiple required>
        <p v-if="errorsTab.indexOf('amDoPostal') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 7 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amRepresent">{{ $t('ambassador.form.amRepresent')}}</label>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amRepresent, 4)" id="amRepresent" multiple required>
        <p v-if="errorsTab.indexOf('amRepresent') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 4 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
        <textarea class="form-control mb-3" v-model="amBlog" id="amBlog" ></textarea>
        <label class="mb-0" for="amCarnet">{{ $t('ambassador.form.amCarnet')}}</label>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amCarnet, 4)" id="amCarnet" multiple required>
        <p v-if="errorsTab.indexOf('amCarnet') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 4 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amPlan">{{ $t('ambassador.form.amPlan')}}</label>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amPlan, 4)" id="amPlan" multiple required>
        <p v-if="errorsTab.indexOf('amPlan') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 4 {{ $t('ambassador.form.maxFiles')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amPromotion">{{ $t('ambassador.form.amPromotion')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amPromotion, 4)" id="amPromotion" multiple required>
        <p v-if="errorsTab.indexOf('amPromotion') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">- 4 {{ $t('ambassador.form.maxFiles')}}</span><br>
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
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amRecueil, 1)" id="amRecueil">
        <p v-if="errorsTab.indexOf('amRecueil') !== -1" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}</span><br>
          <span class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
        </p>
        <label class="mb-0" for="amRapport">{{ $t('ambassador.form.amRapport')}}</label>
        <input class="form-control mb-1 pb-5 pt-3" type="file" @change="onFileSelected($event, amRapport, 1)" id="amRapport">
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
export default {
  components: {},
  props: {},
  data: function ()  {
    return {
      acceptCB: false,
      amCountry:null,
      amUniversity:null,
      amExchange:null,
      amComposante:null,
      amDoPortrait:null,
      amDoInterview:null,
      amDoPhoto: {},
      amDoPubli:null,
      amDoPostal:{},
      amRepresent:{},
      amBlog:null,
      amCarnet:{},
      amPlan:{},
      amPromotion:{},
      amRecueil:{},
      amRapport:{},
      isDisabled:false,
      errorsTab:[],
    }
  },
  methods:{
    becomeAmbassador(){
      console.log("becomeAmbassador = OK")
    },
    onFileSelected(event, inputRef, maxFileNumber) {
      let elementId = event.target.id
      if(event.target.files.length > maxFileNumber){
        // Trop de fichiers - Affiche une erreur
        this.errorsTab.push(elementId)
        this.isDisabled = true;
        return -1
      } else{
        // OK - Enlève l'erreur sur cet input
        const idx = this.errorsTab.indexOf(elementId);
        if (idx > -1){
          this.errorsTab.splice(this.errorsTab.indexOf(elementId),1);
        }
      }
      inputRef.selectedFile = []
      inputRef.fd = []
      for (let i = 0; i < event.target.files.length; i++) {
        // Control de la Taille du fichier courant "i"
        if ((event.target.files[i].size/ 1024 / 1024) > 2) {
          // Le fichier est trop lourd - Superieur à 2mo
          this.errorsTab.push(elementId)
          this.isDisabled = true
          return(-1);
        } else {
          // Le fichier est OK - On enlève l'erreur
          const idx = this.errorsTab.indexOf(elementId);
          if (idx > -1){
            this.errorsTab.splice(this.errorsTab.indexOf(elementId),1);
          }
          if(this.errorsTab.length <= 0){
            this.isDisabled = false
          }
        }
       // Ajout des infos du file necessaire a la creation du FormData
        inputRef.selectedFile.push(event.target.files[i])
        // Ajout du FormData (Donnée binaire effective du fichier) dans l'objet corespondant
        inputRef.fd[i] = new FormData();
        inputRef.fd[i].append('image', inputRef.selectedFile[i], inputRef.selectedFile[i].name)
      }
    },
    submitAmbassador(){
      const form = {
        // string
        country:this.amCountry,
        univesity:this.amUniversity,
        exchange:this.amExchange,
        composante:this.amComposante,
        portrait:this.amDoPortrait,
        // date
        interviewDate:this.amDoInterview,

        photo:this.amDoPhoto,
        publications:this.amDoPubli,
        postcard:this.amDoPostal,
        represent:this.amRepresent,
        blog:this.amBlog,
        logbook:this.amCarnet,
        goodPlans:this.amPlan,
        promotion:this.amPromotion,
        uegoodPlans:this.amRecueil,
        ueRapport:this.amRapport,
      };
      console.log(form);
      
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

