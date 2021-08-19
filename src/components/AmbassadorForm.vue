<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <!--    <p class="mb-0 mainTitle">{{ $t('ambassador.becomeAmbassador')}}</p>-->
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form action="mailto:benjamin.lepine@gmail.com" class="text-left">
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
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPhoto1" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPhoto2" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPhoto3" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPhoto4" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPhoto5" type="file">

        <label class="mb-0" for="amDoPubli">{{ $t('ambassador.form.amDoPubli')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amProposition')}}</p>
        <textarea class="form-control mb-3" v-model="amDoPubli" id="amDoPubli"></textarea>

        <label class="mb-0" for="amDoPostal">{{ $t('ambassador.form.amDoPostal')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amAdress')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amFizer')}}</p>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPostal" id="amDoPostal" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amDoPostal2" type="file">

        <label class="mb-0" for="amRepresent">{{ $t('ambassador.form.amRepresent')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRepresent1" id="amRepresent" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRepresent2" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRepresent3" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRepresent4" type="file">

        <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
        <textarea class="form-control mb-3" v-model="amBlog" id="amBlog" ></textarea>

        <label class="mb-0" for="amCarnet">{{ $t('ambassador.form.amCarnet')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amCarnet1" id="amCarnet" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amCarnet2" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amCarnet3" type="file">
        <input class="form-control mb-3 pb-5 pt-3" v-on="amCarnet4" type="file">

        <label class="mb-0" for="amPlan">{{ $t('ambassador.form.amPlan')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amPlan" id="amPlan" type="file">

        <label class="mb-0" for="amPromotion">{{ $t('ambassador.form.amPromotion')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amPromotion" id="amPromotion" type="file">
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.amIdea')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amParticipate')}}</p>

        <!-- UE Module Only-->
        <hr>
        <p class="mb-0">{{ $t('ambassador.form.UEInter')}}</p>
        <hr>

        <label class="mb-0" for="amRecueil">{{ $t('ambassador.form.amRecueil')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRecueil" id="amRecueil" type="file">

        <label class="mb-0" for="amRapport">{{ $t('ambassador.form.amRapport')}}</label>
        <input class="form-control mb-3 pb-5 pt-3" v-on="amRapport" id="amRapport" type="file">

<!--        <input v-model="acceptCB" id="ambassadorCG" class="cbAmbassador" type="checkbox" required>-->
<!--        <label for="ambassadorCG" class="ml-3">{{ $t('ambassador.charte.cgAccept')}}</label>-->
        <button type="submit" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.validate')}}<br></button>
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
    amDoPhoto1: null, amDoPhoto2: null, amDoPhoto3: null, amDoPhoto4: null, amDoPhoto5: null,
    amDoPubli:null,
    amDoPostal:null, amDoPostal2:null,
    amRepresent1:null, amRepresent2:null, amRepresent3:null, amRepresent4:null,
    amBlog:null,
    amCarnet1:null, amCarnet2:null, amCarnet3:null, amCarnet4:null,
    amPlan:null,
    amPromotion:null,
    amRecueil:null,
    amRapport:null
  },
  data: function ()  {
    return {
      acceptCB: false,
      amDoPhotosg: [],
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods:{
    becomeAmbassador(){
      console.log("becomeAmbassador = OK")
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

